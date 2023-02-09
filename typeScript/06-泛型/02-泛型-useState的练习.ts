// 元组：useState函数
function useState<Type>(initialState: Type): [Type, (newState: Type) => void] {
  let state = initialState;
  function setState(newState: Type) {
    state = newState;
  }

  return [state, setState];
}

const [count, setCount] = useState(100);
const [message, setMessage] = useState("hello world");
const [banners, setBanners] = useState<any[]>([]);

//
function foo<T, E>(arg1: T, arg2: E) {}
foo(1, "1");
foo(2, 3);

export {};
