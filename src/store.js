import { createStore } from "vuex";
import axios from "axios";

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

  export default store;