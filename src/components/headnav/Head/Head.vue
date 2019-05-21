<template>
	<div class="head_container">
		<div class="left_box">
			<i class="iconfont icon-home"></i>
		</div>
		<div class="center_box">
			<div><span class="netease">{{netease}}</span></div>
			<div><span @click="flag=true; $router.replace('/things/find')" :class="{active:flag}" class="fond">{{fond}}</span></div>
			<div><span @click="flag=false;  $router.replace('/things/choice')" :class="{active:!flag}" class="specia_choice">{{specia_choice}}</span></div>
		</div>
		<div class="right_box">
			<i class="iconfont icon-icon-test" ></i>
			<i class="iconfont icon-gouwuchekong"></i>
		</div>
	</div>
</template>

<script>
  export default {
    name: "Head",
	  data(){
      return {
        flag:true
      }
	  },
	  props:{
      fond:String,
      specia_choice:String,
      netease:String,
      // netease:String
	  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../../common/stylus/mixins.styl"
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
		.left_box
			margin-left 24px
			i
				font-size 51px
				line-height 75px
		.center_box
			width 60%
			margin-left 36px
			font-size 28px
			display flex
			justify-content center
			align-items center
			>div
				margin-left 10px
				font-size 40px
				color #000
				span
					&.active
						font-size 36px
						font-weight 700
						color $red
		.right_box
			i
				font-size 46px
				margin-right 24px
</style>
