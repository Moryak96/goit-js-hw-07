const btn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');
const body = document.querySelector('body');
// console.log(nameColor);
// console.log(btn);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
btn.addEventListener('click', handleClick);

function handleClick(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  nameColor.textContent = newColor;
}
