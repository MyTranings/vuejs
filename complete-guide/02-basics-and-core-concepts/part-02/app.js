const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  }
});

app.mount('#events');
$(document).on('change', 'select', function () {
  // Your code here
});