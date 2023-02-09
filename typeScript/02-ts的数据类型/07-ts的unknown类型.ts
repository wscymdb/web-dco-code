let id: unknown = 100100;

id = "123123";

//  unknown类型不可以对变量做任何操作
// 必须进行类型的校验(类型缩小),才能根据缩小之后的类型做对应的操作
if (typeof id === "string") {
  console.log(id.length);
}
export {};
