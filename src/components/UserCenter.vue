<template>
    <div class="content">

        <div class="header">
            <h2><img src="../assets/img/head.png" alt=""/></h2>
            <div class="user-box">
                <router-link to="/user-login">登录</router-link>
                <router-link to="/user-reg">注册</router-link>
            </div>
            <ul class="clear">
                <li>
                    <span>0</span>
                    <p>关注</p>
                </li>
                <li>
                    <span>0</span>
                    <p class="end">粉丝</p>
                </li>
            </ul>
        </div>
        <div class="docList">
            <ul>
                <li>
                    <Row>
                        <Col span="22"><Icon type="document-text"></Icon><span class="coltext">我的博文</span></Col>
                        <Col span="2"><span class="coltext">0</span><Icon type="ios-arrow-forward"></Icon></Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col span="22"><Icon type="lock-combination"></Icon><span class="coltext">秘密博文</span></Col>
                        <Col span="2"><span class="coltext">0</span><Icon type="ios-arrow-forward"></Icon></Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col span="22"><Icon type="ios-box-outline"></Icon><span class="coltext">草稿箱</span></Col>
                        <Col span="2"><span class="coltext">0</span><Icon type="ios-arrow-forward"></Icon></Col>
                    </Row>
                </li>
                <li>
                    <Row>
                        <Col span="22"><Icon type="heart"></Icon><span class="coltext">收藏夹</span></Col>
                        <Col span="2"><span class="coltext">0</span><Icon type="ios-arrow-forward"></Icon></Col>
                    </Row>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>

</script>

<style scoped>
@import '../assets/css/mydoc.css';
</style>