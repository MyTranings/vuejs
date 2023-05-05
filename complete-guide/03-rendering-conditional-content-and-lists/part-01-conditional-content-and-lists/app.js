const app = Vue.createApp({
  data() {
    return {
      goals: [],
      obj: {
        firstName: 'Dan',
        lastName: 'Georgiev'
      },
      newGoalValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.newGoalValue)
    },
    removeGoal(index) {
      this.goals.splice(index, 1)
    }
  }
});

app.mount('#user-goals');
