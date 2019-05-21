<template>
	<div class="find_container">
		<div>
			<ul v-for="(item, index) in recommendData" :key="index">
				<li v-for="(topic, index) in item.topics" :key="index">
					<updownShow v-if="topic.style===1" :topic="topic"></updownShow>
					<leftrightShow v-if="topic.style===2" :topic="topic"></leftrightShow>
					<scrollShow v-if="topic.style===3" :topic="topic"></scrollShow>
					<picShow v-if="topic.style===4" :topic="topic"></picShow>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
	import updownShow from './components/updownShow'
	import leftrightShow from './components/leftrightShow'
	import scrollShow from './components/scrollShow'
	import picShow from './components/picShow'
  export default {
    name: "find",
	  components:{
      updownShow,
      leftrightShow,
		  scrollShow,
		  picShow
	  },
    mounted () {
      new BScroll('.find_container');
      this.$store.dispatch("getcommendData")
      this.$store.dispatch("getAutoRecommendData")
    },
    computed: {
      ...mapState({
        recommendData: state=>state.things.recommendData,
        AutoRecommendData: state=>state.things.moreRecommendData,
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.find_container
		margin-top 80px
		width 100%
		max-height 1070px
		overflow hidden
		box-sizing border-box
		padding-top 30px
		font-size 28px
		background-color: #fff
</style>
