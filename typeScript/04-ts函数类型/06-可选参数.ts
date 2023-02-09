// 可选参数的类型是 指定的类型和undefined的联合类型
//  这个函数的y参数类型 ：number | undefined
function foo(x: number, y?: number) {}

foo(1);
foo(111, 222);

export {};
