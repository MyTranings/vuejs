<template>
  <section>
    <form @submit.prevent="submitData">
      <div>
        <input type="text" name="name" placeholder="Name" v-model="name" />
      </div>
      <div>
        <input type="tel" name="phone" placeholder="Phone" v-model="phone" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" v-model="email" />
      </div>
      <label>
        Is favorite?
        <input
          type="checkbox"
          name="is-favorite"
          id="is-favorite"
          v-model="isFavorite"
        />
      </label>
      <div>
        <button>Add Friend</button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      isFavorite: false,
    };
  },
  emits: ["add-new-friend"],
  methods: {
    submitData() {
      // Validate Data

      const newFriend = {
        id: new Date().toISOString(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      };

      this.$emit("add-new-friend", newFriend);

      this.name = "";
      this.phone = "";
      this.email = "";
    },
  },
};
</script>
