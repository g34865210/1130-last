<template>
	<div class="header-container">
		<div class="header-search-login">
			<span class="log"></span>
			<div class="searchInput">
				<i class="iconfont icon-icon-test"></i>
				<span class="placeholder">搜索商品，共xxxxx款好物</span>
			</div>
			<button>登录</button>
		</div>
		<div class="header-nav">
			<ul>
				<li class="active"><a href="javascript:void(0);">推荐</a></li>
				<li>居家生活</li>
				<li>服饰鞋包</li>
				<li>美食酒水</li>
			</ul>
			<span class="iconfont icon-icon-test1" @click="toggleShow"></span>
		</div>
		<div class="navbox-wrapper" v-if="!isOpen">
			<div class="nav-box">
				<div class="all-category">
					<span>全部频道</span>
					<i class="iconfont icon-icon-test2" @click="toggleShow"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    name: "headnav",
	  data(){
      return{
        isOpen:true
      }
	  },
	  methods:{
      toggleShow(){
        this.isOpen = !this.isOpen;
      }
	  }
  }
  
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixins.styl"
	.header-container
		position relative
		height 150px
		width 100%
		background-color #fff
		.header-search-login
			display flex
			justify-content space-around
			align-items center
			width 100%
			height 88px
			font-size 30px
			padding 25px
			box-sizing border-box
			.log
				flex 2
				height 40px
				background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png")
				background-repeat no-repeat
				background-size 138px 40px
				background-position center
				margin-right 10px
			.searchInput
				flex 7
				height 56px
				border-radius 10px
				border none
				background-color rgba(0,0,0,.1)
				text-align center
				line-height 56px
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
		.header-nav
			position relative
			width 100%
			height 60px
			overflow hidden
			ul
				width 1650px
				font-size 30px
				height 60px
				li
					float left
					height 50px
					margin 5px 20px
					padding 0 10px
					text-align center
					&.active
						border-bottom 4px solid $red
			span
				position absolute
				right 0
				top 0
				width 100px
				height 60px
				font-size 30px
				text-align center
				line-height 60px
				background-color #fff
		.navbox-wrapper
			background-color #f40
			.nav-box
				position absolute
				left 0
				top 90px
				width 100%
				z-index 10
				background-color #f40
				.all-category
					display flex
					justify-content space-between
					/*position relative*/
					font-size 30px
					height 60px
					line-height 60px
					margin 0 0 20px
					text-align center
					span
						margin-left 30px
					i
						width 100px
						height 60px
						font-size 30px
</style>
