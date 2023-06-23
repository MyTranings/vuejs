<template>
  <section class="container">
    <h2>{{ userName }}</h2>
    <input type="text" v-model="userName" />
    <h3>{{ age }}</h3>
    <!-- <h2>{{ user.name }}</h2> -->
    <!-- <input type="text" v-model="user.name" /> -->
    <!-- <h3>{{ user.age }}</h3> -->
  </section>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  // Options API
  // data() {
  //   return {
  //     userName: "Maximilian",
  //   };
  // },

  // Composition API
  setup() {
    // Non-reactive variable
    // const uName = "Maximilian";

    // Reactive variable
    // const uName = ref("Maximilian");
    // const uAge = ref(32);

    // Object with ref
    // const user = ref({
    //   name: "Maximilian",
    //   age: 32,
    // });

    // console.log(user);

    // setTimeout(function () {
    // user.value.name = "Max";
    // user.value.age = 33;
    // }, 2000);

    // Object with Reactive
    const user = reactive({
      name: "Maximilian",
      age: 32,
    });

    console.log(user);

    setTimeout(function () {
      user.name = "Max";
      user.age = 33;
    }, 2000);

    const userRefs = toRefs(user);

    return {
      // userName: user.value.name,
      // age: user.value.age,
      // user: user,
      userName: userRefs.name,
      age: userRefs.age,
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
