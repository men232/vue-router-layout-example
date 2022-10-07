export const routes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "Panel" */ "./pages/DashboardPage.vue"),
    meta: {
      appLayout: "panel",
    },
  },
];
