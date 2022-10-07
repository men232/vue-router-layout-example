export const routes = [
  {
    path: "/module-b",
    name: "module-b",
    component: () =>
      import(/* webpackChunkName: "ModuleA" */ "./pages/ModuleBPage.vue"),
    meta: {
      appLayout: "layoutB",
    },
  },
];
