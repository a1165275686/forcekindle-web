<template>
  <div>
    <h1>Home Page</h1>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import BasicLayout from "@/Layouts/BasicLayout.vue";

onMounted(() => {
  console.log("HomeView has been mounted");
});
</script>

<style scoped>
.home-content {
  margin-top: 20px;
}
</style>
