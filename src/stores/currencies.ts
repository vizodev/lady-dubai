import { CURRENCIES_STORE } from "~/constants"
import type { Currency } from "~/models"

interface IState {
	currentCurrency: Currency
}

export const useCurrenciesStore = defineStore(CURRENCIES_STORE, {
	state: (): IState => ({
		currentCurrency: "usd",
	}),
	getters: {},
	actions: {
		changeCurrentCurrency(newCurrency: Currency) {
			this.currentCurrency = newCurrency
		},
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCurrenciesStore, import.meta.hot))
}
