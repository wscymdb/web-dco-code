// 参数有默认值的情况下，参数的类型注解可以省略
// 有默认值得参数，是可以接收一个undefined的值，
// 因为默认情况下当值是undefined才会启用默认值
function foo(x: number, y = 100) {}

foo(1);
foo(111, undefined);
export {};
