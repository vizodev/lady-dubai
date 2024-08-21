import { AIRPORTS_STORE, SUPABASE_AIRPORTS_POOL_TABLE } from "~/constants"
import { type Airport } from "~/models"

interface IState {
	airports: Airport[]
	loadingAirports: boolean
	errorOnLoadAirports: boolean
}

export const useAirportsStore = defineStore(AIRPORTS_STORE, {
	state: (): IState => ({
		airports: [],
		loadingAirports: false,
		errorOnLoadAirports: false,
	}),
	getters: {},
	actions: {
		async loadAirports(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadAirports = false
			this.loadingAirports = true

			try {
				const { data } = await client
					.from(SUPABASE_AIRPORTS_POOL_TABLE)
					.select("*")

				this.airports = data as Airport[]
			} catch (error) {
				this.errorOnLoadAirports = true
				console.error("Error loading trip packages", error)
			}

			this.loadingAirports = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAirportsStore, import.meta.hot))
}
