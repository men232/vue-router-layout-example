import { APP_LAYOUTS } from "../layouts";

export const APP_MODULES = importAllModules();

export const APP_MODULES_ROUTES = (() => {
  const layoutRouteMap = {};

  for (const layout of APP_LAYOUTS) {
    layoutRouteMap[layout.name] = {
      component: layout.component,
      path: "/", // default path
      ...(layout.route || {}),
      children: [],
    };
  }

  for (const { moduleName, moduleRoutes, fileName } of APP_MODULES) {
    for (const routeIdx in moduleRoutes) {
      const routeDefinition = moduleRoutes[routeIdx];

      const layoutName = routeDefinition?.meta?.appLayout;

      if (!layoutName) {
        console.warn(
          `Missed "meta.appLayout" definition in "${
            routeDefinition.name || routeDefinition.path || `[${routeIdx}]`
          }" -> "${moduleName}" route.\n${fileName}`
        );
        continue;
      }

      const layoutRoute = layoutRouteMap[layoutName];

      if (!layoutRoute) {
        console.warn(
          `Unknown layout "${layoutName}" definition in "${
            routeDefinition.name || routeDefinition.path || `[${routeIdx}]`
          }" -> "${moduleName}" route.\n${fileName}`
        );
        continue;
      }

      if (moduleRoutes.length) {
        layoutRoute.children.push(...moduleRoutes);
      }
    }
  }

  return (
    Object.values(layoutRouteMap)
      // Exclude layouts without children routes
      .filter((v) => !!v.children.length)
  );
})();

// Logging imported modules
if (import.meta.env.DEV) {
  const log = console.table ? console.table : console.log;

  console.info("App Modules:");
  log(
    APP_MODULES.map((v) => ({
      moduleName: v.moduleName,
      fileName: v.fileName,
    }))
  );
}

function importAllModules() {
  const modules = import.meta.glob("@/modules/*/index.js", { eager: true });
  const result = [];

  for (const [fileName, module] of Object.entries(modules)) {
    const moduleName = fileName.split("/").at(-2);

    let { routes: moduleRoutes } = module;

    if (!Array.isArray(moduleRoutes) || !moduleRoutes.length) {
      moduleRoutes = [];
      console.warn(
        `Module "${moduleName}" does not export routes.\n${fileName}`
      );
    }

    result.push({ moduleName, moduleRoutes, fileName });
  }

  return result;
}
