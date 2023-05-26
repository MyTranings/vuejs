<template>
  <teleport to="body">
    <base-dialog
      v-if="isInvalid"
      title="Invalid input"
      @dialog:close="closeDialog"
    >
      <template #default>
        <p>Unfortunately, at least one input value is invalid.</p>
        <p>
          Please check all inputs and make sure you enter at least a few
          characters into each
        </p>
      </template>
      <template #actions>
        <base-button @click="closeDialog">Okay</base-button>
      </template>
    </base-dialog>
  </teleport>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="title">Description</label>
        <textarea
          name="description"
          id="description"
          ref="descInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseDialog from "../UI/BaseDialog.vue";
export default {
  components: { BaseDialog },
  inject: ["addResource"],
  data() {
    return {
      isInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === "" ||
        enteredDesc.trim() === "" ||
        enteredUrl.trim() === ""
      ) {
        this.isInvalid = true;
        return;
      }
      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    closeDialog() {
      this.isInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
