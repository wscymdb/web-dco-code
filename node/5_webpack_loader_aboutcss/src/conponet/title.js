import "./../style/title.css";
import "./../style/body.less";

const divEl = document.createElement("div");
divEl.textContent = "hello title";
divEl.classList.add("title");

document.body.append(divEl);

const h2El = document.createElement("div");
h2El.textContent = "hello H2";
h2El.classList.add("success");

document.body.append(h2El);
