<template>
  <div class="user">
    <h2>{{ name }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>

<style>
.user {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
.user h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
.user h3 {
  font-size: 1.8rem;
  color: #58004d;
  margin: 0 0 0.5rem 0;
}
</style>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>
