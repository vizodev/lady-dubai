import { SUPABASE_STORE } from "~/constants";

interface IState {
  supabase: any;
}

export const useSupabaseStore = defineStore(SUPABASE_STORE, {
  state: (): IState => ({
    supabase: null,
  }),
  getters: {},
  actions: {
    async initSupabase() {
      // this.supabase = useSupabaseClient();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSupabaseStore, import.meta.hot));
}
