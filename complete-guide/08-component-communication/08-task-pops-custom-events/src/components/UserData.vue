<template>
  <form @submit.prevent="sumbitedData">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" v-model="enteredName" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" v-model="enteredAge" />
    </div>
    <button>Add User</button>
    <p v-if="!isValid" class="error-message">Fields are required</p>
  </form>
</template>

<script>
export default {
  emits: ["update-user-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
      isValid: true,
    };
  },
  methods: {
    sumbitedData() {
      if (this.enteredName.length <= 0 || !this.enteredAge) {
        console.error("Fields are required");
        this.isValid = false;
        return false;
      }

      this.isValid = true;
      const newUserData = {};

      if (this.enteredName.length > 0) {
        newUserData.newName = this.enteredName;
      }
      if (this.enteredAge) {
        newUserData.newAge = this.enteredAge;
      }
      this.$emit("update-user-data", newUserData);
    },
  },
};
</script>

<style>
form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
label {
  font-weight: bold;
  margin-right: 1rem;
  display: inline-block;
}
form div {
  margin: 1rem 0;
}
.error-message {
  color: red;
}
</style>
