<template>
	<div>
		<div class="personal_shop_title">私人订制</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in personalShop" :key="index">
					<div class="personalShop-item" v-for="(good,index) in item" :key="index">
						<img class="primaryPic" :src="good.primaryPicUrl" alt="">
						<div class="text">
							<span class="name">{{good.name}}</span>
							<span class="price">¥{{good.retailPrice}}</span>
						</div>
					</div>
				</div>
			</div>
			<!-- 分页器 -->
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>

<script>
  import Swiper from 'swiper'
  import {mapState} from 'vuex'
  export default {
    name: "personalShop",
    mounted(){
    
    },
    computed: {
      ...mapState({
        personalShop: state => state.home.home.personalShopArr
      })
    },
    watch:{
      personalShop(){
        this.$nextTick(() => {
          new Swiper ('.swiper-container', {
            loop: true,
            // autoplay: true,
            // 分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
			}
    },
  }
</script>


<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
  .personal_shop_title
	  width 100%
	  height 100px
	  line-height 100px
	  font-size 32px
	  padding 0 30px
	  background #fff
	  overflow hidden
  .swiper-container
	  overflow inherit
    .swiper-pagination
	    transform translateY(45px)
	  .personalShop-item
		  float left
		  width 210px
		  padding 0 !important
		  margin-left 20px
		  .primaryPic
			  background-color #f5f5f5
			  margin-bottom 12px
			  width 216px
			  height 216px
		  >div
			  margin-top 0
			  margin-bottom 10px
			  font-size 24px
			  overflow visible
			  white-space normal
			  line-height 36px
			  .name
				  width 216px
				  color #333
				  margin-top 0
				  margin-bottom 10px
				  font-size 24px
				  line-height 36px
				  white-space normal
			  .price
				  font-size 22.5px
				  color #b4282d
</style>
