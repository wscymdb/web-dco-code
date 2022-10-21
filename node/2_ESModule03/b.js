const res = import("./a.js");
res.then((res) => {
  console.log(import.meta);
  console.log(res);
});
