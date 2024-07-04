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
      const client = useSupabaseClient();
      this.errorOnLoadTripPackages = false;
      this.loadingTripPackages = true;
      try {
        const { data: tripPackages } = await client
          .from("trip_packages")
          .select("*");
        this.tripPackages = tripPackages as TripPackage[];
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
