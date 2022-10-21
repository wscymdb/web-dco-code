/**
 * @file 判断一个变量是否是对象数据类型
 */

function isObject(value) {
  const objType = typeof value;

  return value !== null && (objType === "object" || objType === "function");
}
