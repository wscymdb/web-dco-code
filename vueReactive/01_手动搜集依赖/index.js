const Depend = require("./depend");

const dep = new Depend();

const obj = {
  name: "张三",
  age: 19,
};

Object.keys(obj).forEach((key) => {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    set(newVal) {
      value = newVal;
      dep.notify();
    },

    get() {
      return value;
    },
  });
});

dep.addDepend(() => {
  console.log(obj.name);
  console.log(obj.age);
});

obj.name = "jack";
