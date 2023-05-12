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
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() { console.log('beforeUpdate()') },
  created() { console.log('created()') },
  beforeMount() { console.log('beforeMount()') },
  mounted() { console.log('mounted()') },
  afterMount() { console.log('afterMount()') },
  beforeUpdate() { console.log('beforeUpdate()') },
  updated() { console.log('updated()') },
  beforeUnmount() { console.log('beforeUnmount()') },
  unmounted() { console.log('unmounted()') }
});

app.mount('#app');
setTimeout(() => {
  app.unmount('#app');
}, 3000)

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