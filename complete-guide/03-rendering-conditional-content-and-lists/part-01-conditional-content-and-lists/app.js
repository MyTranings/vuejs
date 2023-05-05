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
    }
  }
});

app.mount('#user-goals');
