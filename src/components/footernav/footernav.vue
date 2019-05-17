<template>
	<ul class="footer">
		<li :class="{active:$route.path === '/home'}" @click="$router.replace('/')">
			<div class="footer-icon">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
			</div>
			<span>首页</span>
		</li>
		<li :class="{active:$route.path === '/category'}" @click="$router.replace('/category')">
			<div class="footer-icon footer-icon1">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
			</div>
			<span>分类</span>
		</li>
		<li  :class="{active:$route.path === '/things'}" @click="$router.replace('/things')">
			<div class="footer-icon footer-icon2">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
			</div>
			<span>识物</span>
		</li>
		<li :class="{active:$route.path === '/shopcard'}" @click="$router.replace('/shopcard')">
			<div class="footer-icon footer-icon3">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
			</div>
			<span>购物车</span>
		</li>
		<li :class="{active:$route.path === '/profile'}" @click="$router.replace('/profile')">
			<div class="footer-icon footer-icon4">
				<img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png" alt="icon">
			</div>
			<span>个人</span>
		</li>
	</ul>
</template>

<script>
  export default {
    name: "footnav",
	  
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixins.styl"
	ul
		position fixed
		bottom 0
		left 0
		display flex
		justify-content space-around
		height 100px
		width 100%
		font-size 24px
		background-color #fff
		margin-top -100px
		li
			display flex
			flex-direction column
			justify-content space-around
			align-items center
			.footer-icon
				position relative
				width 40px
				height 40px
				overflow hidden
				img
					position absolute
					left 0
					top -245px
					width 40px
					height 490px
			.footer-icon1
				img
					top:-147px
			.footer-icon2
				img
					top:-343px
			.footer-icon3
				img
					top:-49px
			.footer-icon4
				img
					top:-441px
			&.active
				color $red
				img
					transform translateY(49px)
</style>
