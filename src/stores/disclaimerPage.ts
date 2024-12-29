import {
	DISCLAIMER_PAGE_STORE,
	SUPABASE_DISCLAIMER_PAGE_TABLE,
} from "~/constants"
import { type PageData } from "~/models"

interface IState {
	disclaimerData: PageData | null
	loadingDisclaimerData: boolean
	errorOnLoadDisclaimerData: boolean
}

export const useDisclaimerPageStore = defineStore(DISCLAIMER_PAGE_STORE, {
	state: (): IState => ({
		disclaimerData: null,
		loadingDisclaimerData: false,
		errorOnLoadDisclaimerData: false,
	}),
	getters: {},
	actions: {
		async loadDisclaimer(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadDisclaimerData = false
			this.loadingDisclaimerData = true

			try {
				const { data } = await client
					.from(SUPABASE_DISCLAIMER_PAGE_TABLE)
					.select("*")

				if (!data) throw new Error()

				this.disclaimerData = data[0] as PageData
			} catch (error) {
				this.errorOnLoadDisclaimerData = true
				console.error("Error loading disclaimer data", error)
			}

			this.loadingDisclaimerData = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(useDisclaimerPageStore, import.meta.hot)
	)
}
