import { createRouter, createWebHistory } from "vue-router";
import { APP_MODULES_ROUTES } from "../modules";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomePage.vue"),
    },
    {
      path: "/login",
      component: () => import("@/views/LoginPage.vue"),
    },
    ...APP_MODULES_ROUTES,
    {
      path: "/:pathMatch(.*)*",
      component: () => import("@/views/Page404.vue"),
    },
  ],
});

export default router;
