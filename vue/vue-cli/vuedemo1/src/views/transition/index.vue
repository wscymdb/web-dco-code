<template>
  <div class="container">
    <!-- <transition>
      <template v-if="isShow">
        <leftVue />
      </template>
    </transition>

    <button class="btn" @click="handleClick">toggle</button> -->

    <tranListVue />
  </div>
</template>

<script setup>
import leftVue from './left.vue'
import tranListVue from './tran-list.vue'
import { ref } from 'vue'

const isShow = ref(true)
const handleClick = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.btn {
  position: absolute;
  left: 0;
  top: 100px;
}

/* .v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(20px);
} */

/* .v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.v-enter-to,
.v-leave-form {
  opacity: 1;
} */

.v-enter-active {
  animation: bounce-in 1s linear;
}
.v-leave-active {
  /* transition: all 5s linear; */
  animation: bounce-out 1s linear;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
    color: aquamarine;
  }
  50% {
    transform: scale(1.25);
    color: yellowgreen;
  }
  100% {
    transform: scale(1.5);
    color: violet;
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(10);
    transform: rotate(90deg);
    color: aquamarine;
  }
  25% {
    transform: scale(5);
    color: yellowgreen;
    transform: rotate(180deg);
  }
  50% {
    transform: scale(5);
    color: yellowgreen;
    transform: rotate(270deg);
  }
  100% {
    transform: scale(0);
    color: violet;
    transform: rotate(360deg);
  }
}
</style>
