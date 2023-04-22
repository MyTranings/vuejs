// Vanilla JS

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal(event) {
//   event.preventDefault();
//   if (inputEl.value) {
//     const goal = document.createElement('li');
//     goal.textContent = inputEl.value;
//     listEl.appendChild(goal);
//     inputEl.value = '';
//   }
// }

// buttonEl.addEventListener('click', addGoal)

// Vue JS

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    }
  },
  methods: {
    addGoal() {
      if (this.enteredValue.length > 0) {
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      }
    }
  },

}).mount('#app');

