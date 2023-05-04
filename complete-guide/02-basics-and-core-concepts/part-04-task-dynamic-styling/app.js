const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      isParagraphVisible: true,
      backgroundColor: ''
    }
  },
  computed: {
    paragraphClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
        visible: this.isParagraphVisible,
        hidden: !this.isParagraphVisible
      }
    },
    paragraphStyles() {
      return { backgroundColor: this.backgroundColor }
    }
  },
  methods: {
    toogleHandler() {
      this.isParagraphVisible = !this.isParagraphVisible;
    }
  },
})

app.mount('#assignment')