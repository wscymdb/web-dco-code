<template>
  <div class="container">
    <h2>{{ id }}</h2>
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();
const id = ref(route.params.id);

// 监听路由变化
onBeforeRouteUpdate((to, from) => {
  const rId = to.params.id;
  id.value = rId;
});
</script>

<script>
export default {
  name: "home11",
};
</script>

<style scoped></style>
