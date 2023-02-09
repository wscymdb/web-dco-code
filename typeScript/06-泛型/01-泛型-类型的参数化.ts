// 定义一个函数 返回值是传入的形参

// 如果不给形参指定类型 那么结果都是any类型
// 如果给形参指定一个联合类型 那么r1\r2的结果就都是联合类型
// 但是需要传入的啥类型，返回值就是啥类型
// 所以可以将类型作为参数，让调用者传来

function returnParameter<Type>(arg: Type) {
  return arg;
}

// 完整写法
const r1 = returnParameter<string>("aaa");
const r2 = returnParameter<number>(111);

// 省略写法
// 可以不传入参数的类型，ts会根据实参类型推导出类型
const r3 = returnParameter("bbb");
const r4 = returnParameter(222);

export {};
