<!-- 语法糖须配合templete -->
<template>
  <render />
</template>

<!-- setup 语法糖 -->

<script setup>
import { h, ref } from 'vue'

const counter = ref(0)

const increment = () => {
  counter.value++
  console.log(counter)
}
const decrement = () => {
  counter.value--
}

const render = h('div', null, [
  h(
    'button',
    {
      onClick: increment
    },
    '+1'
  ),
  counter.value,
  h(
    'button',
    {
      onClick: decrement
    },
    '-1'
  )
])
</script>

<!-- setup函数 -->
<!-- <script>
import { ref, h } from 'vue'

export default {
  setup() {
    const counter = ref(0)

    // return 一个函数 函数里面包裹h函数
    return () =>
      h('div', null, [
        h(
          'button',
          {
            onClick: () => {
              counter.value++
            }
          },
          '+1'
        ),
        counter.value,
        h(
          'button',
          {
            onClick: () => {
              counter.value--
            }
          },
          '-1'
        )
      ])
  }
}
</script> -->

<!-- options API -->
<!-- <script>
import { h } from 'vue'
export default {
  render() {
    return h('div', null, [
      h(
        'button',
        {
          onClick: () => {
            this.counter++
          }
        },
        '+1'
      ),
      this.counter,
      h(
        'button',
        {
          onClick: () => {
            this.counter--
          }
        },
        '-1'
      )
    ])
  },
  name: '',
  data() {
    return {
      counter: 0
    }
  },
  methods: {}
}
</script> -->

<style lang="scss" scoped></style>
