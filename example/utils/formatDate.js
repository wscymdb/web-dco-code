/**
 * @author Jack
 * @description 时间格式化函数
 */

function formatDate(timestamp, fmtString) {
  // 1. 将时间戳转为时间
  const date = new Date(timestamp);

  // 2. 创建一个对象，key是正则，值是对应的时间的值
  const dateO = {
    "y+": date.getFullYear(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };

  // 3. 遍历正则对象
  for (const key in dateO) {
    const keyRe = new RegExp(key, "g");
    let valeu = (dateO[key] + "").padStart(2, "0");
    // 判断传入的fmtString是否与对象中的正则匹配
    if (keyRe.test(fmtString)) {
      fmtString = fmtString.replace(keyRe, valeu);
    }
  }

  return fmtString;
}
