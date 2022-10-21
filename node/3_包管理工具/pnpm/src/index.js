const axios = require("axios");

async function getData() {
  const res = await axios.get("http://180.76.235.241:3000/media/list");
  console.log(res.data);
}

getData();
