<template>
	<div class="choice_container">
		<div>
			<div class="head">
				<div class="top_title">让生活更好的N种方式</div>
				<div class="top_subtitle">{{commentData.title}}</div>
				<div class="top_scroll_box clearfix">
					<ul class="top_scroll">
						<li class="scroll_item" v-for="(look, index) in commentData.lookList" :key="index">
							<img :src="look.banner.picUrl" alt="BetterLife">
						</li>
					</ul>
				</div>
				<Split></Split>
			</div>
			<div class="content_box">
				<div class="content_title">TA们的严选生活</div>
				<div class="content_toggle">
          <span class="new_btn">
            最新
          </span>
					<span class="hot_btn">
            本月最热
          </span>
					<span class="show_btn">
            晒单合辑
          </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
  export default {
    name: "choice",
    mounted () {
      new BScroll(".top_scroll_box", {
        scrollX: true,
        click:true
      })
      this.$store.dispatch("getcommentData2");
      this.$store.dispatch("getThreeTypeData", {page: this.moreDataPage, size: 5, type: this.type})
    },
    computed: {
      ...mapState({
        commentData: state=>state.things.commentData,
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.choice_container
		margin-top 80px
		width 100%
		max-height 1070px
		overflow hidden
		box-sizing border-box
		padding-top 30px
		font-size 28px
		background-color #fff
		>div
			.head
				background-color: #fff
				.top_title
					width 100%
					height 40px
					line-height 40px
					text-align center
					font-size 28px
					color #7f7f7f
				.top_subtitle
					width 100%
					height 48px
					margin-top 30px
					line-height 48px
					text-align center
					font-size 32px
					color #333
				.top_scroll_box
					margin 30px 0 30px
					.top_scroll
						float left
						display flex
						.scroll_item
							width 240px
							height 240px
							border-radius 15px
							>img
								width 100%
								height 100%
								border-radius 15px
			.content_box
				width 100%
				.content_title
					width 100%
					margin-top 60px
					line-height 32px
					text-align center
					font-size 32px
					font-weight 700
					color #333
	
				.content_toggle
					margin-top 30px
					font-size 28px
					color #333
					display flex
					justify-content space-around
					>span
						padding 10px 30px
						display flex
						justify-content center
						align-items center
						background-color: #f4f4f4
						&.active
							font-weight 700
							color #b0955f
							background-color: #ffe4af
</style>
