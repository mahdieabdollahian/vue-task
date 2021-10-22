<template src="./product.html"></template>

<script>
import { mapActions } from "vuex";
import { addSeprator, redirectToProductDetail } from "@/utils/utilFunctions";

export default {
  name: "Product",
  props: {
    product: Object,
  },

  methods: {
    addSeprator,
    redirectToProductDetail,
    addToCart(product, event) {
      event?.stopPropagation();
      this.addProductToCart(product);
    },
    ...mapActions("cart", ["addProductToCart"]),
  },
};
</script>
<style lang="scss" scoped src="./product.scss"></style>
