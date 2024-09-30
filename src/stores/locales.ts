import {
	LOCALES_STORE,
	SUPABASE_LOCALE_ACRONYM_FIELD,
	SUPABASE_LOCALES_TABLE,
} from "~/constants"

export const useLocalesStore = defineStore(LOCALES_STORE, {
	getters: {},
	actions: {
		async getTranslation(localeAcronym: string): Promise<any> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_LOCALES_TABLE)
					.select("*")
					.eq(SUPABASE_LOCALE_ACRONYM_FIELD, localeAcronym)

				return (data as any)[0]
			} catch (error) {
				console.error("Error loading locales", error)
			}
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useLocalesStore, import.meta.hot))
}
