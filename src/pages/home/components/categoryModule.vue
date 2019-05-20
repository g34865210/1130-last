<template>
	<div>
		<div class="categoryModule" v-for="(item,index) in categoryModule" :key="index">
			<img :src="item.titlePicUrl" alt="">
			<div class="container">
				<ul>
					<li v-for="(every,index) in item.itemList" :key="index">
						<img class="good_img" :src="every.primaryPicUrl" alt="">
						<div class="describe">
							<span class="name">{{every.name}}</span>
							<span class="price">￥{{every.retailPrice}}</span>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: "categoryModule",
	  mounted(){
      new Bscroll(".container", {scrollX: true})
	  },
    computed: {
      ...mapState({
        categoryModule: state => state.home.categoryModule
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../../common/stylus/mixins.styl"
	.categoryModule
		clearFix()
		>img
			width 100%
			margin-bottom 20px
		.container
			overflow hidden
			clearFix()
			ul
				display flex
				float left
				li
					float left
					height 333px
					margin-right 20px
					font-size 24px
					line-height 36px
					background-color: #fff
					.good_img
						width 200px
						height 200px
						background-color: #f4f4f4
						margin-bottom 10px
					.describe
						width 100%
						.name
							color #000
							height 72px
						.price
							color $red
</style>
