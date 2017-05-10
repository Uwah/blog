<template>
    <div>
        <div class="saerchDiv">
            <Search
            @result-click="resultClick"
            @on-change="changeResult"
            :results="results"
            v-model="searchVal"
            position="absolute"
            auto-scroll-to-top
            top="46px"
            @on-focus="onFocus"
            @on-cancel="onCancel"
            @on-submit="onSubmit"
             ref="search"></Search>
        </div>

    </div>
</template>
<script>
import {Search} from 'vux';

export default {
    name:"found",
    data() {
        return {
            msg:"found page",
            // searchVal:"寻找更多好文章",
            searchVal:"",
            results:[]
        }
    },
    components:{
        Search
    },
    methods:{
        resultClick(item) { //选中搜索
            console.log(item.title);
        },
        changeResult(val) { //获取搜索关键字
            console.log(val);
            /*this.$http.get('').then(res => {

            }).catch(err => {

            });*/

            this.results = this.getResults(val);
        },
        onFocus(){
            console.log("on focus");
            // this.searchVal = ""
        },
        onCancel(){
            console.log("点击取消按钮");
        },
        onSubmit(){
            console.log("on submit");
        },
        getResults(keyword) { //暂时获取假数据
            let rsArr = [];
            for(let i = 0; i < 6; i++) {
                rsArr.push({
                    title:keyword + (i+1),
                    other:i //文章id
                });
            }
            return rsArr;
        }

    }
}
</script>
<style scoped>

    .saerchDiv {
        height: .75rem;
        font-size: .27rem;
    }

</style>