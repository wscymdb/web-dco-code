<template>
  <div class="main">
    <h2>main: {{ counterStore.count }}</h2>
    <el-button @click="handleChange">change count</el-button>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

const handleChange = () => {
  counterStore.changeCountAction(200)
}
</script>

<style scoped lang="less">
.main {
}
</style>
