interface IKun {
  name: string
  age: number
  slogan?: string
}

// Partial 复制类型将其所有成员变成可选 (内置工具)
type IKunOptional = Partial<IKun>

// 自己实现
type MyPartial<T> = {
  [P in keyof T]?: T[P]
}

export {}
