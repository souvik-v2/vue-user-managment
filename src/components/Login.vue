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
        {{ signIn }}
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
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
      signIn: 'Sign In'
    };
  },
  computed: {
    authenticated() {
      return this.$store.state.user;
    }
  },
  methods: {
    ...mapActions(['getUser']),

    handleSubmit() {
      this.signIn = 'Sign in...';
      try {
        const userData = {
          email: this.email,
          password: this.password,
        };

        this.getUser(userData);
        
        setTimeout(() => {
          //console.log('set=>', this.$store.state.user);
          if( this.$store.state.user !== null ) {
            this.$router.push("/home");
          } else {
            this.error = "Invalid email/password";
            this.signIn = 'Sign In';
          }
        }, 3000);
        
      } catch (e) {
        this.error = "Invalid email/password";
      }
    },
  },
};
</script>
