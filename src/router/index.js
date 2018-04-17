import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
const routes = [
    {path:'/', component: resolve => require(['../components/Home.vue'], resolve), redirect:"/home"},
    {path:'/home', component: resolve => require(['../components/Home.vue'], resolve), name:"home"},
    {path:'/detail/:id', component: resolve => require(['../components/Detail.vue'], resolve), name:"detail"},
    {path:'/found', component: resolve => require(['../components/Found.vue'], resolve), name:"found"},
    {path:'/userCenter', component: resolve => require(['../components/UserCenter.vue'], resolve), name:"userCenter"},
    {path:'/user-login', component: resolve => require(['../components/Login.vue'], resolve), name: 'login'},
    {path:'/user-reg', component: resolve => require(['../components/Register.vue'], resolve), name: 'register'},

];

export default new VueRouter({
    routes,
    mode:'history'
});