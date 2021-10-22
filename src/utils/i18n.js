import { createI18n } from "vue-i18n";
const messages = {
  fa: {
    addToCart: "افزودن به سبد خرید",
    product: "کالا",
    showCarts: "مشاهده سبد خرید",
    tomans: "تومان",
    cart: "سبد خرید",
    cartIsEmtpy: "سبد خرید شما خالی است!",
    backHome: "بازگشت به خانه",
    unit: "عدد",
  },
};

const i18n = createI18n({
  locale: "fa", // set locale
  messages, // set locale messages
});
export default i18n;
