type t1 = 'name' | 'age' | 'height' | null | undefined

// NonNullable<T> 去除T中的null或undefined (内置工具)
type IKunOptional = MyNonNullable<t1>

// 自己实现
// 核心是内容分发
type MyNonNullable<T> = T extends null | undefined ? never : T

export {}
