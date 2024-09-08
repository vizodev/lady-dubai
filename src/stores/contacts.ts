import { CONTACTS_STORE, SUPABASE_CONTACTS_TABLE } from "~/constants"

interface IState {
	loadingContact: boolean
}

export const useContactsStore = defineStore(CONTACTS_STORE, {
	state: (): IState => ({
		loadingContact: false,
	}),
	getters: {},
	actions: {
		async createContact(
			name: string,
			email: string,
			message: string,
			interests: string[]
		): Promise<void> {
			const client = useSupabaseClient()

			this.loadingContact = true

			try {
				await client
					.from(SUPABASE_CONTACTS_TABLE)
					.insert([
						{
							name,
							email,
							message,
							interests,
						},
					] as any)
					.select()
			} catch (error) {
				console.error(error)
			}

			this.loadingContact = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useContactsStore, import.meta.hot))
}
