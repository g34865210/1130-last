<template>
	<ul v-if="Nav">
		<li v-for="(item, index) in Nav.kingKongList" :key="index">
			<a href="javascript:">
				<img :src="item.picUrl" alt="">
				<p>{{item.text}}</p>
			</a>
		</li>
	</ul>
</template>

<script>
	import {mapState} from 'vuex'
  export default {
    name: "Nav",
    computed : {
    ...mapState({
	    Nav : state => state.home.kingKongModule
    })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	ul
		display flex
		flex-wrap wrap
		margin-bottom 40px
		li
			width 110px
			height 156px
			margin 10px 20px 0
			a
				width 100%
				height 100%
				display flex
				flex-direction column
				justify-content center
				align-items center
				img
					width 110px
					height 110px
				p
					font-size 24px
					line-height 36px
					color #333
</style>
