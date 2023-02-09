interface IInfo {
  name: string;
  age: number;
}

// 奇怪的现象一

// 会报错
// const info: IInfo = {
//   name: "zs",
//   age: 12,
//   slogan: "你干嘛",
// };

// 不会报错
let p = {
  name: "zs",
  age: 12,
  slogan: "你干嘛",
};

const info: IInfo = p;

// 奇怪的现象二
function printInfo(info: IInfo) {}
// 报错
// printInfo({ name: "zs", age: 123, slogan: "111" });
// 不报错
let obj = { name: "zs", age: 123, slogan: "111" };
printInfo(obj);
