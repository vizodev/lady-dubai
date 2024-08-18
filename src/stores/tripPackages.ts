import { TRIP_PACKAGE_STORE } from "~/constants"
import { type TripPackage } from "~/models"

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
		async loadTripPackages() {
			const client = useSupabaseClient()
			this.errorOnLoadTripPackages = false
			this.loadingTripPackages = true
			try {
				const { data } = await client.from("trippackages").select("*")

				const tripPackages = data as TripPackage[]

				for (const trip of tripPackages) {
					let { data: accommodation } = await client
						.from("trip_package_accommodations")
						.select(
							`
						accommodations_pool (*)
						`
						)
						.eq("trip_package_id", trip.id)

					console.log(accommodation)

					trip.accommodation = accommodation![0].accommodations_pool
				}

				this.tripPackages = tripPackages as TripPackage[]
				console.log("Trip packages loaded", this.tripPackages)
			} catch (error) {
				this.errorOnLoadTripPackages = true
				console.error("Error loading trip packages", error)
			} finally {
				this.loadingTripPackages = false
				return this.tripPackages ?? []
			}
		},
		async loadTripPackageById(id: string) {
			try {
				this.errorOnLoadTripPackage = false
				this.loadingTripPackage = true
				const client = useSupabaseClient()
				const { data } = await client
					.from("trippackages")
					.select("*")
					.eq("id", id)

				const tripPackage = data![0] as any
				let { data: accommodation } = await client
					.from("trip_package_accommodations")
					.select(
						`
				accommodations_pool (*)
				`
					)
					.eq("trip_package_id", tripPackage.id)

				return {
					...tripPackage,
					accommodation: accommodation![0].accommodations_pool,
					cancelationPolicy: tripPackage.cancelationpolicy[0],
					disclaimer: tripPackage.disclaimer[0],
				} as TripPackage
			} catch (error) {
				this.errorOnLoadTripPackage = true
				console.error("Error loading trip package", error)
			} finally {
				this.loadingTripPackage = false
			}
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTripPackagesStore, import.meta.hot))
}
