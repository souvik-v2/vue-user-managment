<template>
  <div class="vue-tempalte">
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />
      <h3>Create task {{ $route.params.id }}</h3>

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
import { mapGetters } from "vuex";
import axios from 'axios';
import Error from "./Error.vue";


export default {
  name: "CreateTask",
  components: {
    Error,
  },
  computed: {
    ...mapGetters(["user"]),
  },
  data() {
    return {
      task_name: "",
      task_description: "",
      error: ""
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          user_id: +this.$route.params.uid,
          task_name: this.task_name,
          task_description: this.task_description,
        };

        //console.log('uid=>', this.$route.params.uid);
        await axios.post("http://localhost:3000/task", data);

        //console.log(response);
        //this.$store.dispatch("task", response.data);
        this.$router.push("/task-list/" + this.$route.params.uid);

      } catch (e) {
        this.error = "Some error occured!!";
      }
    },
  },
};
</script>
