<template>
  <div class="container">
    <h1>about</h1>
    <h2>js:{{ counter }}</h2>
    <h2>模板：{{ $store.state.counter }}</h2>
    <button @click="addCounter">add</button>
    <hr />
    <button @click="addCounterAction">addAction</button>
    <!-- medialist -->
    <ul>
      <li v-for="item in mediaList">
        <a target="_blank" :href="item.url">{{ item.name }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useStore, mapState } from 'vuex'
import { computed, ref, toRefs } from 'vue'
import axios from 'axios'

const store = useStore()
console.log(store)
store.commit('moduleA/demo')

// 告诉vuex发送网络请求
store.dispatch('setMediaListAction')

// store
const { counter, mediaList } = toRefs(store.state)
const addCounter = () => {
  store.commit('addCounter', 1)
}
const addCounterAction = () => {
  store.dispatch('addCounterAction', 1)
}
</script>

<style scoped></style>
