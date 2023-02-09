// 此函数  根据key 返回key在obj的值
// 要求传入的key必须是obj中的属性

// K extends keyof O 表示 K必须是 keyof O("name" | "age" | "height") 中的属性
// 那么就可以确保 传入的key一定包含在obj中
function getObjectProperty<O, K extends keyof O>(obj: O, key: K) {
  return obj[key];
}

let info = {
  name: "zs",
  age: 19,
  height: 1.88,
};

getObjectProperty(info, "name");

// keyof  xxx： 获取所xxx有的key 组成一个联合类型返回

interface IKun {
  name: string;
  age: number;
}

type IKunKeys = keyof IKun; // "name" | "age"
