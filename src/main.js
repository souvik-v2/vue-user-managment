import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { createStore } from 'vuex';

import App from './App.vue';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
//import '@/assets/css/main.css'


const store = createStore ({
    state: {
        user: null
    },
    getters: {
        user: (state) => {
            return state.user;
        }
    },
    actions: {
        user(context, user) {
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user) {
            state.user = user;
        }
    }
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
        { path: '/', component: Home },
        { path: '/home', component: Home },
        { path: '/login', component: Login },
        { path: '/register', component: Register }
    ]
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');
