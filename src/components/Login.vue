<template>
  <div class="vue-tempalte">
    <form @submit.prevent="handleSubmit">
      <error v-if="error" :error="error" />
      <h3>Sign In</h3>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control form-control-lg"
        />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          class="form-control form-control-lg"
        />
      </div>

      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import Error from "./Error.vue";

export default {
  name: "Login",
  components: {
    Error,
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };

        const response = await axios.get(
          "http://localhost:3000/users.jason",
          data
        );
        //console.log(response);

        var arrR = response.data.filter(function(ele) {
          return ele.email == data.email && ele.password == data.password;
        });

        if (arrR.length) {
          //console.log('arrR=>', arrR)
          const jason_data = JSON.stringify(arrR);
          localStorage.setItem("user_arr", jason_data);
        } else {
          var localUser = JSON.parse(localStorage.getItem("user_arr"));
          var arrRlocal = localUser.filter(function(el) {
            return el.email == data.email && el.password == data.password;
          });

          if (arrRlocal.length) {
            const jason_data = JSON.stringify(arrRlocal);
            localStorage.setItem("user_arr", jason_data);
          }
        }

        if (localStorage.getItem("user_arr") !== null) {
          const result = JSON.parse(localStorage.getItem("user_arr"));
          this.$store.dispatch("user", result[0]);
          this.$router.push("/home");
        } else {
          console.log("Auth failed...!");
        }
      } catch (e) {
        this.error = "Invalid email/password";
      }
    },
  },
};
</script>
