import { TRIP_PACKAGE_STORE } from "~/constants";
import { defaultTripPackage, type TripPackage } from "~/models";

interface IState {
  tripPackages: TripPackage[];
  loadingTripPackages: boolean;
  errorOnLoadTripPackages: boolean;
}

export const useTripPackagesStore = defineStore(TRIP_PACKAGE_STORE, {
  state: (): IState => ({
    tripPackages: [],
    loadingTripPackages: false,
    errorOnLoadTripPackages: false,
  }),
  getters: {},
  actions: {
    async loadTripPackages() {
      this.errorOnLoadTripPackages = false;
      this.loadingTripPackages = true;
      try {
        this.tripPackages = Array.from({ length: 6 }).map(() => {
          return {
            ...defaultTripPackage,
            id: Math.random().toString(36).substring(7),
          };
        });
      } catch (error) {
        this.errorOnLoadTripPackages = true;
        console.error("Error loading trip packages", error);
      } finally {
        this.loadingTripPackages = false;
        return this.tripPackages ?? [];
      }
    },
    async loadTripPackageById() {
      return defaultTripPackage;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(
    acceptHMRUpdate(useTripPackagesStore, import.meta.hot)
  );
}
