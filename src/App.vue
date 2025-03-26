<template>
  <div id="app">
    <!-- 根据 shouldUseBasicLayout 决定是否渲染 BasicLayout -->
    <BasicLayout v-if="shouldUseBasicLayout">
      <router-view />
    </BasicLayout>
    <!-- 当不使用 BasicLayout 时，直接渲染路由视图 -->
    <router-view v-if="!shouldUseBasicLayout" />
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
  return route.name === "/";
});

const doInit = () => {
  console.log("hello");
};
</script>
