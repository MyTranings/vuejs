// Vanilla JS

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal(event) {
  event.preventDefault();
  if (inputEl.value) {
    const goal = document.createElement('li');
    goal.textContent = inputEl.value;
    listEl.appendChild(goal);
    inputEl.value = '';
  }
}

buttonEl.addEventListener('click', addGoal)
