<template>
  <div class="container">
    {{ message }}
    <div class="position">{{ x }}--{{ y }}</div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import useScorllPosition from "@/hooks/useScorllPosition";

const { x, y } = useScorllPosition();
// watch(y, (curr) => {
//   console.log(x.value, y.value);
// });

const message = ref("hh");
</script>

<style scoped>
.position {
  position: fixed;
}
</style>
