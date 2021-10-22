module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "vue-i18n": "vue-i18n/dist/vue-i18n.esm-browser.prod.js",
      },
    },
  },

  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      title: "فروشگاه اینترنتی دیجیکالا",
    },
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/scss/_variables.scss";
          `,
      },
    },
  },
};
