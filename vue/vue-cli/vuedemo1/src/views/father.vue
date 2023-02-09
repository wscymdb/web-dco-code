<template>
  <div>
    <!-- <button @click="handleClick">click me</button>
    <keep-alive>
      <component :is="comp"></component>
    </keep-alive> -->

    <Demo1 v-model="searchVal" />
    <!-- <Demo1
      :model-value="searchVal"
      @update:modelValue="(newVal) => (searchVal = newVal)"
    /> -->
    fat:{{ searchVal }}
    <hr />
    <hr />
    <Demo2 v-model:title="searchTitle" />
    fat: {{ searchTitle }}
    <Message />
  </div>
</template>

<script>
import { defineAsyncComponent } from "vue";
import Son from "@/components/Son.vue";
import Demo1 from "@/components/Demo1.vue";
import Demo2 from "@/components/Demo2.vue";
import Message from "@/components/Message.vue";
const Daughter = defineAsyncComponent(() =>
  import("@/components/Daughter.vue")
);
import eventBus from "@/utils/event-bus";
export default {
  name: "Father",
  components: {
    Son,
    Daughter,
    Demo1,
    Demo2,
    Message,
  },
  data() {
    return {
      comp: "Son",
      demo1: "",
      searchTitle: "09",
      searchVal: "123",
    };
  },
  methods: {
    handleClick() {
      if (this.comp === "Son") {
        this.comp = "Daughter";
      } else {
        this.comp = "Son";
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
