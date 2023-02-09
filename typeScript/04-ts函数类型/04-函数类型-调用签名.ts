// 函数本身也是对象，也可以有自己的属性

// 使用函数类型表达式，函数只能被调用，不能做其他操作(添加属性等)
// 所以使用函数调用签名
interface IBar {
  name: string;
  age: number;
  // 让函数可以调用：函数调用签名
  (n: number): number;
}

const bar: IBar = (): number => {
  return 123;
};

bar.name = "bar";
bar.age = 22;
bar(1);

export {};
