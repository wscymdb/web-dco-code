function foo(): number {
  return 123;
}

type BarType = (n: number) => number;
const bar: BarType = function () {
  return 123;
};
export {};
