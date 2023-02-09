class Depend {
  constructor() {
    // 为了防止一个函数多次使用同一个属性而重复添加  使用set
    this.reactiveList = new Set();
  }

  addDepend(fn) {
    if (!fn) return;
    this.reactiveList.add(fn);
  }

  notify() {
    this.reactiveList.forEach((fn) => fn());
  }
}

let objMap = new WeakMap();
const getDepend = (obj, key) => {
  // 1.从objMap中获取存放对象的map
  let map = objMap.get(obj);
  if (!map) {
    map = new Map();
    objMap.set(obj, map);
  }

  // 2.从map中根据key获取当前key对应的dep实例
  let dep = map.get(key);
  if (!dep) {
    dep = new Depend();
    map.set(key, dep);
  }
  // console.log(objMap);

  return dep;
};

module.exports = getDepend;
