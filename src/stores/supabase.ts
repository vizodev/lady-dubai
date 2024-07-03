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
      const { createClient } = await import("@supabase/supabase-js");
      this.supabase = createClient(
        `${useRuntimeConfig().public.supabaseUrl}`,
        `${useRuntimeConfig().public.supabaseAnonKey}`
      );
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSupabaseStore, import.meta.hot));
}
