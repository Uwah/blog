<template>
    <div>
        <Swiper auto height="100px" :list="swiperData">

        </Swiper>
    	<div class="contentList">
    		<div class="cont-items" :id="data.id" v-for="data in dataList">
    			<router-link to="">
    				<div class="items-row">
                <div span="8">
                	<img :src="data.imgUrl" width="100%" height="100%" alt="">
                </div>
                <div span="16">
                	   <h5 class="item-title">{{data.title}}</h5>
				             <div class="item-detail">{{data.desc}}</div>
                	   <div> class="item-buttom">
                		    <div span="20">{{data.time}}</div>
                		    <div span="2">评论(x)</div>
                		    <div span="2">阅读(x)</div>
                	   </div>
                </div>
              </div>
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
        }],
        dataList:[]
			}
		},
    mounted(){
        this.initHomeList();

    },
    methods:{
        initHomeList(){
            this.$http.get('src/assets/data/home.json').then(res => {
              
              this.dataList = res.data.dataList;
            }).catch(err => {
                console.error(err);
            });
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