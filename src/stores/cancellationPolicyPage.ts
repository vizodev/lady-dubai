import {
	CANCELLATION_POLICY_PAGE_STORE,
	SUPABASE_CANCELLATION_POLICY_PAGE_TABLE,
} from "~/constants"
import { type PageData } from "~/models"

interface IState {
	cancellationPolicyData: PageData | null
	loadingCancellationPolicyData: boolean
	errorOnLoadCancellationPolicyData: boolean
}

export const useCancellationPolicyPageStore = defineStore(
	CANCELLATION_POLICY_PAGE_STORE,
	{
		state: (): IState => ({
			cancellationPolicyData: null,
			loadingCancellationPolicyData: false,
			errorOnLoadCancellationPolicyData: false,
		}),
		getters: {},
		actions: {
			async loadCancellationPolicy(): Promise<void> {
				const client = useSupabaseClient()

				this.errorOnLoadCancellationPolicyData = false
				this.loadingCancellationPolicyData = true

				try {
					const { data } = await client
						.from(SUPABASE_CANCELLATION_POLICY_PAGE_TABLE)
						.select("*")

					if (!data) throw new Error()

					this.cancellationPolicyData = data[0] as PageData
				} catch (error) {
					this.errorOnLoadCancellationPolicyData = true
					console.error("Error loading cancellationPolicy data", error)
				}

				this.loadingCancellationPolicyData = false
			},
		},
	}
)

if (import.meta.hot) {
	import.meta.hot.accept(
		acceptHMRUpdate(useCancellationPolicyPageStore, import.meta.hot)
	)
}
