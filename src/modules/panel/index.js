export const routes = [
  {
    path: "dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "ModuleA" */ "./pages/DashboardPage.vue"),
    meta: {
      appLayout: "panel",
    },
  },
];
