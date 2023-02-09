<template>
  <div>
    <input type="text" placeholder="Son" />
  </div>
</template>

<script>
import eventBus from "@/utils/event-bus";
export default {
  name: "Son",
  created() {
    eventBus.on("click", this.handleClick);
  },
  data() {
    return {};
  },
  methods: {
    handleClick(val) {
      console.log(val);
      console.log(eventBus);
    },
  },
};
</script>

<style lang="scss" scoped></style>
