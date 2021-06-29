<template>
  <div class="vue-tempalte">
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />
      <h3>Create task</h3>

      <div class="form-group">
        <label>Task Name</label>
        <input
          type="text"
          v-model="task_name"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Task Description</label>
        <textarea class="form-control" v-model="task_description" rows="3" required></textarea>
      </div>


      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Save Task
      </button>
    </form>
  </div>
</template>

<script>
//import axios from 'axios';
import Error from "./Error.vue";


export default {
  name: "CreateTask",
  components: {
    Error,
  },
  data() {
    return {
      task_name: "",
      task_description: "",
      task_arr: [],
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      try {
        const data = {
          task_name: this.task_name,
          task_description: this.task_description,
        };

        this.task_arr.push(data);

        const jason_data = JSON.stringify(this.task_arr);
        
        localStorage.setItem("task_arr", jason_data);
        
        if (localStorage.getItem("task_arr") !== null) {
          const result = JSON.parse(localStorage.getItem("task_arr"));
          this.$store.dispatch("task", result);
          this.$router.push("/task-list");
        } else {
          console.log("Task create failed...!");
        }
      } catch (e) {
        this.error = "Some error occured!!";
      }
    },
  },
};
</script>
