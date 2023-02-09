class Person {
  constructor(public name: string) {}
}
class a {
  constructor(public name: string) {}
}

// 类也可以当作是一个构造签名的函数
interface IFactory {
  new (): Person;
}
function factory(ctor: IFactory) {
  return new ctor();
}
factory(a);

export {};
