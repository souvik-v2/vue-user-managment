import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import CreateTask from "./components/CreateTask.vue";
import TaskList from "./components/TaskList.vue";
import UserProfile from "./components/UserProfile.vue";

const store = createStore({
  state: {
    user: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  actions: {
    user(context, user) {
      context.commit("user", user);
    },
  },
  mutations: {
    user(state, user) {
      state.user = user;
    },
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "home" },
    { path: "/home", component: Home, name: "home" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/create-task", component: CreateTask, name: "create-task" },
    { path: "/task-list", component: TaskList, name: "task-list" },
    { path: "/user-profile", component: UserProfile, name: "user-profile" },
  ],
});

router.beforeEach((to, from, next) => {
  //console.log("To=>", to);
  //console.log("From=>", from);
  if (
    to.name === "create-task" ||
    to.name === "task-list" ||
    to.name === "user-profile"
  ) {
    if (
      from.name === "home" ||
      from.name === "create-task" ||
      from.name === "task-list" ||
      from.name === "user-profile"
    ) {
      next();
    } else {
      next("login");
    }
  } else {
    next();
  }
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
