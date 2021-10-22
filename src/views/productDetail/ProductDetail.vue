<template src="./productDetail.html"></template>

<script>
import "./productDetail.scss";
import HttpService from "@/services/http.services";
import { addSeprator } from "@/utils/utilFunctions";
import Loading from "@/components/loading/Loading";
import { mapActions } from "vuex";

export default {
  name: "ProductDetail",
  components: { Loading },
  data() {
    return {
      product: {
        images: {},
        price: {},
      },
      loading: {
        type: Boolean,
        default: false,
      },
    };
  },
  methods: {
    ...mapActions("cart", ["addProductToCart"]),
    addSeprator,
    async getProducts(id) {
      this.loading = true;
      const { data } = await HttpService.get(`product/${id}`);
      this.loading = false;
      this.product = data.data.product;
    },
  },
  created() {
    this.getProducts(this.$route.params.id);
  },
};
</script>
