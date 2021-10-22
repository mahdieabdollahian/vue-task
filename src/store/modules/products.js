import HttpService from "@/services/http.services";

// initial state
const state = () => ({
  all: [],
  totalItems: 0,
  totalPages: 0,
  loading: false,
});

// actions
const actions = {
  async getAllProducts({ commit }, page) {
    commit("setLoading", true);
    const { data } = await HttpService.get(`search/?page=${page}&rows=25&`);
    const { products, pager } = data.data;
    commit("setLoading", false);
    commit("setProducts", products);
    commit("setPager", pager);
  },
};

// mutations
const mutations = {
  setProducts(state, products) {
    state.all = products;
  },
  setPager(state, pager) {
    state.totalItems = pager.total_items;
    state.totalPages = pager.total_pages;
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
