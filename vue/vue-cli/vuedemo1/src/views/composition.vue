<template>
  <div>
    <div>{{ msg }}</div>

    <button @click="changeMsg">changeMsg</button>
    <br />
    <hr />
    <div>{{ info }}</div>
    <div>{{ obj }}</div>
    <button @click="changeInfo">changeInfo</button>
    <hr />
    <hr />
    <button ref="btnRef" @click="getBtnRef">btnRef</button>
    <hr />
    <div>{{ name }}</div>
    <button @click="changeName">changeName</button>
    <hr />
    <div>{{ effectCounter }}</div>
    <button @click="changeCounter">changeCounter</button>

    <button @click="changeTitle">设置标题</button>
  </div>
</template>

<script>
import { ref, reactive, onMounted, isProxy, watch, watchEffect } from "vue";
import { setTitle } from "@/hooks/useTitle";
export default {
  name: "",
  setup() {
    const msg = ref("哈哈哈");
    const changeMsg = () => {
      msg.value = "嘿嘿嘿";
    };

    const info = reactive({
      name: "zs",
      age: 19,
    });

    const obj = ref({
      name: "zs",
      friend: [1, 2, 3],
    });

    const changeInfo = () => {
      info.age = 22;
      obj.value.friend[0] = 123;
    };

    const counter = 123;
    onMounted(() => {
      console.log(this);
      console.log(isProxy(counter));
      console.log(isProxy(info));
    });

    const btnRef = ref(null);
    const getBtnRef = () => {
      console.log(btnRef.value);
    };

    const name = reactive({ name: "陈哈哈" });
    const changeName = () => {
      name.name = "大先生";
    };
    watch(name, (curr, prev) => {
      console.log(curr);
      console.log(prev);
    });

    const effectCounter = ref(0);
    const changeCounter = () => {
      effectCounter.value++;
    };
    watchEffect((curr, prev) => {
      console.log("effectName------------", effectCounter.value);
      console.log("effectName------------", name.name);
    });

    const changeTitle = () => {
      const title = setTitle("hhh");
      setTimeout(() => {
        title.value = "我是大帅逼";
      }, 1000);
    };

    return {
      msg,
      changeMsg,
      info,
      changeInfo,
      obj,
      btnRef,
      getBtnRef,
      name,
      effectCounter,
      changeName,
      changeCounter,
      changeTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
