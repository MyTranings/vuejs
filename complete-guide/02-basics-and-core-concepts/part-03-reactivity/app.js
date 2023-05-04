const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  computed: {
    fullname() {
      return this.name === '' ? this.name : this.name + ' ' + 'Georgiev';
    }
  },
  methods: {
    outputFullname() {
      return this.name === '' ? this.name : this.name + ' ' + 'Georgiev';
    },
    setName(event) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
