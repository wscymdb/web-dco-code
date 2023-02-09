interface IInfo {
  length: number;
}

// 有一个函数 要求传入参数的必须有length属性
function getInfo(arg: IInfo) {
  return arg;
}

// 如果使用上面的写法 那么接收的结果类型是IInfo
// 但是传入的是string 和 any[] 就会造成类型缺失
const l1 = getInfo("123");
const l2 = getInfo(["1", 2, 3]);

// 使用泛型约束  即可让结果类型不会缺失
// 又可以限制传入的参数必须有length属性
function getInfo2<Type extends IInfo>(arg: Type): Type {
  return arg;
}
const l3 = getInfo2("123");
const l4 = getInfo2(["1", 2, 3]);
const l5 = getInfo2({ length: 123, name: "zs" });
// const l5 = getInfo2(123);  // 报错

export {};
