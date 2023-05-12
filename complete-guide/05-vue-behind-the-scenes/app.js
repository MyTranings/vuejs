const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.currentUserInput;
    },
  },
});

app.mount('#app');

const app2 = Vue.createApp({
  template: `
    <p>{{message}}</p>
  `,
  data() {
    return {
      message: 'Pizza'
    }
  }
})

app2.mount('#app2')

const data = {
  message: 'Hello!',
  logMessage: 'Hello World!'
}

const handler = {
  set(target, key, value) {
    console.log(target);
    console.log(key);
    console.log(value);
    if (key === 'message') {
      target.logMessage = value + ' World!';
    }
    target.message = value;
  }
}

const proxy = new Proxy(data, handler);

proxy.message = 'Hello!!!!';

console.log(proxy.logMessage);