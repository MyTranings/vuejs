<template>
  <h2>My Course Goal</h2>
  <!-- Task 1: Output your main course goal with help of the composition API -->
  <!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
  <!-- <h3 v-show="isGoalVisible">{{ myGoal }}</h3> -->
  <h3 v-show="myGoal.isGoalVisible">{{ myGoal.name }}</h3>
  <!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
  <button @click="toggleGoal">Toggle Goal</button>
  <h3 v-show="optionMyGoal.isGoalVisible">{{ optionMyGoal.name }}</h3>
  <button @click="optionToggleGoal">Toggle Goal</button>
  <!-- Task 3: Manage data in three ways -->
  <!-- => Separate refs -->
  <!-- => Ref Object -->
  <!-- => Reactive Object -->
  <!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
// => Separate refs
// => Ref Object
// import { ref } from "vue";

// => Reactive Object -->
import { reactive } from "vue";

export default {
  // Options API
  data() {
    return {
      optionMyGoal: {
        name: "My Goals is understand Vue",
        isGoalVisible: true,
      },
    };
  },
  methods: {
    optionToggleGoal() {
      this.optionMyGoal.isGoalVisible = !this.optionMyGoal.isGoalVisible;
    },
  },
  // Composition API
  setup() {
    // => Separate refs
    // const myGoal = ref("My Goals is understand Vue");
    // const isGoalVisible = ref(true);
    // function toggleGoal() {
    //   isGoalVisible.value = !isGoalVisible.value;
    // }
    // return {
    //   myGoal,
    //   isGoalVisible,
    //   toggleGoal,
    // };

    // => Ref Object
    // const myGoal = ref({
    //   name: "My Goals is understand Vue",
    //   isGoalVisible: true,
    // });
    // // const isGoalVisible = ref(true);
    // function toggleGoal() {
    //   myGoal.value.isGoalVisible = !myGoal.value.isGoalVisible;
    // }
    // return {
    //   myGoal,
    //   toggleGoal,
    // };

    // => Reactive Object
    const myGoal = reactive({
      name: "My Goals is understand Vue",
      isGoalVisible: true,
    });
    function toggleGoal() {
      myGoal.isGoalVisible = !myGoal.isGoalVisible;
    }
    return {
      myGoal,
      toggleGoal,
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 3rem;
  text-align: center;
}
</style>
