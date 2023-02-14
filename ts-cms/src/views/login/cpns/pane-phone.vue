<template>
  <div class="pane-phone">
    <el-tab-pane name="phone">
      <template #label>
        手机登录
        <el-icon><Iphone /></el-icon
      ></template>
      <el-form
        :model="formData"
        :rules="rules"
        label-width="auto"
        status-icon
        ref="formRef"
      >
        <el-form-item prop="phone">
          <el-input
            placeholder="请输入手机号"
            size="large"
            v-model="formData.phone"
          />
        </el-form-item>
        <el-form-item prop="verifyCode" class="verify">
          <el-input
            placeholder="请输入验证码"
            size="large"
            class="verify-ipt"
            v-model="formData.verifyCode"
          />
          <el-button size="large" :disabled="verifyDisabled"
            >获取验证码</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from 'vue'
import type { FormRules, FormInstance } from 'element-plus'

// form
const formData = reactive({
  phone: '',
  verifyCode: ''
})
// 规则

const rules: FormRules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern:
        /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
      message: '请输入合法的手机号',
      trigger: 'blur'
    }
  ],
  verifyCode: [
    {
      required: true,
      message: '请输入验证码',
      trigger: 'blur'
    }
  ]
}

const verifyDisabled = computed(() => {
  return formData.phone ? false : true
})

const formRef = ref<FormInstance>()
// 提交
const submit = () => {
  formRef.value?.validate((valid: boolean) => {
    console.log(valid)
  })
}

// 暴露
defineExpose({
  submit
})
</script>

<style scoped lang="less">
.pane-phone {
  :v-deep .el-tabs__item {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .verify {
    :v-deep .el-form-item__content {
      justify-content: space-between;
    }

    .verify-ipt {
      width: 63%;
    }
  }
}
</style>
