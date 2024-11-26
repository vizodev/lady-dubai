import {
	SUPABASE_ACCOMMODATIONS_FEATURES_TABLE,
	SUPABASE_ATTRACTION_ID_FIELD,
	SUPABASE_ID_FIELD,
	SUPABASE_SLUG_FIELD,
	SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE,
	SUPABASE_TRIP_PACKAGES_TABLE,
	TRIP_PACKAGE_STORE,
} from "~/constants"
import { type AccommodationFeature, type TripPackage } from "~/models"

interface IState {
	tripPackages: TripPackage[]
	accommodationsFeatures: AccommodationFeature[]
	loadingTripPackages: boolean
	loadingTripPackage: boolean
	errorOnLoadTripPackages: boolean
	errorOnLoadTripPackage: boolean
}

export const useTripPackagesStore = defineStore(TRIP_PACKAGE_STORE, {
	state: (): IState => ({
		tripPackages: [],
		accommodationsFeatures: [],
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

				await this.getAccommodationsFeatures()

				this.tripPackages = data?.map((i) =>
					formatTripPackage(i, this.accommodationsFeatures)
				) as TripPackage[]
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

				await this.getAccommodationsFeatures()

				return formatTripPackage(data![0], this.accommodationsFeatures)
			} catch (error) {
				this.errorOnLoadTripPackage = true
				console.error("Error loading trip package", error)
			}

			this.loadingTripPackage = false
		},
		async getTripPackageBySlug(slug: string): Promise<TripPackage | undefined> {
			const client = useSupabaseClient()

			this.errorOnLoadTripPackage = false
			this.loadingTripPackage = true

			try {
				const { data } = await client
					.from(SUPABASE_TRIP_PACKAGES_TABLE)
					.select("*")
					.eq(SUPABASE_SLUG_FIELD, slug)

				await this.getAccommodationsFeatures()

				return formatTripPackage(data![0], this.accommodationsFeatures)
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

				await this.getAccommodationsFeatures()

				const tripPackages = [] as TripPackage[]
				for (const tripPackageAttraction of data) {
					const tripPackage = await this.getTripPackageById(
						(tripPackageAttraction as any).trip_package_id
					)

					if (tripPackage)
						tripPackages.push(
							formatTripPackage(tripPackage, this.accommodationsFeatures)
						)
				}

				return tripPackages
			} catch (error) {
				console.error("Error loading trip packages by attraction id", error)
			}

			return []
		},
		async getAccommodationsFeatures(): Promise<AccommodationFeature[]> {
			const client = useSupabaseClient()

			try {
				if (this.accommodationsFeatures.length === 0) {
					const { data } = await client
						.from(SUPABASE_ACCOMMODATIONS_FEATURES_TABLE)
						.select("*")

					this.accommodationsFeatures = data as AccommodationFeature[]
				}

				return this.accommodationsFeatures
			} catch (error) {
				console.error("Error loading accommodations features", error)
			}

			return []
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTripPackagesStore, import.meta.hot))
}
