<template>
  <div></div>
</template>

<script>
import MessageMixin from "@/mixin/message-mixin";
export default {
  name: "message",
  created() {
    console.log("message");
  },
  mixins: [MessageMixin],

  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
