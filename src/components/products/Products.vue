<template src="./products.html"></template>

<script>
import "./products.scss";
import { mapState } from "vuex";
import Product from "@/components/product/Product";
import Loading from "@/components/loading/Loading";

export default {
  name: "Products",

  components: {
    Product,
    Loading,
  },

  computed: mapState({
    products: state => state.products.all,
    loading: state => state.products.loading,
  }),
  created() {
    this.$store.dispatch("products/getAllProducts", 1);
  },
  watch: {
    loading: function () {
      document.body.style.overflow = this.loading ? "hidden" : "auto";
    },
  },
};
</script>
