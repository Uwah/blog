import Vue from 'vue';
import App from './App.vue';


import store from './store/';  //默认导入的就是index.js
import router from './router/';
// import {Swiper,} from 'vux';



new Vue({
    store,//将store对象导入到Vue实例中
    router,
    el: '#app',
    render: h => h(App)
})
