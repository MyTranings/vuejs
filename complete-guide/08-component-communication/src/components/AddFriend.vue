<template>
  <section>
    <form @submit="addANewFriend">
      <div>
        <input type="text" name="name" placeholder="Name" v-model="name" />
      </div>
      <div>
        <input type="text" name="phone" placeholder="Phone" v-model="phone" />
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
        <button type="submit">Add Friend</button>
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
    addANewFriend(event) {
      event.preventDefault();
      const newFriend = {
        id: this.name.toLowerCase(),
        name: this.name,
        phone: this.phone,
        email: this.email,
        isFavorite: this.isFavorite,
      };
      console.log(this.isFavorite);
      // vaidate
      this.$emit("add-new-friend", newFriend);
    },
  },
};
</script>
