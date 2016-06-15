<template>
	<div class="error">
		<img src="../assets/img/no-use.png" height="80" width="80" alt="">
		<div class="content">
			<p class="title">{{content1.title}}</p>
			<p class="txt">{{content1.txt}}</p>
		</div>
		<div class="ui-btn-wrap">
			<button style="background:#4991fd; color:#fff; border:none;" class="ui-btn ui-border-radius">直接购买</button>
			<button class="ui-btn ui-border-radius">返回</button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			content1: {'title': '您的芝麻分不够， 无法免费试用','txt': '点击直接购买雅培血糖仪， 也可以获赠试纸抵用券'},
			content2: {'title': '您的芝麻分不够， 无法免费试用','txt': '您已经免费领取过了， 不能再次申请了～'},
			content3: {'title': '您的芝麻分不够， 无法免费试用','txt': '今天的免费试用名额已用完， 请明天再来～'}

		}
	}
}
</script>

<style scoped lang='postcss'>
	.error {
		display: flex;
		flex-flow: column wrap;
		margin-top: 50px;
		justify-content: center;
		align-items: center;
		text-align: center;
		img {
			width: 12%;
			height: auto;
			margin-bottom: 20px;
		}
		.content {
			.txt {
				color: #999;
				font-size: 14px;
			}
		}
	}
	.ui-btn-wrap {
		
		.ui-btn {
			width: 110px;
			height: 36px;
			border-color: #4991fd;
			&:last-child {
				margin-left:30px;
			}
		}
	}
</style>



