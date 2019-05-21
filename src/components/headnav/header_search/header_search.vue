<template>
	<div class="header-search-login">
		<!--<span class="log"></span>-->
		<slot name="left"></slot>
		<div class="searchInput">
			<i class="iconfont icon-icon-test"></i>
			<span class="placeholder">{{placehoder}}</span>
		</div>
		<slot name="right"></slot>
		<!--<button>登录</button>-->
	</div>
</template>

<script>
  export default {
    name: "header_search",
	  props:{
      placehoder:String
	  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../../common/stylus/mixins.styl"
	.header-search-login
		position relative
		display flex
		justify-content space-around
		align-items center
		width 100%
		height 88px
		font-size 30px
		padding 20px
		box-sizing border-box
		background white
		z-index 100
		.log
			flex 2
			height 40px
			background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
			background-repeat no-repeat
			background-size 138px 40px
			background-position center
			margin-right 10px
			margin-left 5px
		.searchInput
			flex 7
			height 56px
			border-radius 10px
			border none
			background-color rgba(0,0,0,.1)
			text-align center
			line-height 56px
			z-index 100
			i
				font-size 30px
			.placeholder
				font-size 30px
				color #666
		button
			flex 1
			height 40px
			margin-left 10px
			font-size 24px
			border-radius 10px
			outline none
			color $red
			border 1px solid $red
			background-color #fff
</style>
