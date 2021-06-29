<template>
  <div>
    <h2 v-if="user">Hi, {{ user.first_name }} {{ user.last_name }}</h2>
    <h2 v-if="!user">You are not logged in!!</h2>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  //props: ['user']
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
