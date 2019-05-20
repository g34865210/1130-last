<template>
	<div class="container">
		<div class="saleheader">
			<div class="saleheader-left">
				<span class="flashTitle">专题精选</span>
			</div>
			<div class="saleheader-right">更多 ></div>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="(item,index) in topicList" :key="index">
					<img :src="item.itemPicUrl" alt="">
					<div>
						<span class="title">{{item.title}}</span><br>
						<span class="subtitle">{{item.subtitle}}</span>
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
    name: "topicList",
	  computed:{
      ...mapState({
        topicList:state => state.home.topicList
      })
	  },
	  // mounted(){
    //   new Swiper ('.swiper-container', {
    //     loop: true,
    //     autoplay: true,
    //     // 分页器
    //     pagination: {
    //       el: '.swiper-pagination',
    //     },
	  //
    //     // 前进后退按钮
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    //   });
	  // },
    watch:{
      topicList(){
        this.$nextTick(() => {
          new Swiper ('.swiper-container', {
            loop: true,
            autoplay: true,
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
	.container
		.saleheader
			display flex
			align-items center
			justify-content space-between
			.saleheader-left
				display flex
				align-items center
				.flashTitle
					font-size 32px
					line-height 100px
					margin 0 20px 0 50px
			.saleheader-right
				font-size 28px
				line-height 100px
				margin-right 50px
		.swiper-container
			.swiper-wrapper
				.swiper-slide
					img
						width 100%
					div
						height 100px
						margin-left 20px
						line-height 30px
						.title
							color #333
							font-size 28px
						.subtitle
							font-size 24px
							color #7f7f7f
			
</style>
