<template>
  <div class="vue-tempalte">
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />
      <h3>Sign Up</h3>

      <div class="form-group">
        <label>First Name</label>
        <input
          type="text"
          v-model="first_name"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Last Name</label>
        <input
          type="text"
          v-model="last_name"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control form-control-lg"
          required
        />
      </div>

      <div class="form-group">
        <label>Confirm Password</label>
        <input
          type="password"
          v-model="password_confirm"
          class="form-control form-control-lg"
          required
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign Up
      </button>
    </form>
  </div>
</template>

<script>
//import axios from 'axios';
import Error from "./Error.vue";

export default {
  name: "Register",
  components: {
    Error,
  },
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
      user_arr: [],
      error: "",
    };
  },
  methods: {
    handleSubmit() {
      try {
        const data = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          password_confirm: this.password_confirm,
        };

        this.user_arr.push(data);

        const jason_data = JSON.stringify(this.user_arr);
        localStorage.setItem("user_arr", jason_data);

        //const response = await axios.post('http://localhost:3000/users.jason', data);
        //console.log(response);

        this.$router.push("/login");
      } catch (e) {
        this.error = "Some error occured!!";
      }
    },
  },
};
</script>
