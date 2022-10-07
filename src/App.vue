<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";
import { APP_MODULES_ROUTES } from "./modules";

onMounted(() => console.log("Mounted: App.vue"));

const navigation = APP_MODULES_ROUTES.map((v) => v.children).flat();
</script>

<template>
  <div class="wrapper">
    <header>App.vue</header>
    <div class="content">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <template v-for="nav of navigation" :key="nav.name">
          <RouterLink :to="{ name: nav.name }">{{ nav.name }}</RouterLink>
        </template>
        <RouterLink to="/bad-page">404 Page</RouterLink>
      </nav>

      <RouterView v-slot="{ Component }">
        <transition name="slide-fade">
          <component :is="Component" />
        </transition>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
.wrapper nav {
  padding-bottom: 1rem;
}

.wrapper nav a + a {
  margin-left: 1rem;
}

.wrapper {
  border: 1px solid gray;
}

.wrapper .content {
  padding: 1rem;
}

.wrapper header {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid gray;
}
</style>
