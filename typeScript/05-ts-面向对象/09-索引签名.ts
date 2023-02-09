// 假设getInfo是三方库的一个方法
// 但是我们不知道这个方法返回的对象具体有啥属性
// 但是我们知道大概的返回值
// 这时候可以使用索引签名
// 描述的类型：索引是字符串 返回值是字符串
// [key: string]: string  key可以自定义写啥都行

interface IInfo {
  // 索引签名：可以通过一个字符串索引 去获取一个字符串类型的值
  [key: string]: string;
}
function getInfo(): IInfo {
  return { name: "zs", slogan: "sss" };
}

export {};
