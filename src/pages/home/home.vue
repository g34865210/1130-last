<template>
	<div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
				</div>
				<div class="swiper-slide">
					<img src="https://yanxuan.nosdn.127.net/981c28d7f7276a2c84bf8c7790a9b559.jpg?imageView&quality=75&thumbnail=750x0" alt="">
				</div>
				<div class="swiper-slide">
					<img src="https://yanxuan.nosdn.127.net/feadfbdcc0e2dea285d92c6740d46c66.jpg?imageView&quality=75&thumbnail=750x0" alt="">
				</div>
				<div class="swiper-slide">
					<img src="https://yanxuan.nosdn.127.net/5afff79cb85dfcd465e6da0d8404ddae.jpg?imageView&quality=75&thumbnail=750x0" alt="">
				</div>
				<div class="swiper-slide">
					<img src="https://yanxuan.nosdn.127.net/bec4a597a9aed55605eeb7c0c7710f9b.jpg?imageView&quality=75&thumbnail=750x0" alt="">
				</div>
			</div>
			<!-- 分页器 -->
			<div class="swiper-pagination"></div>
			
			<!-- 导航按钮 -->
			<div class="swiper-button-prev"></div>
			<div class="swiper-button-next"></div>
		
		</div>
		<ul class="wangyi-remind">
			<li>
				<i>
					<img src="http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png" alt="">
				</i>
				<span v-if="policydesclist.length">{{policydesclist[0].desc}}</span>
			</li>
			<li>
				<i>
					<img src="http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png" alt="">
				</i>
				<span>30天无忧退货</span>
			</li>
			<li>
				<i>
					<img src="http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png" alt="">
				</i>
				<span>48小时快速退款</span>
			</li>
		</ul>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import {mapState} from 'vuex'
	// import {reqHome} from '../../api/index'
	import 'swiper/dist/css/swiper.css'
  export default {
    name: "home",
	  
	  mounted () {
		  new Swiper ('.swiper-container', {
        loop: true,
        autoplay: true,
        // 分页器
        pagination: {
          el: '.swiper-pagination',
        },

        // 前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
		  // const result = await reqhome();
      // console.log(result)
		  
		  this.$store.dispatch('gethome');
		  this.$store.dispatch('getpolicydesclist')
		  
    },
    
    computed:{
      ...mapState(['home']),
	    ...mapState(['policydesclist'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.wangyi-remind
		height 72px
		display flex
		align-items center
		li
			display flex
			font-size 25px
			line-height 32px
			margin-left 40px
			img
				width 32px
				height 32px
</style>
