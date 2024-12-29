import {
	PRIVACY_POLICY_PAGE_STORE,
	SUPABASE_PRIVACY_POLICY_PAGE_TABLE,
} from "~/constants"
import { type PageData } from "~/models"

interface IState {
	privacyPolicyData: PageData | null
	loadingPrivacyPolicyData: boolean
	errorOnLoadPrivacyPolicyData: boolean
}

export const usePrivacyPolicyPageStore = defineStore(
	PRIVACY_POLICY_PAGE_STORE,
	{
		state: (): IState => ({
			privacyPolicyData: null,
			loadingPrivacyPolicyData: false,
			errorOnLoadPrivacyPolicyData: false,
		}),
		getters: {},
		actions: {
			async loadPrivacyPolicy(): Promise<void> {
				const client = useSupabaseClient()

				this.errorOnLoadPrivacyPolicyData = false
				this.loadingPrivacyPolicyData = true

				try {
					const { data } = await client
						.from(SUPABASE_PRIVACY_POLICY_PAGE_TABLE)
						.select("*")

					if (!data) throw new Error()

					this.privacyPolicyData = data[0] as PageData
				} catch (error) {
					this.errorOnLoadPrivacyPolicyData = true
					console.error("Error loading privacyPolicy data", error)
				}

				this.loadingPrivacyPolicyData = false
			},
		},
	}
)

if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(usePrivacyPolicyPageStore, import.meta.hot)
	)
}
