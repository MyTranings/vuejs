const app = Vue.createApp({
  data() {
    return {
      number: 0
    }
  },
  computed: {
    result() {
      if (this.number < 37) {
        return 'Not there yet!';
      } else if (this.number > 37) {
        return 'Too much!';
      } else {
        return this.number;
      }
    }
  },
  watch: {
    result(value, oldValue) {
      if (value !== oldValue) {
        const timeout = setTimeout(() => {
          this.number = 0;
        }, 5000)
      }
    }
  },
  methods: {
    addNumber(n) {
      this.number = this.number + n;
    }
  }
});

app.mount('#assignment')