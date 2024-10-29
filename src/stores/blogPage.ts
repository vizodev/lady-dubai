import { BLOG_PAGE_STORE, SUPABASE_BLOG_PAGE_TABLE } from "~/constants"
import { type BlogData } from "~/models"

interface IState {
	blogData: BlogData | null
	loadingBlogData: boolean
	errorOnLoadBlogData: boolean
}

export const useBlogPageStore = defineStore(BLOG_PAGE_STORE, {
	state: (): IState => ({
		blogData: null,
		loadingBlogData: false,
		errorOnLoadBlogData: false,
	}),
	getters: {},
	actions: {
		async loadBlog(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadBlogData = false
			this.loadingBlogData = true

			try {
				const { data } = await client.from(SUPABASE_BLOG_PAGE_TABLE).select("*")

				if (!data) throw new Error()

				this.blogData = data[0] as BlogData
			} catch (error) {
				this.errorOnLoadBlogData = true
				console.error("Error loading blog data", error)
			}

			this.loadingBlogData = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useBlogPageStore, import.meta.hot))
}
