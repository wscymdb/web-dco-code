module.exports = class Depend {
  constructor() {
    this.reactiveList = [];
  }

  addDepend(fn) {
    if (!fn) return;
    this.reactiveList.push(fn);
  }

  notify() {
    this.reactiveList.forEach((fn) => fn());
  }
};
