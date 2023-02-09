//  需求 定义一个函数 可以传入字符串或者数组，来获取他们的长度

// 1.重载方式
function getLen(a: string): number;
function getLen(a: any[]): number;
function getLen(a: any) {
  return a.length;
}

// 2.联合类型实现
function getLength(a: string | any[]) {
  a.length;
}

export {};
