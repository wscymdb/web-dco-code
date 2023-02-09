// 1.  interface只能定义对象的类型
interface Iinfo {
  name: string;
}

// 2. interface可以重复定义同名的类型
// 重复定义的类型规则将会合并
interface IPoint {
  x: number;
  y: number;
}

interface IPoint {
  z?: number;
}

const coorfinate: IPoint = {
  x: 12,
  y: 22,
};

// 3. interface支持继承
interface IPerson {
  name: string;
  age: number;
}

interface IKun extends IPerson {
  slogan: string;
}

const p1: IKun = {
  name: "zs",
  age: 19,
  slogan: "你干嘛",
};

export {};
