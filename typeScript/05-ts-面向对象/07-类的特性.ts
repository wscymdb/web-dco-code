class Person {}

// 类的作用
// 1. 可以创建类对应的示例对象
const p = new Person();

// 2. 类本身可以作为类型
const p1: Person = new Person();
function foo(fn: Person) {}

// 类也可以当作是一个构造签名的函数
interface IFactory {
  new (): void;
}
function factory(ctor: IFactory) {}
factory(Person);

export {};
