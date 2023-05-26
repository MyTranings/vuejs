<template>
  <form @submit.prevent="addResource">
    <TheField
      type="text"
      label="Title"
      name="title"
      v-model="newResource.title"
    ></TheField>
    <TheField
      type="textarea"
      label="Description"
      name="description"
      v-model="newResource.description"
    ></TheField>
    <TheField
      type="text"
      label="Link"
      name="link"
      v-model="newResource.link"
    ></TheField>
    <TheButton>Add Resource</TheButton>
    <teleport to="body">
      <TheDialog v-if="!isValid" @modal:close="closeModal">
        <p>Unfortunately, at least one input is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each
        </p>
      </TheDialog>
    </teleport>
  </form>
</template>

<script>
import TheField from "./base/TheField.vue";
import TheButton from "./base/TheButton.vue";
import TheDialog from "./ui-elements/TheDialog.vue";

export default {
  components: { TheField, TheButton, TheDialog },
  data() {
    return {
      isValid: true,
      newResource: {
        title: "",
        description: "",
        link: "",
      },
    };
  },
  methods: {
    addResource() {
      if (
        this.newResource.title === "" ||
        this.newResource.description === "" ||
        this.newResource.link === ""
      ) {
        this.isValid = false;
      } else {
        const newResource = {
          id: this.newResource.title.replace(" ", "-").toLowerCase(),
          title: this.newResource.title,
          description: this.newResource.description,
          link: this.newResource.link,
        };
        this.$emit("item:add", newResource);
        this.newResource.title = "";
        this.newResource.description = "";
        this.newResource.link = "";
      }
    },
    closeModal() {
      this.isValid = true;
    },
  },
};
</script>
