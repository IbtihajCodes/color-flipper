"use strict";

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

let colorFlipper = document.querySelector(".color-flipper");
let color = document.querySelector(".color");
const clickBtn = document.querySelector(".click-btn");

let newArr = [];
clickBtn.addEventListener("click", function () {
  let randomIndex = [];
  for (let i = 0; i < 6; i++) {
    randomIndex.push(hex[Math.floor(Math.random() * hex.length)]);
  }
  colorFlipper.style.backgroundColor = `${"#" + randomIndex.join("")}`;
  color.innerHTML = `${"#" + randomIndex.join("")}`;
});
