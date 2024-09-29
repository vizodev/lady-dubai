import { SUPABASE_WHY_US_TABLE, WHY_US_STORE } from "~/constants"
import { type WhyUsData } from "~/models"

interface IState {
	whyUsData: WhyUsData | null
	loadingWhyUsData: boolean
	errorOnLoadWhyUsData: boolean
}

export const useWhyUsStore = defineStore(WHY_US_STORE, {
	state: (): IState => ({
		whyUsData: null,
		loadingWhyUsData: false,
		errorOnLoadWhyUsData: false,
	}),
	getters: {},
	actions: {
		async loadWhyUs(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadWhyUsData = false
			this.loadingWhyUsData = true

			try {
				const { data } = await client.from(SUPABASE_WHY_US_TABLE).select("*")

				if (!data) throw new Error()

				this.whyUsData = data[0] as WhyUsData
			} catch (error) {
				this.errorOnLoadWhyUsData = true
				console.error("Error loading whyUs data", error)
			}

			this.loadingWhyUsData = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useWhyUsStore, import.meta.hot))
}
