import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";
import CreateTask from "./components/CreateTask.vue";
import TaskList from "./components/TaskList.vue";
import UserProfile from "./components/UserProfile.vue";
import AllTask from "./components/AllTask.vue";
import PageNotFound from "./components/PageNotFound.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home, name: "start" },
    { path: "/home", component: Home, name: "home" },
    { path: "/login", component: Login, name: "login" },
    { path: "/register", component: Register, name: "register" },
    { path: "/create-task/:uid", component: CreateTask, name: "create-task" },
    { path: "/task-list/:uid", component: TaskList, name: "task-list" },
    {
      path: "/user-profile/:uid",
      component: UserProfile,
      name: "user-profile",
    },
    { path: "/all-task/:uid", component: AllTask, name: "all-task" },
    {
      path: "/:pathMatch(.*)*",
      component: PageNotFound,
      name: "Page-Not-Found",
    },
  ],
});

router.beforeEach((to, from, next) => {
  const toPages = ["create-task", "task-list", "all-task", "user-profile"];
  const fromPages = [
    "create-task",
    "task-list",
    "all-task",
    "user-profile",
    "home",
  ];
  var checkToPages = toPages.indexOf(to.name);
  var checkFromPages = fromPages.indexOf(from.name);

  if (checkToPages !== -1) {
    if (checkFromPages !== -1) next();
    else next("login");
  } else {
    next();
  }
});

export default router;
