const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  watch: {
    name(value) {
      this.fullname = value === '' ? value : value + ' ' + this.lastName;
    },
    lastName(value) {
      this.fullname = value === '' ? this.name : this.name + ' ' + value;
    }
  },
  computed: {
    // fullname() {
    // return this.name === '' ? this.name : this.name + ' ' + 'Georgiev';
    // }
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
