<template>
  <div class="container">
    <div v-html="htmlText"></div>
    <h2>counter: {{ counterStore.counter }}</h2>
    <h2>counter-getters: {{ counterStore.doubleCount }}</h2>
    <button @click="changeCounter">changeCounter</button>
    <button @click="setCounter">setCounter</button>
    <hr />
    <h2>user: {{ userStore.name }}--{{ userStore.age }}</h2>
    <button @click="changeUserInfo">changeuserinfo</button>
    <button @click="resetUserInfo">resetuserinfo</button>
  </div>
</template>

<script setup>
import useCounter from '@/pinia/counter'
import useUser from '@/pinia/user'
import useMedia from '@/pinia/media'

const counterStore = useCounter()
const userStore = useUser()
const mediaStore = useMedia()

mediaStore.getMediaList()

const changeUserInfo = () => {
  userStore.$patch({
    name: '陈哈哈',
    age: 22
  })
}

const resetUserInfo = () => {
  userStore.$reset()
}

const changeCounter = () => {
  counterStore.counter++
}

const setCounter = () => {
  counterStore.setCounter()
}

const htmlText = `<h1 style="color:red;">Home</h1>`
</script>

<style scoped></style>
