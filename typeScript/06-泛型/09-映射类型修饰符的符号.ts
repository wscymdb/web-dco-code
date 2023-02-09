// 在拷贝的时候 如果拷贝源 是有修饰符的可以去掉
type MapType<T> = {
  -readonly // 表示如果属性的类型有修饰符 那就去掉修饰符
  [property in keyof T]-?: T[property];
};

interface IPerson {
  neme?: string;
  age: number;
  readonly height: number;
  isGay: boolean;
}

type newPerson = MapType<IPerson>;

export {};
