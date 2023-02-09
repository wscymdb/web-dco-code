function foo(this: { name: "zs" }, nmu: number) {
  console.log(this);
}

// 获取函数的类型
type FooType = typeof foo;

// 全局的工具函数

// 1. 获取当前函数的this的类型
type FooThisType = ThisParameterType<FooType>;

// 2. 省略当前函数类型的this，返回一个纯净的函数类型
type PureFooType = OmitThisParameter<FooType>;

// 3. ThisType: 用于绑定上下文的this

// 下面案列中，
// 如果想要在say或hi方法中直接使用this.name就会报错
// 因为根据上下文推导得this得类型时IStore 里面没有name
// 但是调用得时候 store.say.call(store.state); 传入了this
// 解决方案一 (如果这个对象中有1000个方法就要定义1000次this类型，麻烦)
//  在每个方法中指定this得类型
/*   say(this: IState) {
    console.log(this.name);
  },
  */

// 解决方案二  ThisType<类型>
// 指定一次this的类型，这个对象中的this的类型都指向 指定得这个类型
interface IState {
  name: string;
  age: number;
}
interface IStore {
  state: IState;
  say: () => void;
  hi: () => void;
}

const store: IStore & ThisType<IState> = {
  state: {
    name: "zs",
    age: 18,
  },
  say() {
    console.log(this.name);
  },
  hi() {
    console.log(this.name);
  },
};

store.say.call(store.state);
export {};
