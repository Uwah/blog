<template>
  <div id="app">
      <bloghead v-show="isShowHead"></bloghead>

      <router-view></router-view>
      <bottom-nav></bottom-nav>
  </div>
</template>

<script>
//App.vue入口文件引入需要用到的mapGetters/mapActions 用于监听或者说管理方法还有事件

import {mapGetters, mapActions} from 'vuex';
import bloghead from './components/Header.vue';
import bottomNav from './components/BottomNav.vue';


export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      pathname:''
    }
  },
  methods:{
      showhead(pathname) {
          if(pathname === "home" || pathname === "found") {
              this.$store.dispatch('isshead');
          } else {
              this.$store.dispatch('hidehead');
          }
      },
      bottomActive(pathname) {
        if(pathname === "home") {
              this.$store.dispatch('homestate');
          } else if(pathname === "found") {
              this.$store.dispatch("foundstate");
          } else if(pathname === "userCenter") {
              this.$store.dispatch("userstate");
          }
      }
  },
  mounted(){
      this.pathname = this.$route.name;
      this.showhead(this.pathname);
      this.bottomActive(this.pathname);
  },
  computed:mapGetters(['count', 'isShowHead']),
  components : {
      bottomNav,
      bloghead
  },
  watch:{
      $route(to, from) {
          this.pathname = to.name;
          this.showhead(this.pathname);
          this.bottomActive(this.pathname);
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
a {
  text-decoration: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
}

</style>
