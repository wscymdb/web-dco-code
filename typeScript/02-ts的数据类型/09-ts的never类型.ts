function foo(): never {
  throw new Error("123");
}

foo();

// 例子
// 下面的工具函数 后面的同事在维护的时候
// 原来参数只能是string和number  但是现在的同事想添加boolean
// 然后就在形参的类型加了一个boolean
// 但是没有对这个类型做任何的操作， 那么default的内容就会报错
// 用来提示开发者将新加入的类型做操作，更加严谨
function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case "string":
      console.log(message.length);
      break;

    case "number":
      console.log(message);
      break;

    case "boolean":
      console.log(message);
      break;

    default:
      const check: never = message;
  }
}
handleMessage(true);
export {};
