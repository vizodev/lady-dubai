import { ATTRACTIONS_STORE } from "~/constants"
import { defaultAttraction } from "~/data"
import { type Attraction } from "~/models"

interface IState {
	attractions: Attraction[]
	loadingAttractions: boolean
	errorOnLoadAttractions: boolean
}

export const useAttractionsStore = defineStore(ATTRACTIONS_STORE, {
	state: (): IState => ({
		attractions: [],
		loadingAttractions: false,
		errorOnLoadAttractions: false,
	}),
	getters: {},
	actions: {
		async loadAttractions(): Promise<void> {
			this.errorOnLoadAttractions = false
			this.loadingAttractions = true

			try {
				this.attractions = Array.from({ length: 6 }).map(() => {
					return {
						...defaultAttraction,
						id: Math.random().toString(36).substring(7),
					}
				})
			} catch (error) {
				this.errorOnLoadAttractions = true
				console.error("Error loading trip packages", error)
			}

			this.loadingAttractions = false
		},
		async getAttractionById(): Promise<Attraction> {
			return defaultAttraction
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAttractionsStore, import.meta.hot))
}
