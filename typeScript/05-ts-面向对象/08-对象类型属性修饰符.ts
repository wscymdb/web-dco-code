interface IInfo {
  // 属性? 表示此属性可选
  name?: string;
  // age只能读取  不能修改
  readonly age: number;
}

const info: IInfo = {
  name: "zs",
  age: 19,
};
