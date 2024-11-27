import {
	SOCIAL_MEDIAS_STORE,
	SUPABASE_SOCIAL_MEDIAS_TABLE,
	SUPABASE_WHATSAPP_TABLE,
} from "~/constants"
import { type SocialMedia, type WhatsappSocialMedia } from "~/models"

interface IState {
	socialMedias: SocialMedia[]
	whatsappMedia?: WhatsappSocialMedia
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
				const [socialMediasRes, whatsappMediaRes] = await Promise.all([
					client.from(SUPABASE_SOCIAL_MEDIAS_TABLE).select("*"),
					client.from(SUPABASE_WHATSAPP_TABLE).select("*"),
				])

				this.whatsappMedia = whatsappMediaRes.data![0] as WhatsappSocialMedia
				this.socialMedias = socialMediasRes.data as SocialMedia[]

				console.log(this.whatsappMedia)
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
