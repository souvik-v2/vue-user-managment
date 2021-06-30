<template>
    <h4> Task Details List</h4>
    <div class="container p-3 my-3 bg-dark text-white">
        <table class="table">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Task Name</th>
                <th scope="col">Task Description</th>
            </tr>
            <tr v-for="(i, k) in task" :key="k">
                <th scope="row">{{k+1}}</th>
                <td v-for="value in i" :key="value.task">
                        {{value}}
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "TaskList",
  computed: {
    ...mapGetters(["task"]),
  },
};
</script>