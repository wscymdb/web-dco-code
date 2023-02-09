interface IPerson {
  name: string;
  age: number;
  say: () => void;
}

interface IRun {
  run: () => void;
}

// Person类必须具备IPerson的属性
// 类可以同时实多个接口
class Person implements IPerson, IRun {
  constructor(public name: string, public age: number) {}
  say() {
    return 12;
  }
  run() {}
}
