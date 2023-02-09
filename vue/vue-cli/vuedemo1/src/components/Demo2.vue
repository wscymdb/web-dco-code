<template>
  <div>
    <input
      type="text"
      placeholder="Demo2"
      :value="title"
      @input="$emit('update:title', $event.target.value)"
    />
    <hr />
  </div>
</template>

<script>
import eventBus from "@/utils/event-bus";
export default {
  name: "Daughter",
  props: ["title"],
  created() {
    eventBus.on("click", this.handleClick);
  },

  data() {
    return {
      conunt: 0,
    };
  },
  methods: {
    handleClick() {
      this.$emit("update:modelValue", this.conunt++);
    },
  },
};
</script>

<style lang="scss" scoped></style>
