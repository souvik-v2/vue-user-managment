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
        <label>Gender</label>
        <select v-model="gender" class="form-control form-control-lg" required>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
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
import axios from 'axios';
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
      gender: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          gender: this.gender,
        };

        const response = await axios.post('http://localhost:3000/user', data);
        this.$store.dispatch("user", response.data);
        this.$router.push("/login");
        
      } catch (e) {
        this.error = "Some error occured!!";
      }
    },
  },
};
</script>
