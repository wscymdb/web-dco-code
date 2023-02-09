<template>
  <div>
    <input
      type="text"
      placeholder="Daugther"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <select
      name=""
      id=""
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option value="hh">hh</option>
      <option value="qq">qq</option>
    </select> -->
    <!-- <h2>{{ modelValue }}</h2>
    <button @click="handleClick">click me</button>-->
    <hr />
  </div>
</template>

<script>
import eventBus from "@/utils/event-bus";
export default {
  name: "Daughter",
  props: ["modelValue"],
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
