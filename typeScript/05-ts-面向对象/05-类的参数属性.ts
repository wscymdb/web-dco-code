class Person {
  constructor(public name: string, private age: number) {}
}

// 上面的写法是下面的语法糖

// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }u

const p1 = new Person("zs", 19);
console.log(p1.name);

export {};
