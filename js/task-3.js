const input = document.getElementById('name-input');
const span = document.getElementById('name-output');

input.addEventListener('input', handleInput);
function handleInput(event) {
  let name = event.currentTarget.value.trim();
  if (name !== '') {
    span.textContent = name;
  } else {
    span.textContent = 'Anonymous';
  }
}
