interface IKun {
  name: string
  age: number
  slogan?: string
}

// Required 复制类型将其所有成员变成必选 (内置工具)
type IKunOptional = Required<IKun>

// 自己实现
type MyRequired<T> = {
  [P in keyof T]-?: T[P]
}
export {}
