interface IKun {
  name: string;
  age: number;
}

interface ICode {
  name: string;
  coding: () => void;
}

const info: IKun & ICode = {
  name: "zs",
  age: 22,
  coding() {},
};

export {};
