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
                <cell :title="cellList[0].title" is-link :link="{path:'detail/mineBlog'}">
                    <i slot="icon" :class="[icon,iconfont,wenzhang, uct]"></i>
                    <badge :text="cellList[0].count"></badge>
                </cell>
                <cell :title="cellList[1].title" is-link :link="{path:'detail/secretBlog'}">
                    <i slot="icon" :class="[icon,iconfont,secret, uct]"></i>
                    <badge :text="cellList[1].count"></badge>
                </cell>
                <cell :title="cellList[2].title" is-link :link="{path:'detail/cgblog'}">
                    <i slot="icon" :class="[icon,iconfont,caogaoxiang, uct]"></i>
                    <badge :text="cellList[2].count"></badge>
                </cell>
                <cell :title="cellList[3].title" is-link :link="{path:'detail/scjblog'}">
                    <i slot="icon" :class="[icon,iconfont,shouchangjia, uct]"></i>
                    <badge :text="cellList[3].count"></badge>
                </cell>
            </group>

        </div>
    </div>

</template>
<script>
import {Group,Cell,Badge } from 'vux';
export default {
    name:"userCenter",
    data() {
        return {
            cellList:[
                {title:"我的博文", count: 20, urlType:"mineBlog"},
                {title:"私密博文", count: 3, urlType:"secretBlog"},
                {title:"草稿箱", count: 12, urlType:"cgblog"},
                {title:"收藏夹", count: 9, urlType:"scjblog"}

            ],
            icon:"icon",
            iconfont:"iconfont",
            shouchangjia:"icon-shoucangjia",
            caogaoxiang:"icon-iconziti43",
            wenzhang:"icon-iconfontfilesfill",
            secret:"icon-suo",
            uct:"uct"
        }
    },
    mounted(){
        console.log("初始化个人中心")
    },
    components:{
        Group,
        Cell,
        Badge
    }

}

</script>

<style scoped>
@import '../assets/css/mydoc.css';

.icon{
      font-size: .32rem;
      color:#333;

      display: inherit;
      -webkit-transition: font-size 0.25s ease-out 0s;
      -moz-transition: font-size 0.25s ease-out 0s;
      transition: font-size 0.25s ease-out 0s;

    }
.uct {
    margin-right: .1rem;
}
</style>