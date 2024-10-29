import {
	ARTICLES_LIMIT_PER_PAGE,
	BLOG_STORE,
	SUPABASE_BLOG_TABLE,
	SUPABASE_ID_FIELD,
	SUPABASE_SLUG_FIELD,
} from "~/constants"
import { type BlogPost } from "~/models"

interface IState {
	posts: BlogPost[]
	loadingPost: boolean
	errorOnLoadPost: boolean
}

export const useBlogStore = defineStore(BLOG_STORE, {
	state: (): IState => ({
		posts: [],
		loadingPost: false,
		errorOnLoadPost: false,
	}),
	getters: {},
	actions: {
		async loadPosts(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadPost = false
			this.loadingPost = true

			try {
				const { data } = await client.from(SUPABASE_BLOG_TABLE).select("*")

				this.posts = data as BlogPost[]
			} catch (error) {
				this.errorOnLoadPost = true
				console.error("Error loading posts", error)
			}

			this.loadingPost = false
		},
		async getPostsByPage(page: number): Promise<BlogPost[]> {
			const client = useSupabaseClient()

			this.errorOnLoadPost = false
			this.loadingPost = true

			try {
				/*
				Page 1: 11 x 1 = 11
				Page 2: 11 x 2 = 22
				*/

				let from = page * ARTICLES_LIMIT_PER_PAGE
				let to = from + ARTICLES_LIMIT_PER_PAGE

				console.log(from, to)
				if (page > 0) {
					from += 1
				}

				const { data } = await client
					.from(SUPABASE_BLOG_TABLE)
					.select("*")
					.range(from, to)

				this.loadingPost = false

				return data as BlogPost[]
			} catch (error) {
				this.errorOnLoadPost = true
				console.error("Error loading posts", error)
			}

			this.loadingPost = false

			return []
		},
		async getPostById(id: number): Promise<BlogPost | undefined> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_BLOG_TABLE)
					.select("*")
					.eq(SUPABASE_ID_FIELD, id)

				if (!data) return

				return data[0] as BlogPost
			} catch (error) {
				console.error("Error getting post by id", error)
			}
		},
		async getPostBySlug(slug: string): Promise<BlogPost | undefined> {
			const client = useSupabaseClient()

			try {
				const { data } = await client
					.from(SUPABASE_BLOG_TABLE)
					.select("*")
					.eq(SUPABASE_SLUG_FIELD, slug)

				if (!data) return

				return data[0] as BlogPost
			} catch (error) {
				console.error("Error getting post by slug", error)
			}
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useBlogStore, import.meta.hot))
}
