<template src="./pagination.html"></template>

<script>
import { mapState } from "vuex";
import "./pagination.scss";

export default {
  name: "Pagination",
  data() {
    return {
      pages: [],
      currentPage: 1,
    };
  },
  created() {
    this.setPages();
  },
  computed: mapState({
    totalItems: state => state.products.totalItems,
    totalPages: state => state.products.totalPages,
  }),
  methods: {
    setPages() {
      for (let index = 1; index <= this.totalPages; index++) {
        this.pages.push(index);
      }
    },
    scrollToTop() {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    },
    refetchList(type, pageNumber = null) {
      switch (type) {
        case "DECREASE": {
          this.currentPage--;
          break;
        }
        case "INCREASE": {
          this.currentPage++;
          break;
        }
        case "SELECT_PAGE": {
          this.currentPage = pageNumber;
          break;
        }
      }
      this.scrollToTop();
      this.$store.dispatch("products/getAllProducts", this.currentPage);
    },
  },
  watch: {
    totalItems: function () {
      this.setPages();
    },
  },
};
</script>
