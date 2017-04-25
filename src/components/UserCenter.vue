<template>
    <div class="content">

        <div class="header">
            <h2><img src="../assets/img/head.png" alt=""/></h2>
            <div class="user-box">
                <!-- <router-link to="/user-login">登录</router-link>
                <router-link to="/user-reg">注册</router-link> -->
            </div>
            <ul class="clear">
                <li>
                    <span>50</span>
                    <p>关注</p>
                </li>
                <li>
                    <span>1024</span>
                    <p class="end">粉丝</p>
                </li>
            </ul>
        </div>
        <div class="docList">
            <group>
                <cell v-for="blog in cellList" :title="blog.title" is-link>
                    <i slot="icon" :class="[icon,iconfont,shouchangjia]"></i>
                    <!-- <img slot="icon" style="display:block;margin-right:5px;" width="20" src="../assets/img/head.png"> -->
                </cell>
            </group>

        </div>
    </div>

</template>
<script>
// import {Cell, Group} from 'vux/src/components';
import { Group } from 'vux';
import { Cell } from 'vux';
export default {
    name:"userCenter",
    data() {
        return {
            cellList:[
                {title:"我的博文"},
                {title:"私密博文"},
                {title:"草稿箱"},
                {title:"收藏夹"}

            ],
            icon:"icon",
            iconfont:"iconfont",
            shouchangjia:"shouchangjia"
        }
    },
    mounted(){
        console.log("初始化个人中心")
    },
    components:{
        Group,
        Cell
    }

}

</script>

<style scoped>
@import '../assets/css/bottomIcon/bottomIcon.css';
@import '../assets/css/mydoc.css';
@import '../assets/css/bottomIcon/iconfont.css';
.icon{
      font-size: .32rem;
      color:#333;
      display: inherit;
      -webkit-transition: font-size 0.25s ease-out 0s;
      -moz-transition: font-size 0.25s ease-out 0s;
      transition: font-size 0.25s ease-out 0s;

    }
</style>