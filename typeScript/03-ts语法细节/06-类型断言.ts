// 获取DOM元素  <img class="img" />

// 不使用类型断言 根据类型推导的结果是  Element | null
// 如果做别的操作，需要进行类型缩小
// 使用类型断言  类型就是断言的类型  可以直接做对应的操作

const imgEl = document.querySelector(".img") as HTMLImageElement;
imgEl.alt = "你干嘛";
export {};
