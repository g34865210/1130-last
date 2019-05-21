<template>
	<div>
		<headerSearch placehoder="搜索商品, 共19999件好物">
		</headerSearch>
		<div class="container">
			<div class="left_nav">
				<ul v-if="category">
					<li v-for="(item,index) in category.categoryL1List" :key="index"
					    @click="handle(index)" :class="{active:category.categoryL1List[categoryindex]===item}">
						{{item.name}}
					</li>
				</ul>
			</div>
			<div class="content" v-if="category.categoryL1List">
				<div>
					<img :src="category.categoryL1List[categoryindex].wapBannerUrl" alt="">
					<ul>
						<li v-for="(every,index1) in category.categoryL1List[categoryindex].subCateList" :key="index1">
							<img class="" :src="every.wapBannerUrl" alt="">
							<div>{{every.name}}</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    name: "category",
	  data(){
      return {
        categoryindex : 0
      }
	  },
	  methods:{
      handle (index) {
        this.categoryindex = index
      }
	  },
    computed: {
      ...mapState({
        category:state => state.category.category
      })
    },
    async mounted () {
      await this.$store.dispatch("getcategory");
      new BScroll(".left_nav", {click: true,scrollY: true})
      new BScroll(".content", {click: true,scrollY: true})
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	@import "../../common/stylus/mixins.styl"
	.container
		display flex
		.left_nav
			width 162px
			height 1144px
			ul
				width 100%
				li
					width 100%
					height 50px
					margin-top 40px
					line-height 50px
					text-align center
					font-size 28px
					color #7e8c8d
					&:first-child
						margin-top 20px
					&.active
						color red
						border-left 6px solid red
		.content
			width 588px
			font-size 28px
			height 1144px
			div
				>img
					width 100%
				>ul
					width 528px
					margin-top 20px
					display flex
					flex-wrap wrap
					>li
						width 144px
						height 216px
						margin-right 32px
						>img
							width 144px
							height 144px
						>div
							width 144px
							height 72px
							text-align center
</style>
