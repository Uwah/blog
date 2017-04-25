<template>
    <!-- 底部导航使用弹性盒子 -->
    <footer class="bottom-fixed" id="bottomNav">

            <router-link to="/home">
                <!-- <i class="icon iconfont">&#xe685;</i>  --><!-- 字体图标写法 -->
                <i :class="[icon,iconfont,homeActive?homePress:homeNormal]"></i>
                <p>首页</p>
            </router-link>
            <router-link to="/found">
                <!-- <i class="icon iconfont">&#xe687;</i> --><!-- 字体图标写法 -->
                <i :class="[icon,iconfont,foundActive?foundPress:foundNormal]"></i>
                <p>发现</p>
            </router-link>
            <router-link to="/userCenter">
                <!-- <i class="icon iconfont">&#xe602;</i> --><!-- 字体图标写法 -->
                <i :class="[icon,iconfont,mineActive?minePress:mineNormal]"></i>
                <p>我的</p>
            </router-link>

    </footer>


</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name:'bottomNav',
    data() {
        return {
            msg:"bottomNav",
            icon:"icon",
            iconfont:"iconfont",
            homePress:"icon-icshouyepress",
            homeNormal:"icon-icshouyenormal",
            foundPress:"icon-icfaxianpress",
            foundNormal:"icon-icfaxiannormal",
            minePress:"icon-iconwodedianji",
            mineNormal:"icon-icon_wode"
        }
    },
    computed:mapGetters(['mineActive', 'homeActive', 'foundActive'])
}
</script>

<style scoped>
    @import '../assets/css/bottomIcon/bottomIcon.css';
    @import '../assets/css/bottomIcon/iconfont.css';
    @media(-webkit-min-device-pixel-ratio:1.5),(min-device-pixel-ratio:1.5) {
        .bottom-fixed:before {
            content: " ";
            width: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-transform: scaleY(0.7);
            transform: scaleY(0.7);
            border-top: 1px solid #e7e7e7;
        }
    }
    @media(-webkit-min-device-pixel-ratio:2),(min-device-pixel-ratio:2) {
        .bottom-fixed:before {
            content: " ";
            width: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            border-top: 1px solid #e7e7e7;
        }
    }

    @media(-webkit-min-device-pixel-ratio:3),(min-device-pixel-ratio:3) {
        .bottom-fixed:before{
            content: " ";
            width: 100%;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            -webkit-transform:scaleY(0.33);
            transform: scaleY(0.33);
            border-top: 1px solid #e7e7e7;
        }
    }
    .bottom-fixed {
        display:flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: .96rem;
        /*border-top: 1px solid #e7e7e7;*/
    }
    .bottom-fixed a {
        flex: 1;
        display: block;
        text-decoration: none;
        text-align: center;
        height: .96rem;
        align-self: flex-start;
    }
    .bottom-fixed p {
        margin: 0;
        padding: 0;
        font-size: .24rem;
        color: #39f;

    }
    .icon{
      font-size: .512rem;
      color:#39f;
      display: inherit;
      -webkit-transition: font-size 0.25s ease-out 0s;
      -moz-transition: font-size 0.25s ease-out 0s;
      transition: font-size 0.25s ease-out 0s;

    }

</style>