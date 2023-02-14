<template>
  <div class="pane-account">
    <el-tab-pane name="account">
      <template #label>
        帐号登录
        <el-icon><UserFilled /></el-icon
      ></template>
      <el-form
        :model="formData"
        :rules="rules"
        label-width="auto"
        status-icon
        ref="formRef"
      >
        <el-form-item prop="name">
          <el-input placeholder="用户名" size="large" v-model="formData.name" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            show-password
            placeholder="密码"
            size="large"
            @keyup.enter.native="submit"
            v-model="formData.password"
          />
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import useLoginStore from '@/store/login/login'
import type { FormRules, FormInstance } from 'element-plus'
import type { IAccountLogin } from '@/types/login'

// 表单
const formData = reactive<IAccountLogin>({
  name: 'coderwhy',
  password: '123456'
})
const rules: FormRules = {
  name: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
}

const formRef = ref<FormInstance>()

const loginStore = useLoginStore()

// 提交
const submit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (valid) {
      loginStore.accountLoginAction({ ...formData })
    }
  })
}

// 暴露
defineExpose({
  submit
})
</script>

<style scoped lang="less"></style>
