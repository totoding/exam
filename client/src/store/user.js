import * as sign from "../api/user.js";

export default {
  namespaced: true,
  state: {
    data: null,
    isLoading: false,
  },
  mutations: {
    setData(state, payload) {
      state.data = payload;
    },
    setIsLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    async login({ commit }, { username, password }) {
      commit("setIsLoading", true);
      const resp = await sign.signIn({username, password})
      commit("setData", resp.data);
      commit("setIsLoading", false);
      return resp.data;
    },
    logout({ commit }) {
      commit("setData", null);
      sign.logout();
    },
    async whoAmI({ commit }) {
      commit("setIsLoading", true);
      try {
        const resp = await sign.whoAmI();
        commit("setData", resp.data);
      } catch {
        commit("setData", null);
      }
      commit("setIsLoading", false);
    },
  },
};
