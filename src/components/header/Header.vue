<template src="./header.html" />
<script>
import "./header.scss";
import logo from "/src/assets/images/logo.png";
import { mapGetters } from "vuex";
import CartSummary from "@/components/cartSummary/CartSummary";

export default {
  name: "Header",
  data() {
    return {
      logo,
      showCart: false,
    };
  },
  components: {
    CartSummary,
  },
  computed: {
    ...mapGetters("cart", ["cartItems"]),
  },

  methods: {
    showCartOnHover() {
      if (!this.$route.name || this.$route.name?.toLowerCase() !== "cart") {
        this.showCart = true;
      }
    },
  },
};
</script>
