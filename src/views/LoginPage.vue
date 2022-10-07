<script setup>
import { onMounted } from "vue";

onMounted(() => console.log("Mounted: LoginPage.vue"));
</script>

<template>
  <form>
    <div>
      <label for="login">Login</label><br />
      <input name="login" type="text" />
    </div>
    <div>
      <label for="password">Password</label><br />
      <input name="password" type="password" />
    </div>
  </form>
</template>
