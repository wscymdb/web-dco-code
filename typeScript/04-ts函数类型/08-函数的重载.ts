//  实现一个sum函数 既可以进行数字的相加，也可以实现字符串的相加

// 利用函数的重载解决方案

// 1.编写函数的重载签名
function sum(num1: number, num2: number): number;
function sum(num1: string, num2: string): string;
// 2.编写通用的函数
function sum(num1: any, num2: any) {
  return num1 + num2;
}

// 注意 通用函数是不能被直接调用的
// 就是传入的参数只能符合重载签名其中一种类型

sum(10, 20);
sum("aaa", "bbb");

export {};
