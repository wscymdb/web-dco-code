type t1 = 'name' | 'age' | 'height'

//Exclude<T, K> 去除T中的K   (内置工具)
type IKunOptional = MyExclude<t1, 'name'>

// 自己实现
// 核心是内容分发
type MyExclude<T, U> = T extends U ? never : T

export {}
