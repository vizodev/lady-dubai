import {
	LOCALES_STORE,
	SUPABASE_LOCALE_ACRONYM_FIELD,
	SUPABASE_LOCALES_TABLE,
} from "~/constants"
import type { Translation } from "~/models"

interface IState {
	translations: Translation[]
	loadingTranslations: boolean
	errorOnLoadTranslations: boolean
}

export const useLocalesStore = defineStore(LOCALES_STORE, {
	state: (): IState => ({
		translations: [],
		loadingTranslations: false,
		errorOnLoadTranslations: false,
	}),
	getters: {},
	actions: {
		async loadTranslations(): Promise<Translation[]> {
			const client = useSupabaseClient()

			try {
				const { data } = await client.from(SUPABASE_LOCALES_TABLE).select("*")

				this.translations = (data as Translation[]) ?? []
			} catch (error) {
				console.error("Error loading locales", error)
			}

			return []
		},
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
