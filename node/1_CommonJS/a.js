const a = {
  name: "jack",
};

// module.exports = a;

exports.a = a;

setTimeout(() => {
  exports.a.name = "sdfsd";
  // a.name = "sdfsd";
}, 2000);
