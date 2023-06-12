<template>
  <div>
    <h2>Register as a Coach</h2>
    <form @submit.prevent="registerCoach">
      <div class="field-wrapper">
        <label for="firstname">First name *:</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          ref="firstName"
          required
          v-model="firstName"
        />
      </div>
      <div class="field-wrapper">
        <label for="lastname">Last name *:</label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          ref="lastName"
          required
          :v-model="lastName"
        />
      </div>
      <div class="field-wrapper">
        <label for="email">Email *:</label>
        <input
          type="email"
          id="email"
          name="email"
          ref="email"
          required
          :v-model="email"
        />
      </div>
      <div class="field-wrapper">
        <label for="description">Descriptions:</label>
        <textarea
          id="description"
          name="description"
          ref="description"
          :v-modle="description"
        ></textarea>
      </div>
      <div class="field-wrapper">
        <label for="rate">Rate *:</label>
        <input
          type="number"
          id="rate"
          name="rate"
          ref="rate"
          min="1"
          max="5"
          required
          :v-model="rate"
        />
        <p><small>Enter a decimal number between 1 - 5</small></p>
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      description: "",
      rate: null,
    };
  },
  methods: {
    registerCoach() {
      console.log(this.$store.getters["coaches/getCoaches"]);
      if (this.validateData()) {
        this.$store.dispatch("coaches/registerCoach", {
          coach: {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            description: this.description,
            rate: this.rate,
          },
        });
      }
    },
    validateData() {
      let isValid = true;
      // for (const key in this.$refs) {
      // console.log(this.$refs[key]);
      // }
      return isValid;
    },
  },
};
</script>

<style></style>
