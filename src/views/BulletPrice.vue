<template>
  <div>
    <!-- 显示子弹列表 -->
    <table>
      <thead>
        <tr>
          <!-- 根据 BulletVO 模型定义表头 -->
          <th>子弹名称</th>
          <th>子弹价格</th>
          <!-- 其他字段 -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="bullet in currentPageData" :key="bullet.id">
          <td>{{ bullet.bulletName }}</td>
          <td>{{ bullet.bulletPrice }}</td>
          <!-- 其他字段 -->
        </tr>
      </tbody>
    </table>

    <!-- 分页组件 -->
    <div>
      <button @click="prevPage" :disabled="currentPage === 1">上一页</button>
      <span>第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">
        下一页
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  BulletQueryRequest,
  DataProgressControllerService,
} from "../../generated";

// 定义响应式数据
const currentPage = ref(1);
const totalPages = ref(0);
const currentPageData = ref([]);

// 封装分页查询方法
const fetchBulletPage = async (page: number) => {
  try {
    const requestBody: BulletQueryRequest = {
      current: page, // 使用 current 表示当前页码
      pageSize: 10, // 假设每页显示 10 条数据，可根据需求调整
      // 其他查询参数
    };
    const response =
      await DataProgressControllerService.getBulletVoPageUsingPost(requestBody);
    // 假设响应结构包含 data 字段，其中有记录列表和总页数
    currentPageData.value = response.data.records;
    totalPages.value = response.data.pages;
  } catch (error) {
    console.error("分页查询出错:", error);
  }
};

// 页面加载时获取第一页数据
onMounted(() => {
  fetchBulletPage(currentPage.value); // 传入当前页码
});

// 上一页方法
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    fetchBulletPage(currentPage.value);
  }
};

// 下一页方法
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    fetchBulletPage(currentPage.value);
  }
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f0f0f0;
}
</style>
