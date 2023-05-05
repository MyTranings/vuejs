const app = Vue.createApp({
  data() {
    return {
      newTask: '',
      tasks: [],
      isListHidden: false
    }
  },
  watch: {
    isListHidden() {
      return !this.isListVisible;
    }
  },
  computed: {
    isListVisible() {
      return this.tasks.length > 0;
    },
    buttonLabel() {
      return this.isListHidden ? 'Show List' : 'Hide List';
    }
  },
  methods: {
    addTask() {
      this.tasks.push(this.newTask)
    },
    toggleList() {
      this.isListHidden = !this.isListHidden;
    }
  },
})

app.mount('#assignment');