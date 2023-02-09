interface ICollection {
  [index: number]: string;
  length: number;
}

// 有一个比较的函数 要求传入的参数必须是ICollection类型的
// 那么就可以做一些比较通用的事情，比如传进来的一定有length属性

// 如果参数类型是 any[]那么如果要是元组类型或别的类型就还要重新定义，这个函数就没有那么通用了
// 用索引签名就能很好的解决这一问题

function getCollection(collection: ICollection) {
  for (let i = 0; i < collection.length; i++) {
    console.log(collection[i]);
  }
}

const names = ["zs", "ls"];
const tuple: [string, string] = ["t1", "t2"];

getCollection(names);
getCollection(tuple);

export {};
