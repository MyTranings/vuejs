const app = Vue.createApp({
  data() {
    return {
      friends: [
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
  }
})

app.component('friend-contact', {
  template: `
    <li>
      <h2>{{friend.name}}</h2>
      <button @click="toogleDetials">
        {{ detailsAreVisible ? 'Hide': 'Show'}} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
    </li>
  `,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '012345678991',
        email: 'manuel@localhost.com'
      }
    }
  },
  methods: {
    toogleDetials() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');