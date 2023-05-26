<template>
  <form @submit.prevent="addResource">
    <TheField type="text" label="Title" name="title" v-model="title"></TheField>
    <TheField
      type="textarea"
      label="Description"
      name="description"
      v-model="description"
    ></TheField>
    <TheField type="text" label="Link" name="link" v-model="link"></TheField>
    <TheButton>Add Resource</TheButton>
  </form>
</template>

<script>
import TheField from "./TheField.vue";
import TheButton from "./TheButton.vue";

export default {
  components: { TheField, TheButton },
  data() {
    return {
      title: "",
      description: "",
      link: "",
    };
  },
  methods: {
    addResource() {
      if (this.title === "" || this.description === "" || this.link === "") {
        return false;
      }
      const newResource = {
        id: this.title.replace(" ", "-").toLowerCase(),
        title: this.title,
        description: this.description,
        link: this.link,
      };
      this.$emit("add-new-resource", newResource);
      this.title = "";
      this.description = "";
      this.link = "";
    },
  },
};
</script>
