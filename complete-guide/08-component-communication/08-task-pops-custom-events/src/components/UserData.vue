<template>
  <form @submit.prevent="">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" />
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" name="age" id="age" />
    </div>
    <button>Add User</button>
  </form>
</template>

<script>
export default {};
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
</style>
