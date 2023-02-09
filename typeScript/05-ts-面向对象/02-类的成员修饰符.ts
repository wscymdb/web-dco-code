class Person {
  name: string;
  age: number;
  private id: number; // 仅在当前类中可以使用
  protected score: number; // 当前类和子类中使用

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.id);
  }
}

class Student extends Person {
  study() {
    console.log(this.score);
  }
}

const p1 = new Person("zs", 19);
console.log(p1.age);
export {};
