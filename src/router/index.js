import { createRouter, createWebHistory } from "vue-router";
import currencyconvert from "../companents/currencyconvert.vue"
import not from "../view/not.vue";
import AboutUs from "../view/AboutUs.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "CurrencyConverter",
      component:currencyconvert,
    },
    {
      path: "/aboutus",
      name: "AboutUs",
      component: AboutUs,
    },
    {
      // have any char in path not match
      path: "/:catchNotMatchPath(.*)",
      name: "NotFound",
      component: not,
    },
  ],
});

export default router;
