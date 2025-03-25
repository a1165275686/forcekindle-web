<template>
  <div id="app">
    <div v-if="admin">
      <BasicLayout />
    </div>
    <router-view v-else></router-view>
  </div>
</template>

<!--openapi --input http://localhost:8121/api/v3/api-docs --output ./generated --client axios-->

<style>
#app {
}
</style>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BasicLayout from "@/Layouts/BasicLayout.vue";
import { computed } from "vue";

const route = useRoute();
const shouldUseBasicLayout = computed(() => {
  // 根据路由名称判断是否使用 BasicLayout
  return !["home", "about", "noAuth", "login"].includes(route.name as string);
});

const doInit = () => {
  console.log("hello");
};
</script>
