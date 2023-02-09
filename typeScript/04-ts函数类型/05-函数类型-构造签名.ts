class Person {
  constructor() {}
}

interface ICSTPerson {
  new (): Person;
}
function factory(fn: ICSTPerson) {
  const f = new fn();
  return f;
}

factory(Person);

export {};
