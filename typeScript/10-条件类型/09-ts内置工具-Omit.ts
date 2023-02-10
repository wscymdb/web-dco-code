interface IKun {
  name: string
  age: number
  slogan?: string
}

// Omit<T, K> 从T中去除K属性  组成一个对象类型 (内置工具)
type IKunOptional = Omit<IKun, 'name'>

// 自己实现
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}

export {}
