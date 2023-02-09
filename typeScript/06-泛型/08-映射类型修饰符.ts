// 在拷贝的时候 可以添加? 或readonly修饰符
type MapType<T> = {
  readonly [property in keyof T]?: T[property];
};

interface IPerson {
  neme: string;
  age: number;
  height: number;
  isGay: boolean;
}

type newPerson = MapType<IPerson>;
export {};
