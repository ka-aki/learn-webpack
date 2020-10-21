import _ from "lodash";
import { NiJou } from "./utilities";

console.log(NiJou(3));

function component() {
  const element = document.createElement("div");
  const array = ["Hello", "webpack!", "!"];
  element.innerHTML = _.join(array, " ");
  return element;
}

document.body.appendChild(component());
