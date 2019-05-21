<template>
	<div>
		<Header  fond="发现"  specia_choice="甄选家"></Header>
		<div class="tab_container">
			<ul v-if="tabs">
				<li v-for="(item,index) in tabs" :key="index" @click="handle(item.tabId)"
				:class="{active:curtab===item.tabId}">
					{{item.tabName}}
				</li>
			</ul>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import BScroll from 'better-scroll'
  export default {
    name: "things",
	  data(){
      return{
        curtab : 9
      }
	  },
	  methods:{
      handle(tabId){
        this.curtab = tabId
      }
	  },
	   mounted () {
       new BScroll(".tab_container", {
         scrollX: true,
         click:true
       })
       this.$store.dispatch("gettbas")
    },
    computed: {
      ...mapState({
        tabs: state=>state.things.tabs,
      })
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.tab_container
		position fixed
		top 88px
		left 0
		height 74.5px
		width 750px
		font-size 28px
		border-top 1px solid #ddd
		background-color: #fafafa
		>ul
			height 100%
			width 952px
			display flex
			
			>li
				height 100%
				line-height 74.5px
				margin-right 35px
				white-space nowrap
				&.active
					color red
					border-bottom 6px solid red
</style>
