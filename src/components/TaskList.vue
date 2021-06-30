<template>
    <h4>
        All Users Task List
        <a href="javascript:void(0)" @click="handleTask" class="float-right">My Task List</a>
    </h4>
    <div class="container p-3 my-3 bg-dark text-white">
        <table class="table" v-if="!myTaskList">
            <tr>
                <th scope="col">#</th>
                <th scope="col">UserID</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Description</th>
            </tr>
            <tr scope="row" v-for="(v, k, i) of task" :key="i">
                <th scope="col">{{v.id}}</th>
                <td>{{v.user_id}}</td>
                <td>{{v.task_name}}</td>
                <td>{{v.task_description}}</td>
            </tr>
        </table>
        <table class="table" v-if="myTaskList">
            <tr>
                <th scope="col">#</th>
                <th scope="col">UserID</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Description</th>
            </tr>
            <tr scope="row" v-for="(e, p, f) of myTaskList" :key="f">
                <th scope="col">{{e.id}}</th>
                <td>{{e.user_id}}</td>
                <td>{{e.task_name}}</td>
                <td>{{e.task_description}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  name: "TaskList",
  data() {
      return {
          myTaskList: "",
          error: ""
      }
  },
  methods: {
      ...mapActions(['getTask']),

      async handleTask() {
          try {
            const res = await axios.get("http://localhost:3000/task", {user_id: this.$route.params.uid});
            const tList = res.data.filter(u => +u.user_id === +this.$route.params.uid);
            this.myTaskList = tList;
          } catch (e) {
              this.error = "Some error happend!!"
          }
      }
  },
  computed: {
    ...mapGetters(["task"]),
  },
  created() {
      this.getTask();
  }
};
</script>