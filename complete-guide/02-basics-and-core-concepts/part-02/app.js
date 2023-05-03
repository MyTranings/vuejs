const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
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
    }
  },
});

app.mount('#events');
$(document).on('change', 'select', function () {
  // Your code here
});