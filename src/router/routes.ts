import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import adminView from "@/views/AdminView.vue";
import AboutView from "@/views/AboutView.vue";
import UserLoginView from "@/views/UserLoginView.vue";
import UserRegisterView from "@/views/UserRegisterView.vue";
import BulletPrice from "@/views/BulletPrice.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/user/login",
    name: "login",
    component: UserLoginView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/",
    name: "/",
    component: HomeView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/bullet",
    name: "bullet",
    component: BulletPrice,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/user/register",
    name: "register",
    component: UserRegisterView,
    meta: {
      access: "canAdmin",
    },
  },
  {
    path: "/noAuth",
    name: "noAuth",
    component: NoAuthView,
  },
];
