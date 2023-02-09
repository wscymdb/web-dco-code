// 属性的分隔符可以是逗号，也可以是分号，如果是分号，换行写的情况下可以省略分号
type PonintType = {
  x: number;
  y: number;
  z?;
};

function pointCoordinate(point: PonintType) {
  console.log(point.x);
  console.log(point.y);
}

pointCoordinate({
  x: 123.22,
  y: 223.33,
});
export {};
