<template>
	<div class="container">
		<div class="saleheader">
			<div class="saleheader-left">
				<span class="flashTitle">人气推荐</span>
			</div>
			<div class="saleheader-right">更多 ></div>
		</div>
		<ul v-if="popularItemList">
			<li v-for="(item,index) in popularItemList" :key="index">
				<img :src="item.listPicUrl" alt="">
				<div>
					<span class="picurname">{{item.name}}</span><br v-if="index===0">
					<span class="simpleDesc" v-if="index===0">{{item.simpleDesc}}</span><br v-if="index===0">
					<span class="retailPrice">￥{{item.retailPrice}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
  export default {
    name: "popularItemList",
    computed: {
      ...mapState({
        popularItemList: state => state.home.home.popularItemList
      })
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
		ul
			width 100%
			display flex
			flex-wrap wrap
			padding-left 30px
			li
				width 216px
				height 318px
				margin-right 20px
				&:first-child
					width 100%
					height 320px
					display flex
					align-items center
					img
						width 280px
						height 280px
						margin 0
					div
						margin 0 50px
				img
					width 216px
					height 216px
					margin-bottom 12px
					background-color #f5f5f5
				div
					height 100px
					font-size 24px
					line-height 36px
					.picurname
						color #333333
					.simpleDesc
						font-size 24px
						color #7f7f7f
					.retailPrice
						color $red
</style>
