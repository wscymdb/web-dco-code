class Person {
  // 定义私有属性 一般使用 _ 开头
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  // 使得外界可以访问类的私有属性
  // 本可以和私有属性同名
  set age(newVal: number) {
    if (newVal < 120 && newVal > 0) {
      this._age = newVal;
    }
  }

  get age() {
    return this._age;
  }
}

const p1 = new Person(19);

p1.age = 12;

export {};
