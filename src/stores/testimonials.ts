import { SUPABASE_TESTIMONIALS_TABLE, TESTIMONIALS_STORE } from "~/constants"
import { type Testimonial } from "~/models"

interface IState {
	testimonials: Testimonial[]
	loadingTestimonials: boolean
	errorOnLoadTestimonials: boolean
}

export const useTestimonialsStore = defineStore(TESTIMONIALS_STORE, {
	state: (): IState => ({
		testimonials: [],
		loadingTestimonials: false,
		errorOnLoadTestimonials: false,
	}),
	getters: {},
	actions: {
		async loadTestimonials(): Promise<void> {
			const client = useSupabaseClient()

			this.errorOnLoadTestimonials = false
			this.loadingTestimonials = true

			try {
				const { data } = await client
					.from(SUPABASE_TESTIMONIALS_TABLE)
					.select("*")

				this.testimonials = data as Testimonial[]
			} catch (error) {
				this.errorOnLoadTestimonials = true
				console.error("Error loading testimonials", error)
			}

			this.loadingTestimonials = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useTestimonialsStore, import.meta.hot))
}
