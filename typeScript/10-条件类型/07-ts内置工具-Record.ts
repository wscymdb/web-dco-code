interface IKun {
  name: string
  age: number
  slogan?: string
}

type t1 = '上海' | '土耳其' | '徐庄'

// Readonly 复制类型将其所有成员变成只读 (内置工具)
type IKunOptional = MyRecord<t1, IKun>

// 自己实现
type keys = keyof IKun // 会返回一个由IKun所有key组成的联合类型  name|age|slogan
type res = keyof any // => string | number | symbol

type MyRecord<K extends keyof any, T> = {
  // 但是K必须满足条件 不是所有的类型都可以做对象的键  比如boolean类型就不可以
  [P in K]: T
}
export {}
