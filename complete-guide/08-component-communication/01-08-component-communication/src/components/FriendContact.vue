<template>
  <li>
    <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toogleDetials">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="deleteFriend">Delete Friend</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false, // or a function
      // validator: function (value) {
      //   return value === "1" || value === "0";
      // },
    },
  },
  emits: {
    toogleFavorite: ["toogle-favorite"],
    // toogleFavorite: {
    //   "toogle-favorite": function (id) {
    //     if (id) {
    //       return true;
    //     } else {
    //       console.warn("Id is missing");
    //       return false;
    //     }
    //   },
    // },
  },
  data() {
    return {
      detailsAreVisible: false,
    };
  },
  methods: {
    toogleDetials() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      this.$emit("toggle-favorite", this.id);
    },
    deleteFriend() {
      this.$emit("delete-friend", this.id);
    },
  },
};
</script>
