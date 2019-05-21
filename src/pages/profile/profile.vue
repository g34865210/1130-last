<template>
	<div class="login_container">
		<Header netease="网易严选"></Header>
		<div class="login_content">
			<div class="login_content_top">
				<div class="log"><img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt=""></div>
				<div class="phone_log">
					<i class="iconfont"></i>
					<span>手机号码登录</span>
				</div>
				<div class="email_log">
					<i class="iconfont"></i>
					<span>邮箱帐号登录</span>
				</div>
				<div class="phone_register">手机号快捷注册</div>
			</div>
			<ul>
				<li>
					<a href="">
						<i class="iconfont icon-weixin"></i>
						<span>微信</span>
					</a>
				</li>
				<li>|</li>
				<li>
					<a href="">
						<i class="iconfont icon-weixin"></i>
						<span>QQ</span>
					</a>
				</li>
				<li>|</li>
				<li>
					<a href="">
						<i class="iconfont icon-weixin"></i>
						<span>微博</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
  export default {
    name: "profile"
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
	.login_content
		margin-top 30px
		.login_content_top
			display flex
			flex-direction column
			align-items center
			.log
				display flex
				align-items center
				justify-content center
				width 100%
				height 423px
				img
					width 268px
					height 90px
			.phone_log,
			.email_log
				width 677px
				height 96px
				margin-top 32px
				color red
				display flex
				justify-content center
				align-items center
				border 1px solid red
				&.active
					color #fff
					background-color red
				>i
					font-size 30px
				>span
					font-size 28px
					margin-left 16px
			
</style>
