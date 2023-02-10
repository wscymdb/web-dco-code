type toArray1<T> = T[]

// 返回的类型是(number|string)[]
type NumAndStrArr1 = toArray1<number | string>

// 分发条件类型
type toArray<T> = T extends any ? T[] : never

// 返回的类型是string[] | number[]
// 会将联合类型的每个类型进行一次调用toArray<>
type NumAndStrArr = toArray<number | string>
