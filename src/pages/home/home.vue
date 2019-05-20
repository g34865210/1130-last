<template>
	<div class="homecontainer">
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
				<li v-if="policydesclist.length"  v-for="(item ,index) in policydesclist" :key="index">
					<i>
						<img :src="`${item.icon}`" alt="">
					</i>
					<span>{{item.desc}}</span>
				</li>
			</ul>
			<Nav></Nav>
			<div class="bossRecommen">
				<img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="bossRecommen">
			</div>    <!-- boss推荐 -->
			
			<sceneLightShopping></sceneLightShopping>
			<personalShop></personalShop>
			<Split></Split>
			<flashSaleModule></flashSaleModule>
			<Split></Split>
			<newItemList></newItemList>
			<Split></Split>
			<popularItemList></popularItemList>
			<Split></Split>
			<topicList></topicList>
			<Split></Split>
			<zhongChouList></zhongChouList>
			<Split></Split>
			<categoryModule></categoryModule>
			<KJFMobileRight></KJFMobileRight>
		</div>
	</div>
</template>

<script>
	import Swiper from 'swiper'
	import {mapState} from 'vuex'
	import Bscroll from 'better-scroll'
	import Nav from './components/nav'
	import sceneLightShopping from './components/sceneLightShopping'
	import personalShop from './components/personalShop'
	import flashSaleModule from './components/flashSaleModule'
	import newItemList from './components/newItemList'
	import popularItemList from './components/popularItemList'
	import topicList from './components/topicList'
	import zhongChouList from './components/zhongChouList'
	import categoryModule from './components/categoryModule'
	import KJFMobileRight from './components/KJFMobileRight'
	// import {reqHome} from '../../api/index'
	import 'swiper/dist/css/swiper.css'
  export default {
    name: "home",
    components:{
      Nav,
      sceneLightShopping,
      personalShop,
      flashSaleModule,
      newItemList,
      popularItemList,
      topicList,
      zhongChouList,
      categoryModule,
      KJFMobileRight
    },
	  
	  mounted () {
      new Bscroll('.homecontainer');
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
	.homecontainer
		height 1084px
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
	.bossRecommen
		height 160px
		margin-bottom 40px
		background-color #fff
		img
			height 100%
</style>
