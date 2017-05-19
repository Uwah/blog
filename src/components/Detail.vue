<template>
<div>
    <header-top></header-top>
    <div class="contents">
        <div class="cont-head">
            <h3 class="cont-title">{{content.title}}</h3>
            <span class="cont-time">{{content.time}}</span>
        </div>

        <section class="cont-desc">
            <div class="cont-info">{{content.desc}}</div>
            <img :src="content.newsImg" class="cont-img">
            <div class="cont-info">{{content.desc}}</div>
        </section>
        <div class="cont-bottom">
            <span class="cont-pinglun icon iconfont icon-pinglun">评论({{content.pinglun}})</span>
            <span class="cont-zan icon iconfont icon-zan">赞({{content.zan}})</span>
            <span class="cont-read icon iconfont icon-yuedu">阅读({{content.read}})</span>
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

        //由于没有后台查库暂时把所有的查询出来再根据id来获取对应数据
        next(vm => { //通过next回调组件实例作为参数，这样就可以访问组件实例
            vm.$http.get("/src/assets/data/home.json?id="+ id)
                .then(res => {
                    let dataList = res.data.dataList;
                    if(dataList.length > 0) {
                        let i = 0, len = dataList.length;
                        for(; i < len; i++) {
                            if(dataList[i]['id'] === id) {
                                vm.content = dataList[i];
                            }
                        }
                    }

                })
                .catch(err => {

                });
        });
    }
}

</script>
<style>
.contents {
    margin-top: .68rem;
    font-size: .35rem;
    padding: 0 .25rem .96rem .25rem;
}
.cont-head {
    padding: .45rem 0 0 0;
}
.cont-desc {
    margin-top: .1rem;
}
.cont-title {
    font-size: .45rem;
}
.cont-time {
    color: #888;
    font-size: .25rem;
    margin: 0 0 .12rem 0;
}
.cont-img {
    max-width: 100%; /*动态图片*/
    display: block; /*width默认就是最宽*/
    margin: auto; /*居中*/
}
.cont-info {
    font-size: .27rem;
    color: #333;
}
.cont-bottom {
    font-size: .28rem;
    text-align: right;
    margin-top: .2rem;
}
.cont-pinglun,.cont-zan,.cont-read {
    font-size: .25rem;
    color: #898989;
    display: initial;
}
* {
    margin: 0;
    padding: 0;
}
</style>