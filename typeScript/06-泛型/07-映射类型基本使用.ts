// 可以把MapIkun当作一个函数
type MapType<T> = {
  // 下面的操作其实就相当于遍历了一遍 T
  // name: string
  // age: number
  [property in keyof T]?: T[property];
  // 拷贝的时候让类型变为可选类型
  // 如果使用接口的继承那么就没有这么灵活
  // [property in keyof T]?: T[property];
};

interface IKun {
  name: string;
  age: number;
}

// 拷贝一份IKun
type NewKun = MapType<IKun>;

const k1: NewKun = {
  name: "zs",
};

export {};
