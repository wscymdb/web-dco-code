<template>
  <div class="container">
    <div class="item">
      <div class="img">
        <img :src="require('@/assets/images/R-C.jpg')" alt="" />
      </div>
      <p>{{ info.description }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  info: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<style scoped>
.img {
  width: 150px;
  height: 150px;
}
img {
  width: 100%;
  height: 100%;
}
</style>
