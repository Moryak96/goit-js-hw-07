const input = document.querySelector('input');
const controls = document.getElementById('controls');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtn.addEventListener('click', handleCreate);

function handleCreate(event) {
  const amount = input.valueAsNumber;
  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }

  boxesContainer.innerHTML = '';
  boxesContainer.append(...boxes);
}

destroyBtn.addEventListener('click', handleDestroy);

function handleDestroy() {
  boxesContainer.innerHTML = '';
}
