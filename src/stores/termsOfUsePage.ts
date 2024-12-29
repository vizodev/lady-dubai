import {
	SUPABASE_TERMS_OF_USE_PAGE_TABLE,
	TERMS_OF_USE_PAGE_STORE,
} from "~/constants"
import { type PageData } from "~/models"

interface IState {
	termsOfUseData: PageData | null
	loadingTermsOfUseData: boolean
	errorOnLoadTermsOfUseData: boolean
}

export const useTermsOfUsePageStore = defineStore(TERMS_OF_USE_PAGE_STORE, {
	state: (): IState => ({
		termsOfUseData: null,
		loadingTermsOfUseData: false,
		errorOnLoadTermsOfUseData: false,
	}),
	getters: {},
	actions: {
		async loadTermsOfUse(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadTermsOfUseData = false
			this.loadingTermsOfUseData = true

			try {
				const { data } = await client
					.from(SUPABASE_TERMS_OF_USE_PAGE_TABLE)
					.select("*")

				if (!data) throw new Error()

				this.termsOfUseData = data[0] as PageData
			} catch (error) {
				this.errorOnLoadTermsOfUseData = true
				console.error("Error loading termsOfUse data", error)
			}

			this.loadingTermsOfUseData = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(useTermsOfUsePageStore, import.meta.hot)
	)
}
