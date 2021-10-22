<template src="./cart.html" />

<script>
import "./cart.scss";
import { mapState, mapGetters } from "vuex";
import { addSeprator, redirectToProductDetail } from "@/utils/utilFunctions";

export default {
  name: "Cart",
  computed: {
    ...mapState({
      carts: state => state.cart.items,
    }),
    ...mapGetters("cart", ["cartItems"]),
  },
  methods: {
    addSeprator,
    redirectToProductDetail,
  },
};
</script>
