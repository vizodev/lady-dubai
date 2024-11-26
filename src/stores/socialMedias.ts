import { SOCIAL_MEDIAS_STORE, SUPABASE_SOCIAL_MEDIAS_TABLE } from "~/constants"
import { type SocialMedia } from "~/models"

interface IState {
	socialMedias: SocialMedia[]
	loadingSocialMedias: boolean
	errorOnLoadSocialMedias: boolean
}

export const useSocialMediasStore = defineStore(SOCIAL_MEDIAS_STORE, {
	state: (): IState => ({
		socialMedias: [],
		loadingSocialMedias: false,
		errorOnLoadSocialMedias: false,
	}),
	getters: {},
	actions: {
		async loadSocialMedias(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadSocialMedias = false
			this.loadingSocialMedias = true

			try {
				const { data } = await client
					.from(SUPABASE_SOCIAL_MEDIAS_TABLE)
					.select("*")

				this.socialMedias = data as SocialMedia[]
			} catch (error) {
				this.errorOnLoadSocialMedias = true
				console.error("Error loading social medias", error)
			}

			this.loadingSocialMedias = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useSocialMediasStore, import.meta.hot))
}
