<template>
  <div id="app">


      <router-view></router-view>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
//App.vue入口文件引入需要用到的mapGetters/mapActions 用于监听或者说管理方法还有事件

import {mapGetters, mapActions} from 'vuex';
import bottomNav from './components/BottomNav.vue';


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:mapActions(['increment', 'decrement']),
  computed:mapGetters(['count']),
  components : {
      bottomNav
  },
  watch:{
      $route(to, from) {
          console.log(to);
      }
  }
}
</script>

<style>

@import './assets/css/normalize.css';

html,body,p,ul,li,table,strong {
  margin: 0;
  padding: 0;
}
ul>li {
  list-style: none;
}

</style>
