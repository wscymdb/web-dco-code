// 接口使用泛型
// 接口使用泛型可以设置默认值
interface IKun<Type = number> {
  name: Type;
  age: number;
  slogan: Type;
}

// 接口使用泛型无法进行类型推导
const k1: IKun<string> = {
  name: "zs",
  age: 19,
  slogan: "你干嘛",
};
export {};
