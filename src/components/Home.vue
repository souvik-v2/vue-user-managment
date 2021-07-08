<template>
  <div class="container-fluid">
    <div class="row" v-if="user">
      <h2>Hi, {{ user.first_name }} {{ user.last_name }}</h2>
    </div>
    <div class="row" v-if="!user">
      <h2>{{jokes}}</h2>
      <p><button type="button" class="btn btn-primary" @click="addJoke">New Joke</button></p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  methods: {
    ...mapActions({addJoke: "setCurrentJoke"}),
    /*...mapActions(["setCurrentJoke"]),
    addJoke() {
      this.setCurrentJoke();
    }*/
  },
  computed: {
    ...mapGetters({user: "user", jokes: "getCurrentJoke"}),
  },
};
</script>
<style scoped>
h2 {
  width: 100%;
}
</style>
