<template>
	<div class="container">
		<div class="saleheader">
			<div class="saleheader-left">
				<span class="flashTitle">众筹</span>
			</div>
			<div class="saleheader-right">更多 ></div>
		</div>
		
		<ul v-if="zhongChouList">
			<li v-for="(item,index) in zhongChouList" :key="index">
				<img :src="item.picUrl" alt="">
				<div class="info">
					<div class="title">{{item.name}}</div>
					<div class="price">{{item.showRetailPrice}}</div>
					<div class="progressbox">
						<div class="progress">
							<div class="bg" :style="{width: item.progress + '%'}"></div>
						</div>
						<div>{{item.progress}}%</div>
					</div>
					<div class="supportNum">{{item.supportNum}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "zhongChouList",
    computed: {
      ...mapState({
        zhongChouList: state => state.home.home.zhongChouList
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
			bottom-border-1px(#d8d8d8)
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
			padding-left 20px
			display flex
			flex-direction column
			>li
				height 250px
				display flex
				&:first-child
					padding-top 20px
				>img
					width 210px
					height 210px
					background-color #f5f5f5
				.info
					height 100%
					margin-left 30px
					font-size 24px
					line-height 36px
					display flex
					flex-direction column
					color #7f7f7f
					.price
						margin-top 7.5px
					.progressbox
						display flex
						align-items center
						justify-content center
						margin-top 10px
						.progress
							width 360px
							height 6px
							background #d8d8d8
							display flex
							justify-content flex-start
							.bg
								height 100%
								background-color #fea438
					.supportNum
						margin-top 40px
						color #7f7f7f
</style>
