class Person {
  readonly name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("zs", 19);
console.log(p1.age);

// 只读属性 不可以改写
// p1.name = "zs";

export {};
