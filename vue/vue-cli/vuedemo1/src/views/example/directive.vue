<template>
  <div>
    <input type="text" v-focus />
    <div v-unit>1888</div>
    <div v-ftime>1234567899</div>
  </div>
</template>

<script>
export default {
  name: '',
  data() {
    return {}
  },
  methods: {},
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
    },
    unit: {
      mounted(el, bindings) {
        console.log(bindings)
        const defaultText = el.textContent
        const unit = bindings.value || '￥'
        el.textContent = unit + defaultText
      }
    },
    format: {
      mounted(el) {}
    }
  }
}
</script>

<style lang="scss" scoped></style>
