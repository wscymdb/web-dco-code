type IDType = number

//  判断IDType是否继承number类型
// 表达式只能使用extends关键字
// 也就是说只能判断继承不继承  不能IDType === number之类的操作符
type resType = IDType extends number ? number : string

//  举个栗子  函数的重载

// function sum(num1: string, num2: string): string
// function sum(num1: number, num2: number): number

// 上面两个可以复用，只定义一个函数的重载

// 这样写参数的类型虽然都要一样 但是写两个对象也可以
// function sum<T>(num1: T, num2: T): T

// 限制参数的类型,但是返回值是联合类型
// function sum<T extends number | string>(num1: T, num2: T): T

// 利用条件表达式判单返回类型
function sum<T extends number | string>(
  num1: T,
  num2: T
): T extends number ? number : string

function sum(num1, num2) {
  return num1 + num2
}

sum(1, 3)
sum('abs', 'vsx')

export {}
