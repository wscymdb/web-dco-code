interface IKun {
  name: string
  age: number
  slogan?: string
}

// Pick<T, K> 从T中获取K属性  组成一个对象类型 (内置工具)
type IKunOptional = MyPick<IKun, 'name'>

// 自己实现
type MyPick<T, K extends keyof T> = {
  // 遍历 K  然后从T中获取每个K 对应的值
  // 要限制K的值必须在T中都有
  [P in K]: T[P]
}

export {}
