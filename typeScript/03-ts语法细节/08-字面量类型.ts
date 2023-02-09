// 基本用法
const name: "zs" = "zs";
let age: 18 = 18;

// 示例
type MethodType = "get" | "post" | "delete";
function request(url: string, method: MethodType) {}

// 直接写值作为参数
request("http://abc.com", "get");

// 使用对象的值作为参数
const info = {
  url: "xxx",
  method: "post",
};

// 报错
// info的method是string类型，不符合MethodType类型
// request(info.url, info.method);

// 解决方案一 method参数使用类型断言为字面量类型
request(info.url, info.method as MethodType);
// 或者
request(info.url, info.method as "post");

// 解决方案二 让info对象类型是一个字面量类型
const info2: { url: string; method: MethodType } = {
  url: "xxx",
  method: "post",
};

// 或者 类型断言info是一个const  （ts提供的方案）
// "xxx"类型本身就是字符串类型 符合 url的string类型

const info3 = {
  url: "xxx",
  method: "post",
} as const;

request(info2.url, info2.method);
request(info3.url, info3.method);
export {};
