interface IKun {
  name: string
  age: number
  slogan?: string
}

// Readonly 复制类型将其所有成员变成只读 (内置工具)
type IKunOptional = Readonly<IKun>

// 自己实现
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
export {}
