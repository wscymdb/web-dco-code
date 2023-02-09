type CalcType = (n1: number, n2: number) => number;

function calc(calcFn: CalcType) {
  const n1 = 10;
  const n2 = 20;

  const res = calcFn(n1, n2);
  console.log(res);
}

function add(n1: number, n2: number) {
  return n1 + n2;
}

calc(add);

export {};
