export const routes = [
  {
    path: "/module-c",
    name: "module-c",
    component: () =>
      import(/* webpackChunkName: "ModuleC" */ "./pages/ModuleCPage.vue"),
    meta: {
      appLayout: "layoutC",
    },
  },
];
