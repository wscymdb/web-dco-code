interface IPerson {
  name: string;
  age: number;
  friend?: { name: string };
}

const person: IPerson = {
  name: "zs",
  age: 19,
};

// 因为接口IPerson的friend是可选类型，所以不能直接对friend进行操作

// 解决方案一  类型缩小
if (person.friend) {
  person.friend.name = "ss";
}

// 解决方案二  非空类型断言
// 这种方法有些危险，除非真的确定friend存在
person.friend!.name = "sd";

export {};
