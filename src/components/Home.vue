<template>
    <div>
        <Carousel autoplay :arrow="setting.arrow" :trigger="setting.trigger">
	        <Carousel-item>
	            <div class="demo-carousel">1</div>
	        </Carousel-item>
	        <Carousel-item>
	            <div class="demo-carousel">2</div>
	        </Carousel-item>
	        <Carousel-item>
	            <div class="demo-carousel">3</div>
	        </Carousel-item>
	        <Carousel-item>
	            <div class="demo-carousel">4</div>
	        </Carousel-item>
    	</Carousel>
    	<div class="contentList">
    		<div class="cont-items">
    			<router-link to="">
    				<Row class="items-row">
                        <Col span="8">
                        	<img src="../assets/img/news.png" width="100%" height="100%" alt="">
                        </Col>
                        <Col span="16">
                        	<h5 class="item-title">xxxxx</h5>
    						<div class="item-detail">details</div>
                        	<Row class="item-buttom">
                        		<Col span="20">发布时间</Col>
                        		<Col span="2">评论(x)</Col>
                        		<Col span="2">阅读(x)</Col>
                        	</Row>
                        </Col>
                    </Row>
    			</router-link>
    		</div>

    	</div>

    </div>
</template>
<script>
	export default {
		name:"homes",
		data(){
			return {
				setting:{
					arrow:"naver",
					trigger:"hover"
				}
			}
		}
	}
</script>
<style>
	.ivu-carousel {
		width: 100%;
		height: 3rem;
	}
	.cont-items div.items-row {
		height: 2rem;
	}
	div.item-buttom {
		height: 20%;
	}
</style>