<template>
  <div class="container">
    <slot name="header" :obj="{ name1: 'zs', age: 19 }" :age="19"></slot>
    <slot name="footer">我是默认值</slot>
  </div>
</template>

<script>
export default {
  props: {},
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped></style>
