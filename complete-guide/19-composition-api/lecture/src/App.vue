<template>
  <section class="container">
    <!-- <h2>{{ userName }}</h2>
    <input type="text" v-model="userName" />
    <h3>{{ age }}</h3> -->
    <h2>{{ user.name }}</h2>
    <input type="text" v-model="user.name" />
    <h3>{{ user.age }}</h3>
    <button @click="setAge">Change Age</button>
    <div>
      <input type="text" placeholder="First name" @input="setFirstName" />
      <input type="text" placeholder="Last name" @input="setLastName" />
    </div>
  </section>
</template>

<script>
import { ref, reactive, computed } from "vue";

export default {
  // Composition API
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    const user = reactive({
      name: "",
      age: 32,
    });

    function changeAge() {
      user.age += 1;
    }

    function setFirstName(event) {
      firstName.value = event.target.value;
    }

    function setLastName(event) {
      lastName.value = event.target.value;
    }

    const userName = computed(function () {
      return firstName.value + " " + lastName.value;
    });

    console.log(userName);

    user.name = userName;

    return {
      user: user,
      setAge: changeAge,
      setFirstName,
      setLastName,
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
