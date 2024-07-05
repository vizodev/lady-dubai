import { TRIP_PACKAGE_STORE } from "~/constants";
import { defaultTripPackage, type TripPackage2 } from "~/models";

interface IState {
  tripPackages: TripPackage2[];
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
          .select(
            "*, services:trip_package_services(*, service:services_pool(icon)), guideLanguages:trip_package_languages(*, language:languages(*))"
          );
        this.tripPackages = tripPackages?.map((pack: any) => {
          return {
            ...pack,
            guideLanguages: pack.guideLanguages.map(
              (lang: any) => lang.language
            ),
            services: pack.services.map((serv: any) => serv.service),
          };
        }) as TripPackage2[];
        console.log("Trip packages loaded", this.tripPackages);
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
