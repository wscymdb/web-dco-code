function compose(...fns) {
  // 1. 边界判断
  let len = fns.length;
  if (!len) return;
  for (let i = 0; i < len; i++) {
    let fn = fns[i];
    if (typeof fn !== "function")
      throw new Error(`index positon ${i} must be function `);
  }

  //
  return function (...args) {
    // 因为做了边界判断，所以第一项一定存在
    // 如果直接遍历不取第一项的值，那么每次遍历传的值都是一样的，取了第一次的结果存起来，下次的参数就是这个结果

    let result = fns[0].apply(this, args);
    for (let i = 1; i < len; i++) {
      let fn = fns[i];
      // 参数加[]是因为apply调用的，参数必须是数组，使用apply可以指定this 更加灵活
      result = fn.apply(this, [result]);
    }

    return result;
  };
}

function foo(num) {
  return num * 2;
}

function fn(num) {
  return num ** 2;
}

function fn1(num) {
  return num ** 2;
}

let newFn = compose(foo, fn, fn1);
console.log(newFn(2)); // 256
