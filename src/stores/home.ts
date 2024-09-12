import { HOME_STORE, SUPABASE_HOME_TABLE } from "~/constants"
import { type HomeData } from "~/models"

interface IState {
	homeData: HomeData | null
	loadingHomeData: boolean
	errorOnLoadHomeData: boolean
}

export const useHomeStore = defineStore(HOME_STORE, {
	state: (): IState => ({
		homeData: null,
		loadingHomeData: false,
		errorOnLoadHomeData: false,
	}),
	getters: {},
	actions: {
		async loadHome(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadHomeData = false
			this.loadingHomeData = true

			try {
				const { data } = await client.from(SUPABASE_HOME_TABLE).select("*")

				if (!data) throw new Error()

				this.homeData = data[0] as HomeData
			} catch (error) {
				this.errorOnLoadHomeData = true
				console.error("Error loading home data", error)
			}

			this.loadingHomeData = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useHomeStore, import.meta.hot))
}
