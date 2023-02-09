const getDepend = require("./depend");

const obj = {
  name: "张三",
  age: 19,
};

let reactiveFn = null;
function watchFn(fn) {
  reactiveFn = fn;
  fn();
  reactiveFn = null;
}

Object.keys(obj).forEach((key) => {
  let value = obj[key];

  Object.defineProperty(obj, key, {
    set(newVal) {
      value = newVal;
      const dep = getDepend(obj, key);
      dep.notify();
    },

    get() {
      let dep = getDepend(obj, key);
      dep.addDepend(reactiveFn);
      return value;
    },
  });
});

watchFn(() => {
  console.log(obj.name);
});

obj.name = "李四";
