<template>
	<div class="header-container">
		<headerSearch placehoder="搜索商品，共21726件好物">
			<span class="log" slot="left"></span>
			<button slot="right">登录</button>
		</headerSearch>
		<div class="header-nav">
			<ul>
				<li><a href="javascript:">推荐</a></li>
				<li><a href="javascript:">居家生活</a></li>
				<li><a href="javascript:">服饰鞋包</a></li>
				<li><a href="javascript:">美食酒水</a></li>
				<li><a href="javascript:">个户清洁</a></li>
				<li><a href="javascript:">母婴亲子</a></li>
				<li><a href="javascript:">运动旅行</a></li>
				<li><a href="javascript:">数码家电</a></li>
				<li><a href="javascript:">礼品特色</a></li>
			</ul>
			<span class="iconfont icon-icon-test1" @click="toggleShow"></span>
		</div>
		<div class="allnav_box" v-show="!isOpen">
			<div>
				<p>全部频道</p>
				<span class="iconfont icon-icon-test2" @click="toggleShow"></span>
			</div>
			<ul>
				<li><a href="javascript:">推荐</a></li>
				<li><a href="javascript:">居家生活</a></li>
				<li><a href="javascript:">服饰鞋包</a></li>
				<li><a href="javascript:">美食酒水</a></li>
				<li><a href="javascript:">个户清洁</a></li>
				<li><a href="javascript:">母婴亲子</a></li>
				<li><a href="javascript:">运动旅行</a></li>
				<li><a href="javascript:">数码家电</a></li>
				<li><a href="javascript:">礼品特色</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
  import Bscroll from 'better-scroll'
  export default {
    name: "headnav",
	  data(){
      return{
        isOpen:true
      }
	  },
	  mounted(){
      new Bscroll(".header-nav", {
        scrollX: true,
	      click:true
      })
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
		z-index 1000
		
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
		.allnav_box
			position absolute
			top 88px
			left 0
			width 100%
			background-color #fff
			div
				height: 60px;
				padding-left: 30px;
				font-size: 28px;
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
			ul
				display flex
				flex-wrap wrap
				padding-left 15px
				li
					width 165px
					margin 7.5px
					padding 0 16px
					box-sizing border-box
					font-size 28px
					line-height 60px
					color #333
					background-color: #fafafa
					border 2px solid $borderBgc
					border-radius 8px
					display flex
					align-items center
					justify-content center
</style>
