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
				const { data: tripPackages } = await client
					.from("trippackages")
					.select("*")
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
				const { data: tripPackage } = await client
					.from("trippackages")
					.select("*")
					.eq("id", id)
				return tripPackage?.map((pck: any) => {
					return {
						...pck,
						cancelationPolicy: pck.cancelationpolicy[0],
						disclaimer: pck.disclaimer[0],
					}
				})[0] as TripPackage
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
