<template>
<div>
    <header-top></header-top>
    <div class="contents">
        {{msg}}
    </div>
</div>
</template>
<script>
import headerTop from './commonTop.vue';
export default {
    name:"detail",
    data(){
        return {
            msg:"文章内容"
        }
    },
    components:{
        headerTop
    }
}

</script>
<style>
.contents {
    margin-top: .68rem;
    font-size: .27rem;
}
</style>