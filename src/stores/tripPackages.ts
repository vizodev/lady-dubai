import {
	SUPABASE_ATTRACTION_ID_FIELD,
	SUPABASE_ID_FIELD,
	SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE,
	SUPABASE_TRIP_PACKAGE_ID_FIELD,
	SUPABASE_TRIP_PACKAGES_TABLE,
	TRIP_PACKAGE_STORE,
} from "~/constants"
import { type AvailableDate, type TripPackage } from "~/models"

interface IState {
	tripPackages: TripPackage[]
	loadingTripPackages: boolean
	loadingTripPackage: boolean
	errorOnLoadTripPackages: boolean
	errorOnLoadTripPackage: boolean
}

export const useTripPackagesStore = defineStore(TRIP_PACKAGE_STORE, {
	state: (): IState => ({
		tripPackages: [],
		loadingTripPackages: false,
		loadingTripPackage: false,
		errorOnLoadTripPackages: false,
		errorOnLoadTripPackage: false,
	}),
	getters: {},
	actions: {
		async loadTripPackages(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadTripPackages = false
			this.loadingTripPackages = true

			try {
				const { data } = await client
					.from(SUPABASE_TRIP_PACKAGES_TABLE)
					.select("*")

				data?.map((i: any) => {
					i.cancelationPolicy = i.cancelationpolicy[0]
					i.disclaimer = i.disclaimer[0]
				})

				const tripPackages = data as TripPackage[]

				for (const trip of tripPackages) {
					let { data: accommodation } = await client
						.from("trip_package_accommodations")
						.select("accommodations_pool (*)")
						.eq("trip_package_id", trip.id)

					trip.accommodation = accommodation![0].accommodations_pool
				}

				this.tripPackages = tripPackages as TripPackage[]
			} catch (error) {
				this.errorOnLoadTripPackages = true
				console.error("Error loading trip packages", error)
			}

			this.loadingTripPackages = false
		},
		async getTripPackageById(id: number): Promise<TripPackage | undefined> {
			const client = useSupabaseClient()

			this.errorOnLoadTripPackage = false
			this.loadingTripPackage = true

			try {
				const { data } = await client
					.from(SUPABASE_TRIP_PACKAGES_TABLE)
					.select("*")
					.eq(SUPABASE_ID_FIELD, id)

				const tripPackage = data![0] as any
				let { data: accommodation } = await client
					.from("trip_package_accommodations")
					.select("accommodations_pool (*)")
					.eq(SUPABASE_TRIP_PACKAGE_ID_FIELD, tripPackage.id)

				return {
					...tripPackage,
					accommodation: accommodation![0].accommodations_pool,
					cancelationPolicy: tripPackage.cancelationpolicy[0],
					disclaimer: tripPackage.disclaimer[0],
				} as TripPackage
			} catch (error) {
				this.errorOnLoadTripPackage = true
				console.error("Error loading trip package", error)
			}

			this.loadingTripPackage = false
		},
		async getTripPackagesByAttractionId(
			attractionId: number
		): Promise<TripPackage[]> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE)
					.select("*")
					.eq(SUPABASE_ATTRACTION_ID_FIELD, attractionId)

				if (!data) return []

				const tripPackages = [] as TripPackage[]
				for (const tripPackageAttraction of data) {
					const tripPackage = await this.getTripPackageById(
						(tripPackageAttraction as any).trip_package_id
					)

					if (tripPackage) tripPackages.push(tripPackage)
				}

				return tripPackages
			} catch (error) {
				console.error("Error loading trip packages by attraction id", error)
			}

			return []
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTripPackagesStore, import.meta.hot))
}
