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
import { useRoute } from 'vue-router';
import { mapGetters, mapActions } from "vuex";
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
      error: "",
      u_id: ''
    };
  },
  mounted() {
      const route = useRoute();
      this.u_id = route.params.uid;
  },
  methods: {
    ...mapActions(['createTask']),
    handleSubmit() {
      try {
        const data = {
          //user_id: +this.$route.params.uid,
          user_id: +this.u_id,
          task_name: this.task_name,
          task_description: this.task_description,
          task_date: new Date().toLocaleString()
        };

        this.createTask(data);
        this.$router.push("/task-list/" + this.$route.params.uid);

      } catch (e) {
        this.error = "Some error occured!!";
      }
    },
  },
};
</script>
