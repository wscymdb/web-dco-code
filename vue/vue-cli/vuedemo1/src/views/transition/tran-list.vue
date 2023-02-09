<template>
  <div class="container">
    <button @click="add">add</button>
    <button @click="remove">remove</button>
    <ul>
      <TransitionGroup>
        <template v-for="item in numList" :key="item">
          <li>{{ item }}</li>
        </template>
      </TransitionGroup>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const numList = ref([1, 2, 3, 4, 5])

const add = () => {
  numList.value.splice(3, 0, 22)
}

const remove = () => {
  numList.value.pop()
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  padding: 5px 0;
  height: 15px;
  /* background-color: #faa; */
}
.v-enter-from {
  opacity: 0;
  transform: translateX(50px);
}

.v-enter-to {
  opacity: 1;
}

.v-move,
.v-enter-active {
  transition: all 1s linear;
}
</style>
