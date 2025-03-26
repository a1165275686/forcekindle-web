<template>
  <a-layout-header class="header">
    三角洲行动指南
    <a-space>
      <a-button type="primary" @click="handleLogin">
        <template v-if="isLoggedIn">
          <!-- 登录后显示头像 -->
          <img
            :src="userAvatar"
            alt="Avatar"
            style="
              width: 20px;
              height: 20px;
              border-radius: 50%;
              margin-right: 8px;
            "
          />
        </template>
        <template v-else>
          <!-- 未登录时显示提示 -->
          <span style="margin-right: 8px">
            {{ store.state.user.loginUser?.userName ?? "未登录" }}
          </span>
        </template>
        <!--      {{ isLoggedIn ? "个人中心" : "登录" }}-->
      </a-button>
    </a-space>
  </a-layout-header>

  <a-layout class="basiclayout">
    <a-layout-sider collapsible breakpoint="xl">
      <div class="logo" />
      <a-menu
        :default-open-keys="['1']"
        :default-selected-keys="['0_3']"
        :style="{ width: '100%' }"
        @menu-item-click="onClickMenuItem"
      >
        <a-menu-item key="0_1" disabled>
          <IconHome></IconHome>
          主页
        </a-menu-item>
        <a-sub-menu key="1">
          <template #title>
            <IconCalendar></IconCalendar>
            子弹价格
          </template>
          <a-menu-item key="1_1">价格查询</a-menu-item>
          <a-menu-item key="1_2">医疗部门</a-menu-item>
          <a-sub-menu key="2" title="Navigation 2">
            <a-menu-item key="2_1">Menu 1</a-menu-item>
            <a-menu-item key="2_2">Menu 2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="3" title="Navigation 3">
            <a-menu-item key="3_1">Menu 1</a-menu-item>
            <a-menu-item key="3_2">Menu 2</a-menu-item>
            <a-menu-item key="3_3">Menu 3</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-menu-item key="0_3">
          <IconCalendar></IconCalendar>
          特勤处
        </a-menu-item>
        <a-sub-menu key="2">
          <template #title>
            <IconCalendar></IconCalendar>
            部门
          </template>
          <a-menu-item key="2_1">战斗部门</a-menu-item>
          <a-menu-item key="2_2">医疗部门</a-menu-item>
          <a-sub-menu key="3" title="Navigation 2">
            <a-menu-item key="3_1">Menu 1</a-menu-item>
            <a-menu-item key="3_2">Menu 2</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="4" title="Navigation 3">
            <a-menu-item key="4_1">Menu 1</a-menu-item>
            <a-menu-item key="4_2">Menu 2</a-menu-item>
            <a-menu-item key="4_3">Menu 3</a-menu-item>
          </a-sub-menu>
        </a-sub-menu>
        <a-sub-menu key="4">
          <template #title>
            <IconCalendar></IconCalendar>
            Navigation 4
          </template>
          <a-menu-item key="4_1">Menu 1</a-menu-item>
          <a-menu-item key="4_2">Menu 2</a-menu-item>
          <a-menu-item key="4_3">Menu 3</a-menu-item>
        </a-sub-menu>
      </a-menu>
      <!-- trigger -->
      <template #trigger="{ collapsed }">
        <IconCaretRight v-if="collapsed"></IconCaretRight>
        <IconCaretLeft v-else></IconCaretLeft>
      </template>
    </a-layout-sider>

    <a-layout>
      <a-layout style="padding: 0 24px">
        <a-breadcrumb :style="{ margin: '16px 0' }">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content>
          <!-- 动态组件 -->
          <component :is="currentComponent"></component>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
  <a-layout-footer class="footer">
    <a href="http://sanjiaozhou.cpu" target="_blank">三角洲指南</a>
  </a-layout-footer>
</template>

<script setup lang="ts">
import { Message } from "@arco-design/web-vue";
import {
  IconCalendar,
  IconCaretLeft,
  IconCaretRight,
  IconHome,
} from "@arco-design/web-vue/es/icon";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import BulletPrice from "@/views/BulletPrice.vue";

const router = useRouter();
const store = useStore();
const currentComponent = ref();

const onClickMenuItem = (key: string) => {
  Message.info({ content: `You select ${key}`, showIcon: true });
  if (key === "1_1") {
    // 当点击价格查询菜单项时，渲染BulletPrice组件
    currentComponent.value = BulletPrice;
  }
};
const handleLogin = () => {
  router.push("/user/login");
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bolder;
  font-family: Arial;
  color: #ffffff;
  padding-left: 15px;
  height: 64px;
  line-height: 64px;
  background: rgba(0, 0, 0, 0.98);
  letter-spacing: 2px;
}

.header button {
  justify-self: end;
}

.basiclayout {
  height: 1000px;
  background: var(--color-fill-2);
  border: 1px solid var(--color-border);
}

.basiclayout :deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.basiclayout :deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}

.basiclayout :deep(.arco-layout-header) {
  height: 64px;
  line-height: 64px;
  background: var(--color-bg-3);
}

.basiclayout :deep(.arco-layout-footer) {
  height: 48px;
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  line-height: 48px;
}

.basiclayout :deep(.arco-layout-content) {
  color: var(--color-text-2);
  font-weight: 400;
  font-size: 14px;
  background: var(--color-bg-3);
}

.basiclayout :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}

.footer {
  background: red;
  padding: 16px;
  bottom: 0;
  text-align: center;
}
</style>
