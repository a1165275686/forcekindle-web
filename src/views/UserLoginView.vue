<template>
  <div class="login-container">
    <div class="login-form">
      <h1 class="login-title">用户登录</h1>
      <a-form :model="form" :style="{ width: '300px' }" @submit="handleSubmit">
        <a-form-item field="username" label="用户名">
          <a-input
            v-model="form.userAccount"
            placeholder="请输入您的用户名..."
          />
        </a-form-item>
        <a-form-item field="password" label="密码">
          <a-input-password
            v-model="form.userPassword"
            placeholder="请输入您的密码..."
          />
        </a-form-item>
        <!-- 添加一个新的div作为按钮容器 -->
        <a-form-item>
          <a-button type="primary" html-type="submit" class="loginButton"
            >登录
          </a-button>
        </a-form-item>
      </a-form>
      <a-form-item>
        <a-button type="default" @click="handleRegister" class="registerButton"
          >注册
        </a-button>
      </a-form-item>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { UserControllerService } from "../../generated";
import { useRouter } from "vue-router";
import router from "@/router";
import { Message } from "@arco-design/web-vue";

const form = reactive({
  userAccount: "",
  userPassword: "",
});

const route = useRouter();
const handleSubmit = async () => {
  try {
    const response = await UserControllerService.userLoginUsingPost(form);
    if (response.code === 0) {
      Message.success("登录成功:");
    } else {
      console.error("登录失败:", response.data);
    }
    setTimeout(async () => {
      await router.push("/");
    }, 2000);
  } catch (error) {
    console.error("登录过程中出现错误:", error);
  }
};

const handleRegister = () => {
  router.push("/user/register");
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-form {
  background-color: #fff;
  padding: 24px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.login-title {
  margin-bottom: 24px;
  text-align: center;
  color: #333;
}

/* 使用 Flexbox 布局使按钮居中 */
.loginButton {
  width: 100%;
  color: #ffffff;
  text-align: center;
  background: coral;
  font-size: 16px;
  font-family: Arial;
  letter-spacing: 2px;
}

.registerButton {
  color: #ffffff;
  background: green;
  font-size: 16px;
  font-family: Arial;
  letter-spacing: 2px;
  display: flex;
  justify-content: flex-end;
}

/* 为按钮容器设置flex布局 */
</style>
