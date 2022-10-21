import "./../style/title.css";
import "./../style/body.less";
import oneJpg from "./../images/1.jpg";
import twoJpg from "./../images/2.jpg";

const divEl = document.createElement("div");
divEl.textContent = "hello title";
divEl.classList.add("title");

document.body.append(divEl);

const h2El = document.createElement("div");
h2El.textContent = "hello H2";
h2El.classList.add("success");

document.body.append(h2El);

const imgEl = document.createElement("img");
imgEl.src = oneJpg;
document.body.append(imgEl);

const imgEl2 = document.createElement("img");
imgEl2.src = twoJpg;
document.body.append(imgEl2);
