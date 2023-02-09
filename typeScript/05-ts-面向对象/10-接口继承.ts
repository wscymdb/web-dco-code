interface IPerson {
  name: string;
  age: number;
}

interface IKun extends IPerson {
  slogan: string;
}

const jack: IKun = {
  name: "zs",
  age: 19,
  slogan: "你干嘛",
};

export {};
