<template>
  <div id="app">
	  <headernav v-show="$route.meta.showHeader"></headernav>
	  <router-view></router-view>
	  <footernav v-show="$route.meta.showFooter"></footernav>
  </div>
</template>

<script>
	import headernav from './components/headnav/headnav'
	import footernav from './components/footernav/footernav'
export default {
  name: 'App',
  components: {
    headernav,
	  footernav,
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	#app
		width 100%
		height 100%
</style>
