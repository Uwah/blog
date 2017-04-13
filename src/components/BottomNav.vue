<template>
    <!-- 底部导航使用弹性盒子 -->
    <footer class="bottom-fixed" id="bottomNav">

            <router-link to="/home">
                <Icon type="ios-home" v-if="homeActive"></Icon>
                <Icon type="ios-home-outline" v-else></Icon>
                <p>首页</p>
            </router-link>
            <router-link to="/found">
                <Icon type="ios-world" v-if="foundActive"></Icon>
                <Icon type="ios-world-outline" v-else></Icon>
                <p>发现</p>
            </router-link>
            <router-link to="/userCenter">
                <Icon type="ios-person" v-if="mineActive"></Icon>
                <Icon type="ios-person-outline" v-else></Icon>
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
            msg:"bottomNav"
        }
    },
    computed:mapGetters(['mineActive', 'homeActive', 'foundActive'])
}
</script>

<style scoped>

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
        padding-top: .02rem;
    }
    .bottom-fixed p {
        margin: 0;
        padding: 0;
        font-size: 14px;

    }
    .ivu-icon {
        font-size: .56rem;
    }


</style>