import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/login/Login';
import Signup from '../components/login/Signup';
import Forum from '../components/forum/Forum';
import Logout from '../components/login/Logout';
import Read from '../components/forum/Read';
import Create from '../components/forum/Create';
import CreateCategory from '../components/category/CreateCategory';

Vue.use(VueRouter);

const routes = [
    { path: '/login', component: Login, name: 'login' },
    { path: '/signup', component: Signup, name: 'signup' },
    { path: '/forum', component: Forum, name: 'forum' },
    { path: '/logout', component: Logout, name: 'logout' },
    { path: '/question/:slug', component: Read, name: 'read' },
    { path: '/ask', component: Create, name: 'create' },
    { path: '/category', component: CreateCategory, name: 'category' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history',
});

export default router
