<template>
    <h3 class="p-3 text-center">
        My Task List
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
            <tr v-for="(e, p) in myTask" :key="p">
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
  name: "TaskList",
  computed: {
    ...mapGetters(["myTask"]),
  },
  methods: {
      ...mapActions(["getMyTask"])
  },
  created() {
      this.getMyTask(this.$route.params.uid);
      //console.log(myTask);
      //this.myTaskList = res.data.filter(u => +u.user_id === +this.$route.params.uid);

  }
};
</script>
<style scoped>
.container {
    overflow-y: scroll;
    max-height: 400px;
}
</style>