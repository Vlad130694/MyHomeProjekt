import "./main.scss";
import { Button } from "./components/Button/Button";
const add123 = (a, b) => a + b;

const root = document.querySelector("#root");

root.insertAdjacentHTML("beforebegin", Button());

const res = add123(222, 3);
console.log("root");
