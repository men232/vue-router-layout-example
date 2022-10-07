export const routes = [
  {
    path: "/module-a",
    name: "module-a",
    component: () =>
      import(/* webpackChunkName: "ModuleA" */ "./pages/ModuleAPage.vue"),
    meta: {
      appLayout: "layoutA",
    },
  },
];
