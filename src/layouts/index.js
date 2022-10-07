export const APP_LAYOUTS = [
  {
    name: "layoutA",
    component: () => import("./LayoutA.vue"),
    route: {
      path: "/",
    },
  },
  {
    name: "layoutB",
    component: () => import("./LayoutB.vue"),
    route: {
      path: "/",
    },
  },
  {
    name: "layoutC",
    component: () => import("./LayoutC.vue"),
    route: {
      path: "/layout-c",
    },
  },
  {
    name: "panel",
    component: () => import("./LayoutPanel.vue"),
    route: {
      path: "/panel",
      beforeEnter: IF_AUTHENTICATED,
    },
  },
];

function IF_AUTHENTICATED(to, from, next) {
  // if (store.getters['user/isAuth']) {
  //   return next();
  // }

  next("/login");
}
