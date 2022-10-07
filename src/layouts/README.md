## Layout config
The layout config object must indicate unique `name` property.
You can pass the original vue-router config by indicating `route` property in object config.

```js
{
  // Must be unique
  name: "AdminPanel",

  // Property can accepts a function that returns a Promise to make lazy loading works
  // https://router.vuejs.org/guide/advanced/lazy-loading.html
  component: () => import("./AdminPanel.vue"),

  // Original vue-router config object
  // https://router.vuejs.org/guide/essentials/dynamic-matching.html
  route: {
    path: "/"
  }
}
```
