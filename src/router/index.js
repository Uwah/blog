import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Detail from '../components/Detail.vue';
import Found from '../components/Found.vue';
import UserCenter from '../components/UserCenter.vue';
import BottomNav from '../components/BottomNav.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';



Vue.use(VueRouter);
const routes = [
    {path:'/', component:Home, redirect:"/home"},
    {path:'/home', component:Home},
    {path:'/detail', component:Detail},
    {path:'/found', component:Found},
    {path:'/userCenter', component:UserCenter},
    {path:'/user-login', component:Login},
    {path:'/user-reg', component:Register},

];

export default new VueRouter({
    routes,
    mode:'history'
});