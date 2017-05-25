<template>
    <div>
        <Swiper auto height="100px" :list="swiperData">

        </Swiper>
    	<div class="contentList">
    		<div class="cont-items" :id="data.id" v-for="data in dataList_c">
    			<router-link :to="{name:'detail',params:{id:data.id}}" class="cont-a">
    				  <div class="items-img">
                  <img :src="data.imgUrl" width="100%" height="100%" alt="">
              </div>
              <div class="itme-desc">
                  <h4 class="item-title">{{data.title}}</h4>
                  <p class="item-detail">{{data.desc}}</p>
                  <div class="item-buttom">
                     <span>{{data.time}}</span>
                     <span>评论({{data.pinglun}})</span>
                     <span>阅读({{data.read}})</span>
                  </div>
              </div>
    			</router-link>
    		</div>
        <!-- <Panel :list="dataList" :footer="footTitle"></Panel> -->
    	</div>

    </div>
</template>
<script>
  import {Swiper,Panel} from 'vux';
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
        dataList_c:[]
			}
		},
    mounted(){
      // debugger;
      //   if(dataList === null) {

      //   }
        this.initHomeList();

    },
    methods:{
        initHomeList(){
            this.$http.get('src/assets/data/home.json').then(res => {

              this.dataList_c = res.data.dataList;
            }).catch(err => {
                console.error(err);
            });
        }
    },
    computed:{
      dataList:function() {
          return this.dataList_c;
      }
    },
    components:{
        Swiper,
        Panel
    }
	}
</script>
<style scoped>
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
  .contentList {
    margin-bottom: .96rem;
  }
  .cont-a {
    display: flex;
    display: -webkit-flex;
    display: -webkit-box;
    -webkit-tab-highlight-color:rgba(0,0,0,0);
    padding: 10px;
    position: relative;
    text-decoration: none;
    -webkit-box-align: center;
    -webkit-align-items:center;
    align-items: center;
  }
  .items-img {
    margin-right: .14rem;
    width: 1.03rem;
    height: 1.03rem;
    line-height: 1.03rem;
    text-align: center;
  }
  .items-img>img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
   }
  .itme-desc {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;

    min-width: 0;
  }
  .item-title {
    font-weight: 400;
    font-size: .27rem;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: break-word;
    word-break: break-all;
    margin: 0;
  }
  .item-detail {
    color: #999;
    font-size: .23rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 1.2;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .item-buttom {
    font-size: .2rem;
  }
  * {
    margin: 0;
    padding: 0;
  }
</style>