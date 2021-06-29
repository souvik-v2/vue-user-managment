<template>
  <!-- Navigation -->
  <nav
    class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
  >
    <div class="container">
      <router-link class="navbar-brand float-left" to="/home">
        Home
      </router-link>
      <ul class="nav navbar-nav flex-row float-right" v-if="!user">
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="btn btn-outline-primary" to="/register"
            >Sign up</router-link
          >
        </li>
      </ul>

      <ul class="nav navbar-nav flex-row float-right" v-if="user">
        <li class="nav-item  float-left">
          <router-link class="nav-link pr-3" to="/task-list">Task List </router-link>
        </li>
        <li class="nav-item  float-left">
          <router-link class="nav-link pr-3" to="/create-task">Create Task </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link pr-3" to="user-profile"
            >{{ user.first_name }} {{ user.last_name }}
          </router-link>
        </li>
        <li class="nav-item">
          <a
            class="nav-link pr-3"
            href="javascript:void(0)"
            @click="handleClick"
            >Logout</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "Nav",
  //props: ['user'],
  methods: {
    handleClick() {
      localStorage.removeItem("user_arr");
      this.$store.dispatch("user", null);
      this.$router.push("/");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },
};
</script>
<style></style>
