type CalcFnType = (n1: number, n2: number) => number

function foo() {
  return 'avas'
}

// T extends (...args: any[]) => infer R ? R : never
//  表示如果条件正确 返回 R
// infer R  ：表示在条件类型中 会推断（infer自动推断）继承的后面函数类型的返回值类型 然后给 R
// 可以将infer理解为占位符，当推断出来类型后，会将类型赋值给其后面跟着的符号

// 自定义获取函数返回值类型工具
type MyReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : never

// 获取一个函数的返回值类型
type CalcReturnType = MyReturnType<CalcFnType>
type FooReturnType = MyReturnType<typeof foo>

// 自定义获取函数参数类型工具
type MyParameterType<T extends (...args: any[]) => any> = T extends (
  ...args: infer A
) => any
  ? A
  : never

type CalcFnType1 = (n1: number, n2: string) => any
type CalcParamType = MyParameterType<CalcFnType1>

export {}
