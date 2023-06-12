<template>
  <div>
    <h2>Request a coach</h2>
    <form @submit.prevent="addRequest">
      <div class="field-wrapper">
        <label for="coach">Coach *:</label>
        <select name="coach" id="coach" required v-model="selectedCoach">
          <option>Select a coach</option>
          <option v-for="coach in coaches" :key="coach.id" :value="coach.id">
            {{ coach.firstName }} {{ coach.lastName }}
          </option>
        </select>
      </div>
      <div class="field-wrapper">
        <label for="message">Message *:</label>
        <textarea
          name="message"
          id="message"
          required
          v-model="message"
        ></textarea>
      </div>
      <div class="field-wrapper">
        <label for="email">Email *:</label>
        <input type="email" name="email" id="email" required v-model="email" />
      </div>
      <button type="submit">Send Request</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["currentCoach"],
  data() {
    return {
      message: "",
      email: "",
    };
  },
  computed: {
    selectedCoach() {
      return this.currentCoach;
    },
    coaches() {
      return this.$store.getters["coaches/getCoaches"];
    },
  },
  methods: {
    addRequest() {
      const newRequest = {
        id: Date.now(),
        coachId: this.coachId,
        message: this.message,
        email: this.email,
      };
      this.$store.dispatch("requests/addRequest", { request: newRequest });
    },
  },
};
</script>

<style></style>
