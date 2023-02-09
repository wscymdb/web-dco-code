<template>
  <div></div>
  <router-view />
</template>

<script>
import login from "@/views/login.vue";
export default {
  components: {
    login,
  },
  data() {
    return {
      info: ["衣服", "鞋子", "包包"],
    };
  },
  methods: {
    handleClick() {
      console.log("first");
    },
  },
};
</script>

<style></style>
