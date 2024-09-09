import {
	ATTRACTIONS_STORE,
	SUPABASE_ATTRACTIONS_POOL_TABLE,
	SUPABASE_ID_FIELD,
	SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE,
	SUPABASE_TRIP_PACKAGE_ID_FIELD,
} from "~/constants"
import { type Attraction } from "~/models"

interface IState {
	attractions: Attraction[]
	loadingAttractions: boolean
	errorOnLoadAttractions: boolean
}

export const useAttractionsStore = defineStore(ATTRACTIONS_STORE, {
	state: (): IState => ({
		attractions: [],
		loadingAttractions: false,
		errorOnLoadAttractions: false,
	}),
	getters: {},
	actions: {
		async loadAttractions(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadAttractions = false
			this.loadingAttractions = true

			try {
				const { data } = await client
					.from(SUPABASE_ATTRACTIONS_POOL_TABLE)
					.select("*")

				this.attractions = data as Attraction[]
			} catch (error) {
				this.errorOnLoadAttractions = true
				console.error("Error loading attractions", error)
			}

			this.loadingAttractions = false
		},
		async getAttractionById(id: number): Promise<Attraction | undefined> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_ATTRACTIONS_POOL_TABLE)
					.select("*")
					.eq(SUPABASE_ID_FIELD, id)

				if (!data) return

				return data[0] as Attraction
			} catch (error) {
				console.error("Error getting attraction by id", error)
			}
		},
		async getAttractionsByTripPackageId(
			tripPackageId: number
		): Promise<Attraction[]> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_TRIP_PACKAGE_ATTRACTIONS_TABLE)
					.select("*")
					.eq(SUPABASE_TRIP_PACKAGE_ID_FIELD, tripPackageId)

				if (!data) return []

				const attractions = [] as Attraction[]
				for (const i of data) {
					const attraction = await this.getAttractionById(
						(i as any).attraction_id
					)

					if (attraction) attractions.push(attraction)
				}

				return attractions
			} catch (error) {
				console.error("Error loading trip packages by attraction id", error)
			}

			return []
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAttractionsStore, import.meta.hot))
}
