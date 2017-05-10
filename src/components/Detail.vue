<template>
<div>
    <header-top></header-top>
    <div class="contents">
        <h3>{{content.title}}</h3>
        <div class="cont-time">{{content.time}}</div>
        <section class="cont-desc">
            {{content.desc}}
        </section>
        <div class="cont-bottom">
            <div class="cont-pinglun">{{content.pinglun}}</div>
            <div class="cont-zan">{{content.zan}}</div>
            <div class="cont-read">{{content.read}}</div>
        </div>
    </div>
</div>
</template>
<script>
import headerTop from './commonTop.vue';
export default {
    name:"detail",
    data(){
        return {
            content:{}
        }
    },
    components:{
        headerTop
    },
    beforeRouteEnter(to, from, next) {
        let id = to.params.id;
        next();
    }
}

</script>
<style>
.contents {
    margin-top: .68rem;
    font-size: .27rem;
}
* {
    margin: 0;
    padding: 0;
}
</style>