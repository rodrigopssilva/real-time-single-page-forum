import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login';
import Signup from '../components/login/Signup';
import Forum from '../components/forum/Forum';
import Logout from '../components/login/Logout';

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/logout', component: Logout, name: 'logout' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router
