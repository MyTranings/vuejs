const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      users: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '012345678991',
          email: 'manuel@localhost.com'
        },
        {

          id: 'julie',
          name: 'Julie Jones',
          phone: '012345678991',
          email: 'julie@localhost.com'
        }
      ]
    }
  },
  methods: {
    toogleDetials(index) {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
})

app.mount('#app');