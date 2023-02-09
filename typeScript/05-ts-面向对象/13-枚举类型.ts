//  定义枚举类型
enum Direction {
  UP,
  LEFT,
  RIGHT,
}

const d1: Direction = Direction.LEFT;
console.log(d1);

// 枚举类型的值
enum Majiang {
  WAN = "万",
  TIAO = "条",
  PI = "皮",
}
const m: Majiang = Majiang.WAN;
export {};
