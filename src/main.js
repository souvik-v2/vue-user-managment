import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { createStore } from "vuex";
import axios from "axios";

import App from "./App.vue";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import CreateTask from "./components/CreateTask.vue";
import TaskList from "./components/TaskList.vue";
import UserProfile from "./components/UserProfile.vue";
import AllTask from "./components/AllTask.vue";

const store = createStore({
  state: {
    user: null,
    task: null,
    myTask: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    task: (state) => {
      return state.task;
    },
    myTask: (state) => {
      return state.myTask;
    },
  },
  actions: {
    logout ({ commit }) {
      commit('userLogout', null);
    },
    async getUser({ commit }, loginData) {
      const response = await axios.get("http://localhost:3000/user");
      const activeUser = response.data.find(u => u.email === loginData.email && u.password === loginData.password);
      commit("setUser", activeUser);
    },
    async getTask({ commit }) {
      const response = await axios.get("http://localhost:3000/task");
      commit("setTask", response.data);
    },
    async getMyTask({ commit }, myId) {
      const response = await axios.get("http://localhost:3000/task/");
      const myTaskList = response.data.filter(u => +u.user_id === +myId);
      commit("setMyTask", myTaskList);
    },
    async createTask({ commit }, data) {
      const response = await axios.post("http://localhost:3000/task", data);
      commit("importTask", response.data);
    },
  },
  mutations: {
    userLogout : (state, user) => state.user = user,
    setUser : (state, user) => state.user = user,
    setTask: (state, task) => state.task = task,
    setMyTask: (state, myTask) => state.myTask = myTask,
    importTask: (state, val) => state.myTask.unshift(val)
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "start" },
    { path: "/home", component: Home, name: "home" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/create-task/:uid", component: CreateTask, name: "create-task" },
    { path: "/task-list/:uid", component: TaskList, name: "task-list" },
    { path: "/user-profile/:uid", component: UserProfile, name: "user-profile" },
    { path: "/all-task/:uid", component: AllTask, name: "all-task" },
  ],
});

router.beforeEach((to, from, next) => {
  //console.log("To=>", to);
  //console.log("From=>", from);
  /*const pages = ["create-task", "task-list", "all-task", "user-profile", "home"];
  var checkToPages = pages.indexOf(to.name);
  var checkFromPages = pages.indexOf(from.name);
  console.log(checkToPages, checkFromPages);

  if (checkToPages != -1) {
    if (checkFromPages != -1) {*/
  
  if (
    to.name === "create-task" ||
    to.name === "task-list" ||
    to.name === "all-task" ||
    to.name === "user-profile"
  ) {
    if (
      from.name === "home" ||
      from.name === "create-task" ||
      from.name === "task-list" ||
      from.name === "all-task" ||
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
