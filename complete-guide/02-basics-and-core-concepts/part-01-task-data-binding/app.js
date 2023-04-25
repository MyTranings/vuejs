const app = Vue.createApp({
  data() {
    return {
      firstName: 'Daniel',
      age: 37,
      favoriteNumber: Math.random(),
      image: this.getImage()
    }
  },
  methods: {
    getAgeAfter(num) {
      return this.age + num;
    },
    getFavoriteNumber() {
      return Math.random()
    },
    getImage() {
      return 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=150&t=st=1682415752~exp=1682416352~hmac=741713a5f7f6019098d5a2321ad74e95b9b1a745a6405f1e188b1c932d9e9995';
    }
  },
})

app.mount('#assignment')