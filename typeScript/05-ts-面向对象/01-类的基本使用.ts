// ts定义类，必须要声明成员属性
class Person {
  // 声明成员属性
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("zs", 22);

console.log(p1.name, p1.age);

export {};
