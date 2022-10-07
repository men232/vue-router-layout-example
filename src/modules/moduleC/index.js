export const routes = [
  {
    path: "/module-c",
    name: "module-c",
    component: () =>
      import(/* webpackChunkName: "ModuleA" */ "./pages/ModuleCPage.vue"),
    meta: {
      appLayout: "layoutC",
    },
  },
];
