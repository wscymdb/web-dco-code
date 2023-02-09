class Point<Type = string> {
  constructor(public x: Type, public y: Type) {}
}

const p1 = new Point(10, 20);
const p2 = new Point<boolean>(true, false);
export {};
