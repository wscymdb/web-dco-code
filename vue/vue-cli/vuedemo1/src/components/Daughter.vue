<template>
  <div>
    <input type="text" placeholder="Daugther" />
  </div>
</template>

<script>
import eventBus from "@/utils/event-bus";
export default {
  name: "Daughter",
  created() {
    eventBus.on("click", this.handleClick);
  },

  data() {
    return {};
  },
  methods: {
    handleClick() {
      console.log(222);
    },
  },
};
</script>

<style lang="scss" scoped></style>
