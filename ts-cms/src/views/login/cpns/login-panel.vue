<template>
  <div class="login-panel">
    <h1 class="title">奔波儿灞后台</h1>

    <el-tabs stretch type="border-card" v-model="activeName">
      <!-- account -->
      <PaneAccount ref="accountRef" />
      <!-- phone -->
      <PanePhone ref="phoneRef" />
    </el-tabs>
    <div class="control">
      <el-checkbox v-model="rememberPwd" label="记住密码" size="large" />

      <el-link type="primary" @click="forgetPwd" title="我劝你别点">忘记密码</el-link>
    </div>
    <div class="login-btn">
      <el-button type="primary" size="large" @click="handleSubmit">立即登录</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { ElNotification } from 'element-plus'
import PaneAccount from './pane-account.vue'
import PanePhone from './pane-phone.vue'
import { sessionCache } from '@/utils/cache'

const activeName = ref('account')
const rememberPwd = ref<boolean>(sessionCache.getCache('isRemPwd') ?? false)

watch(rememberPwd, (curr) => {
  console.log(curr)
  sessionCache.setCache('isRemPwd', curr)
})

const forgetPwd = function () {
  ElNotification({
    title: '提示',
    type: 'warning',
    message: '请联系管理员'
  })
}
const accountRef = ref<InstanceType<typeof PaneAccount>>()
const phoneRef = ref<InstanceType<typeof PanePhone>>()
// 提交
const handleSubmit = () => {
  if (activeName.value === 'account') {
    accountRef.value?.submit()
  } else {
    phoneRef.value?.submit()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  width: 350px;
  padding: 20px 40px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.4);
  .title {
    color: #fff;
    text-align: center;
    margin-bottom: 30px;
  }

  .control {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .login-btn .el-button {
    margin: 0 auto;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
  }

  .el-tabs {
    :deep(.el-tabs__item) {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    :deep(.el-icon) {
      font-size: 16px;
      margin-left: 3px;
    }
  }
}
</style>
