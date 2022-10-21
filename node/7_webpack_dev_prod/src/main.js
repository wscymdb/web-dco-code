import { formatDate } from "./utils/formatDate";
import "./utils/demo";
// import "./conponet/title";
const cc = 2994;
formatDate(cc, cc.length);
const fn = () => {
  const a = 123;
  return a;
};
console.log(fn);
console.log(named);
console.log(process.env.NODE_ENV);

if (module.hot) {
  console.log("hot");
  module.hot.accept("./utils/demo.js", () => {
    console.log("mian.js is changed");
  });
}
