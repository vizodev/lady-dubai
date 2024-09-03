import { LANGUAGES_STORE, SUPABASE_LANGUAGES_TABLE } from "~/constants"
import { type Language } from "~/models"

interface IState {
	languages: Language[]
	loadingLanguages: boolean
	errorOnLoadLanguages: boolean
}

export const useLanguagesStore = defineStore(LANGUAGES_STORE, {
	state: (): IState => ({
		languages: [],
		loadingLanguages: false,
		errorOnLoadLanguages: false,
	}),
	getters: {},
	actions: {
		async loadLanguages(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadLanguages = false
			this.loadingLanguages = true

			try {
				const { data } = await client.from(SUPABASE_LANGUAGES_TABLE).select("*")

				this.languages = data as Language[]
			} catch (error) {
				this.errorOnLoadLanguages = true
				console.error("Error loading languages", error)
			}

			this.loadingLanguages = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useLanguagesStore, import.meta.hot))
}
