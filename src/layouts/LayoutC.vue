<script setup>
import { RouterView } from "vue-router";
import { onMounted } from "vue";

onMounted(() => console.log("Mounted: LayoutC.vue"));
</script>

<template>
  <div class="wrapper">
    <header>LayoutC.vue</header>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
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
