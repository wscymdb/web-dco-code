const { reactive, watchFn } = require("./depend");

const obj = reactive({
  name: "张三",
  age: 19,
});

watchFn(() => {
  console.log(obj.name);
});

obj.name = "李四";

console.log("-===================-");

const user = reactive({
  name: "王五",
  level: 1,
});

watchFn(() => {
  console.log(user.level);
});

user.level = 12;
