// ts对于传入的函数类型的参数个数不进行检测
type CalcType = (n1: number, n2: number) => number;

function calc(calcFn: CalcType) {
  calcFn(10, 2);
}
// 不传入参数不会报错

calc(() => 123);

// 为什么ts会有这种机制
// 举个例子
// 传入forEach的匿名函数里面的个数不是都需要用到的
// 如果ts对函数的参数的个数进行校验，那么每个形参都要写，那么就很麻烦
// 所以就不校验函数的参数个数
[1, 2, 3].forEach((item, i, arr) => {});

// 官网解释
// https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters-in-callbacks
// 在JavaScript中定义一个函数，如果形参只有一个
// 调用的时候传入了两个，那么多余的一个参数就会被忽略
// ts中也是如此，所以即使定义函数与定义的类型参数不符合也不会报错
// 当在定义回调函数的类型的时候永远不要可选参数
// 除非在调用这个回调函数的时候想要忽略某个参数
//
type CalcType1 = (n1: number, n2: number) => number;

function calc1(calcFn: CalcType1) {
  // 如果想要忽略某个参数 可以使用可选参数
  // type CalcType = (n1: number, n2?: number) => number;

  calcFn(10, 2);
}

export {};
