function foo(this: {}, num: number) {
  console.log(this);
  return 123;
}

foo.call("", 222);

let obj = {
  say() {
    console.log(this);
  },
};
