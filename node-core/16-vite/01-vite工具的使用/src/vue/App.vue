<template>
  <div class="container">
    <button @click="plus">+1</button>
    <span>{{ number }}</span>
    <button @click="sub">-1</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const number = ref(0)
const plus = () => {
  number.value += 1
}

const sub = () => {
  number.value -= 1
}
</script>

<style scoped lang="less"></style>
