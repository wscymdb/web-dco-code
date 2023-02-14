<template>
  <div class="login">
    <loginPanel></loginPanel>
  </div>
</template>

<script setup lang="ts">
import loginPanel from './cpns/login-panel.vue'
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(#141e30, #243b55);
}
</style>
