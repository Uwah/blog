<template>
    <div>
        <Swiper auto height="100px" :list="swiperData">

        </Swiper>
    	<div class="contentList">
    		<div class="cont-items">
    			<router-link to="">
    				<!-- <Row class="items-row">
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
                    </Row> -->
    			</router-link>
    		</div>

    	</div>

    </div>
</template>
<script>
  import {Swiper} from 'vux';
	export default {
		name:"homes",
		data(){
			return {
				setting:{
					arrow:"naver",
					trigger:"hover"
				},
        swiperData:[{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行'
        }]
			}
		},
    components:{
        Swiper
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