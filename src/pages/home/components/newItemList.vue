<template>
	<div class="container">
		<div class="saleheader">
			<div class="saleheader-left">
				<span class="flashTitle">新品发售</span>
			</div>
			<div class="saleheader-right">更多 ></div>
		</div>
		<ul v-if="newItemList">
			<li v-for="(item,index) in newItemList" v-if="index < 6" :key="index">
				<img :src="item.scenePicUrl" alt="">
				<div class="price">
					<span class="new_name">{{item.name}}</span>
					<span class="SpecialOffer">￥{{item.retailPrice}}</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "newItemList",
    computed : {
      ...mapState({
        newItemList : state => state.home.home.newItemList
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.container
		.saleheader
			display flex
			align-items center
			justify-content space-between
			.saleheader-left
				display flex
				align-items center
				.flashTitle
					font-size 32px
					line-height 100px
					margin 0 20px 0 50px
			.saleheader-right
				font-size 28px
				line-height 100px
				margin-right 50px
		ul
			display flex
			flex-wrap wrap
			justify-content space-around
			padding-left 20px
			li
				width 216px
				height 318px
				margin-right 20px
				img
					width 216px
					height 216px
					margin-bottom 12px
					background-color #f5f5f5
				.price
					height 100px
					font-size 24px
					line-height 36px
				.new_name
					color #7f7f7f
				.SpecialOffer
					color #b4282d

</style>
