import { COUNTRIES_ENDPOINT, COUNTRIES_STORE } from "~/constants"
import { type Country } from "~/models"

interface IState {
	countries: Country[]
	loadingCountries: boolean
	errorOnLoadCountries: boolean
}

export const useCountriesStore = defineStore(COUNTRIES_STORE, {
	state: (): IState => ({
		countries: [],
		loadingCountries: false,
		errorOnLoadCountries: false,
	}),
	getters: {},
	actions: {
		async loadCountries(): Promise<void> {
			this.errorOnLoadCountries = false
			this.loadingCountries = true

			try {
				const res = await fetch(COUNTRIES_ENDPOINT)
				const json = (await res.json()) as any[]

				const data = json.map((i) => ({ name: i.name.common }))
				data.sort(function (a, b) {
					if (a.name < b.name) return -1
					else if (a.name > b.name) return 1

					return 0
				})

				this.countries = data
			} catch (error) {
				this.errorOnLoadCountries = true
				console.error("Error loading countries", error)
			}

			this.loadingCountries = false
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCountriesStore, import.meta.hot))
}
