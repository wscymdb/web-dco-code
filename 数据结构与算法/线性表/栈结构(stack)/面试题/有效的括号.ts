import Stack from "../手写栈结构(数组)重构";

// 解题思路
/*
  1.核心思路是一一对应关系
  2.如果是任意左括号，那么立马在栈中压入与之对应的右括号
  3.如果是右括号，那么就出栈一个元素，这个元素必须要和当前右括号一样
  4.当遍历完毕后，还要确保栈中没有元素
*/
function isValid(s: string): boolean {
  const stack = new Stack<string>();
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    switch (item) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (stack.pop() !== item) return false;
        break;
    }
  }

  return stack.isEmpty();
}

console.log(isValid("(()){{}}[]"));
console.log(isValid("(()"));
console.log(isValid("[]"));
