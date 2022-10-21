const path = require("path");
const joinPath = path.join(__dirname, "a.txt");
// console.log(joinPath);
// console.log(path.extname(__filename));
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));

const path1 = ".abc";
const path2 = "./cba/nbc";

const res1 = path.join(path2, "../text");
console.log(res1);

const res2 = path.resolve(path1, "/aaa", path2);
console.log(res2);
