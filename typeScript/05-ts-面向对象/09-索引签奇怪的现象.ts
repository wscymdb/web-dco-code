//  ts规定阿数组签名的索引类型必须是string或者number其中一个
// 不可是联合类型
interface ICollection {
  [index: number]: string; // 1
  // [index: string]: any ; // 2
  // [index: string]: string; // 3
}

//  将类型1改为类型2 同样也不会报错
// 但是意思是 索引是string 返回值是any  但是数组的索引是number
// 原因：JavaScript在实际转换的时候会将 names[0] 转换成names["0"]

// 将类型1改为类型3的时候就会报错
// 数组还有自己的方法 比如 names.forEach
// 也符合索引是字符串，但是返回值是一个函数

const names: ICollection = ["zs", "ls"];
let a = names[0];
let b = names["0"];

export {};
