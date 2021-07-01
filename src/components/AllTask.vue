<template>
    <h3 class="p-3 text-center">
        All Task List
    </h3>
    <div class="container">
        <table class="table table-striped table-bordered">
            <tr>
                <th scope="col">#</th>
                <th scope="col">UserID</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Description</th>
                <th scope="col">Task Date</th>
            </tr>
            <tr scope="row" v-for="(e, p) of task" :key="p">
                <th scope="col">{{++p}}</th>
                <td>{{e.user_id}}</td>
                <td>{{e.task_name}}</td>
                <td>{{e.task_description}}</td>
                <td>{{e.task_date}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AllTask",
  computed: {
    ...mapGetters(["task"]),
  },
  methods: {
      ...mapActions(["getTask"])
  },
  created() {
      this.getTask();
  }
};
</script>
<style scoped>
.container {
    overflow-y: scroll;
    max-height: 400px;
}
</style>