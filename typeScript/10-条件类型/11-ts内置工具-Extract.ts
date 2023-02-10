type t1 = 'name' | 'age' | 'height'

// Omit<T, K> 从T中去除K属性  组成一个对象类型 (内置工具)
type IKunOptional = MyExtract<t1, 'name' | 'age'>

// 自己实现
// 核心是内容分发
type MyExtract<T, U> = T extends U ? T : never

export {}
