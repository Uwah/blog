<template>
    <!-- 底部导航使用弹性盒子 -->
    <footer class="bottom-fixed" id="bottomNav">

            <router-link to="/home">
                <Icon type="ios-home-outline"></Icon>
                <p>首页</p>
            </router-link>
            <router-link to="/found">
                <Icon type="ios-world-outline"></Icon>
                <p>发现</p>
            </router-link>
            <router-link to="/userCenter">
                <Icon type="ios-person-outline"></Icon>
                <p>我的</p>
            </router-link>

    </footer>


</template>
<script>

export default {
    name:'bottomNav',
    data() {
        return {
            msg:"bottomNav"
        }
    }
}
</script>

<style scoped>

    .bottom-fixed {
        display:flex;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: .96rem;
        border-top: 1px solid #e7e7e7;
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