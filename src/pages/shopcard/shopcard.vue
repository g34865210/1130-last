<template>
	<div>
		<div class="head_container">
			<div class="center_box">
				<div><span class="netease">购物车</span></div>
			</div>
			<div class="right_box">
				<span>领劵</span>
			</div>
		</div>
		<div class="content">
			<div class="titile">
				<span>30天无忧退货</span>
				<span>48小时无忧退款</span>
				<span>满88元免邮费</span>
			</div>
			<div class="login">
				<img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="ShopCar">
				<p>去添加点什么吧</p>
				<button>登录</button>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "shopcard"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixins.styl"
	.head_container
		position fixed
		top 0
		left 0
		width 100%
		height 88px
		padding 0 8px
		box-sizing border-box
		font-size 42px
		display flex
		align-items center
		justify-content space-between
		background-color: #fafafa
		bottom-border-1px(#ff4d4d)
		.center_box
			width 80%
			margin-left 36px
			font-size 28px
			display flex
			justify-content center
			align-items center
			>div
				margin-left 10px
				font-size 36px
				color #000
				span
					font-size 36px
					font-weight 700
					color #1e191a
		.right_box
			span
				font-size 30px
				color #ff8082
				margin-right 40px
	.content
		margin-top 30px
		.titile
			display flex
			font-size 24px
			justify-content space-around
		.login
			text-align center
			>img
				display block
				width 248px
				height 248px
				margin 375px auto 0
			>p
				color #999
				font-size: 28px;
			>button
				width 480px
				height 92px
				margin 50px auto 288px
				font-size 30px
				color #fff
				background-color #d30000
				border-radius 5px
				
			
			
</style>
