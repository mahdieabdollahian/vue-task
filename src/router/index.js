import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/Home"),
  },
  {
    path: "/cart",
    name: "Cart",
    component: () => import("../views/cart/Cart"),
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: () => import("../views/productDetail/ProductDetail"),
  },
  {
    path: "/",
    redirect: "/home",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
