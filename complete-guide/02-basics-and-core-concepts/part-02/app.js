const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(e) {
      this.name = e.target.value;
    },
    submitForm(event) {
    },
    confirmInput() {
      this.confirmedName = this.name
    }
  },
});

app.mount('#events');
$(document).on('change', 'select', function () {
  // Your code here
});