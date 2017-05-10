<template>

<header class="comTop">
    <div class="back">
        <a href="javascript:history.go(-1);" class="back-a">返回</a>
        <div class="backArrow">

        </div>
    </div>
</header>


</template>

<script>

</script>

<style scoped>
    * {
        margin: 0;
        padding: 0;
    }
    .comTop {
        /*font-size: .27rem;*/
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: .68rem;
        z-index: 99;
        padding: 3px 0;
        box-sizing: border-box;
        background-color: #39f;
    }
    .back {
        position: absolute;
        left: 18px;
        top: 10px;
        font-size: 14px;
        line-height: 21px;
        color: #39f;

    }
    .back-a {
        text-decoration: none;
        color: #fff;
        font-size: .27rem;
        padding-left: .35rem;

    }
    .backArrow {
        position: absolute;
        width: .512rem;
        height: .512rem;
        top: -4px;
        left: -5px;
    }
    .backArrow:before {
        content: "";
        position: absolute;
        width: 12px;
        height: 12px;
        border: 1px solid #fff;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
    }
</style>