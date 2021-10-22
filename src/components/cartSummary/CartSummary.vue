<template src="./cartSummary.html" />
<script>
import "./cartSummary.scss";
import { mapState, mapGetters, mapActions } from "vuex";
import { redirectToProductDetail } from "@/utils/utilFunctions";

export default {
  name: "CartSummary",
  computed: {
    ...mapState({
      carts: state => state.cart.items,
    }),
    ...mapGetters("cart", ["cartItems"]),
  },
  methods: {
    ...mapActions("cart", ["deleteItem"]),
    redirectToProductDetail,
  },
};
</script>
