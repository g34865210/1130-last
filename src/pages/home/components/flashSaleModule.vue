<template>
	<div class="container">
		<div class="saleheader">
			<div class="saleheader-left">
				<span class="flashTitle">限时购</span>
				<span class="hour">03</span>
				<span class="point">:</span>
				<span class="minutes">04</span>
				<span class="point">:</span>
				<span class="seconds">05</span>
			</div>
			<div class="saleheader-right">更多 ></div>
		</div>
		<ul v-if="flashSaleModule">
			<li v-for="(item,index) in flashSaleModule.itemList" :key="index">
				<img :src="item.picUrl" alt="">
				<div class="price">
					<span class="SpecialOffer">￥{{item.activityPrice}}</span>
					<span class="Originalprice">￥{{item.originPrice}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
  export default {
    name: "flashSaleModule",
    computed : {
      ...mapState({
        flashSaleModule : state => state.home.flashSaleModule
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
				.hour
				.minutes
				.seconds
					display block
					width 36px
					height 36px
					font-size 24px
					line-height 36px
					text-align center
					color #fff
					background-color: #333
				.point
					margin 0 20px
					font-size 28px
			.saleheader-right
				font-size 28px
				line-height 100px
				margin-right 50px
		ul
			display flex
			flex-wrap wrap
			justify-content space-around
			padding-left 20px
			li
				width 216px
				height 318px
				margin-right 20px
				img
					width 216px
					height 216px
					background-color #f5f5f5
				.price
					display flex
					align-items center
					justify-content center
					height 100px
					line-height 100px
					.SpecialOffer
						font-size 28px
						color #b4282d
						margin-right 20px
					.Originalprice
						font-size 24px
						color #7f7f7f
						text-decoration line-through

</style>
