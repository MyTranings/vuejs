const app = Vue.createApp({
  data() {
    return {
      userInput: 'OUTPUT',
      validInput: 'OUTPUT'
    }
  },
  methods: {
    showAlert() {
      alert('Button was clicked')
    },
    inputHandle(event) {
      this.userInput = event.target.value;
    },
    validatedInput(event) {
      this.validInput = this.userInput;
    }
  }
})

app.mount('#assignment')