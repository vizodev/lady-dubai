import {
	ATTRACTIONS_CATEGORIES_STORE,
	SUPABASE_ATTRACTIONS_CATEGORIES_TABLE,
	SUPABASE_ID_FIELD,
} from "~/constants"
import { type Attraction, type AttractionCategory } from "~/models"

interface IState {
	categories: AttractionCategory[]
	loadingCategories: boolean
	errorOnLoadCategories: boolean
}

export const useAttractionsCategoriesStore = defineStore(
	ATTRACTIONS_CATEGORIES_STORE,
	{
		state: (): IState => ({
			categories: [],
			loadingCategories: false,
			errorOnLoadCategories: false,
		}),
		getters: {},
		actions: {
			async loadCategories(): Promise<void> {
				const client = useSupabaseClient()

				this.errorOnLoadCategories = false
				this.loadingCategories = true

				try {
					const { data } = await client
						.from(SUPABASE_ATTRACTIONS_CATEGORIES_TABLE)
						.select("*")

					this.categories = data as AttractionCategory[]
				} catch (error) {
					this.errorOnLoadCategories = true
					console.error("Error loading categories", error)
				}

				this.loadingCategories = false
			},
			async getCategoryById(
				id: number
			): Promise<AttractionCategory | undefined> {
				const client = useSupabaseClient()

				try {
					const { data } = await client
						.from(SUPABASE_ATTRACTIONS_CATEGORIES_TABLE)
						.select("*")
						.eq(SUPABASE_ID_FIELD, id)

					if (!data) return

					return data[0] as Attraction
				} catch (error) {
					console.error("Error getting category by id", error)
				}
			},
		},
	}
)

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAttractionsStore, import.meta.hot))
}
