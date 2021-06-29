<template>
    <h4> Profile Details</h4>
    <div class="container p-3 my-3 bg-dark text-white">
        <div class="row" v-for="(value, name) in user" :key="value.email">
            <div class="col-6 text-uppercase"> {{name}}:</div>
            <div class="col-6">{{value}}</div>
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style scoped>
.list-group-item {
    background-color: none;
}
</style>
