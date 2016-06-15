<template>
	<div class="order-success">
		<div class="success">
			<img src="../assets/img/success.png" height="80" width="80" alt="">
			<div class="content">
				<p class="title">试用申请成功！</p>
				<p class="txt">等待发货～ ～</p>
			</div>
		</div>
	<div class="banner">
		<img src="../assets/img/banner.png" height="280" width="750" alt="">
	</div>
	</div>
</template>


<style scoped lang='postcss'>
	.success {
		display: flex;
		flex-flow: column wrap;
		padding-top: 40px;
		padding-bottom: 30px;
		margin-bottom: 12px;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #fff;
		box-shadow: 0 1px rgba(0,0,0,.1);
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
	.order-success {
		.banner {
			img {
				width: 100%;
				height: auto;
			}
		}
	}
</style>