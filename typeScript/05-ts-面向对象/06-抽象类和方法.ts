abstract class Shape {
  abstract getArea(): void;
}
class Rectangle {
  constructor(public height: number, public width: number) {}

  getArea() {
    return this.height * this.width;
  }
}

class Circle {
  constructor(public radius: number) {}

  getArea() {
    return this.radius * 2 * Math.PI ** 2;
  }
}

// 通用函数
function calcArea(shape: Shape) {
  return 100;
}

calcArea(new Rectangle(10, 20));
calcArea(new Circle(10));

// 有一个通用函数 传入一个参数 用于获取几何图形的面积
// 本来这个函数是一个比较通用的函数
// 不能每次多一个类型就改变函数参数的类型
// 所以创建一个父类 让后续所有的类都继承这个父类
// 继承父类的子类们要求都要用getArea方法
// 所以可以在父类中使用抽象方法  也就是没有实现体
// 那么后续继承这个父类的子类就必须有getArea这个方法

export {};
