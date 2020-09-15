import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const num = document.querySelector("span");

num.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const onChange = () => {
  num.innerText = counterStore.getState();
};
const counterStore = createStore(countModifier);
counterStore.subscribe(onChange);

const addNum = () => {
  counterStore.dispatch({ type: ADD });
};

const minusNum = () => {
  counterStore.dispatch({ type: MINUS });
};

add.addEventListener("click", addNum);
minus.addEventListener("click", minusNum);
