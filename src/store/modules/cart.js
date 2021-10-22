import storeService from "../../services/store.service";

const state = () => ({
  items: storeService.getStoredData("products") || [],
});
//getters
const getters = {
  cartItems: state => {
    return state.items.reduce((accItem, item) => {
      return accItem + item.quantity;
    }, 0);
  },
};
// actions
const actions = {
  addProductToCart({ state, commit }, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (!cartItem) {
      commit("pushProductToCart", product);
    } else {
      commit("incrementItemQuantity", cartItem);
    }
  },
  deleteItem({ state, commit }, product) {
    const cartIndex = state.items.findIndex(item => item.id === product.id);
    if (cartIndex > -1) {
      commit("removeFromCart", cartIndex);
    } else {
      return;
    }
  },
};

// mutations
const mutations = {
  pushProductToCart(state, product) {
    state.items.push({
      ...product,
      quantity: 1,
    });
    storeService.storeData("products", state.items);
  },
  removeFromCart(state, index) {
    state.items.splice(index, 1);
    storeService.storeData("products", state.items);
  },
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
    storeService.storeData("products", state.items);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
