function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector("body");

const changeColorBtnEL = document.querySelector(".change-color");

const colorName = document.querySelector(".color");

changeColorBtnEL.addEventListener("click", onBtnClick);

function onBtnClick() {
  const color = getRandomHexColor();
  colorName.textContent = color;
  body.style.backgroundColor = color;
};