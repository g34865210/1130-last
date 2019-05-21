<template>
	<ul v-if="sceneLightShopping">
		<li v-for="(item,index) in sceneLightShopping" :key="index">
			<p class="title">{{item.styleItem.title}}</p>
			<p class="desc">{{item.styleItem.desc}}</p>
			<div>
				<img :src="pic.picUrl" alt=""  v-for="(pic,index) in item.styleItem.itemPicBeanList"
				 :key="index">
			</div>
		</li>
	</ul>
</template>

<script>
	import {mapState} from 'vuex'
  export default {
    name: "sceneLightShopping",
	  computed:{
      ...mapState({
        sceneLightShopping : state => state.home.home.sceneLightShoppingGuideModule
      })
	  }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	ul
		display flex
		flex-wrap wrap
		justify-content center
		li
			position relative
			width 343px
			height 260px
			box-sizing border-box
			margin: 4px 0 0 4px
			padding: 20px 0 0 20px
			border-radius 4px
			background-color #F5F5F5
			.title
				padding-left 10px
				box-sizing border-box
				color #333
				font-size 32px
			.desc
				margin-top 10px
				margin-bottom 10px
				padding-left 10px
				box-sizing border-box
				color #7f7f7f
				font-size 24px
			div
				display flex
				justify-content center
				img
					width 150px
					height 150px
					margin-right 4px
</style>
