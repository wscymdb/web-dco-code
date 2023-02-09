const info: [string, number, number] = ["code", 19, 1.88];

// 例子
function useState(initialState: number): [number, (newValue: number) => void] {
  let val = initialState;

  function setValue(newValue: number) {
    val = newValue;
  }

  return [val, setValue];
}
// 接收的值就知道setCount是函数类型，count是number类型
const [count, setCount] = useState(1);
setCount(1);

export {};
