// 可以作为函数的返回值的类型
function foo(): void {}

// 函数本身也是对象，也有自己的类型
type barType = () => void;
const bar: barType = () => {};
bar();

// 列子
type ExecuFnType = (...args: any[]) => void;
function delayFn(fn: ExecuFnType, ...args: any[]) {
  setTimeout(() => {
    fn(...args);
  }, 1000);
}

delayFn(() => {}, 123, 321);

export {};
