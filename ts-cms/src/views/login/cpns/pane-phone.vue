<template>
  <div class="pane-phone">
    <el-tab-pane name="phone">
      <template #label>
        手机登录
        <el-icon><Iphone /></el-icon
      ></template>
      <el-form :model="formData" :rules="rules" label-width="10" status-icon ref="formRef">
        <el-form-item prop="phone">
          <el-input placeholder="请输入手机号" size="large" v-model="formData.phone" />
        </el-form-item>
        <el-form-item prop="verifyCode" class="verify">
          <el-input
            placeholder="请输入验证码"
            size="large"
            class="verify-ipt"
            v-model="formData.verifyCode"
          />
          <el-button
            :type="verifyType"
            size="large"
            :disabled="verifyDisabled"
            @click="hadleVreifyCode"
            >{{ verifyMsg }}</el-button
          >
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import type { FormRules, FormInstance, ButtonType } from 'element-plus'

// form
const formData = reactive({
  phone: '',
  verifyCode: ''
})

const formRef = ref<FormInstance>()

// 规则

const rules: FormRules = {
  phone: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur'
    },
    {
      pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
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

const verifyMsg = ref('获取验证码')
const verifyDisabled = ref(true)
const verifyType = ref<ButtonType>('')

watch(
  () => formData.phone,
  () => {
    formRef.value?.validateField('phone', (valid) => {
      if (valid) {
        verifyDisabled.value = false
        verifyType.value = 'primary'
      } else {
        verifyDisabled.value = true
        verifyType.value = ''
      }
    })
  }
)

const hadleVreifyCode = () => {
  formRef.value?.validateField('phone', (valid) => {
    if (valid) {
      let count = 60
      verifyType.value = ''
      verifyMsg.value = `${count}秒后获取`
      let timer = setInterval(() => {
        count--
        verifyMsg.value = `${count}秒后获取`
        verifyDisabled.value = true

        if (count <= 0) {
          clearInterval(timer)
          count = 60
          verifyMsg.value = `获取验证码`
          verifyDisabled.value = false
          verifyType.value = 'primary'
        }
      }, 1000)
    }
  })
}

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
  .verify {
    :deep(.el-form-item__content) {
      justify-content: space-between;
    }

    .verify-ipt {
      width: 63%;
    }
  }
}
</style>
