<template>
	<div class="home">
		<form action="" class="message">
			<p class="name"><input type="text" placeholder="姓名"></p>
			<p class="id"><input type="text" placeholder="身份证"></p>
			<button>戳我申请</button>
			<a href="javascript:;">&nbsp;活动规则></a>
		</form>
	</div>
</template>

<style scoped lang='postcss'>
	.home {
		background-color: #1d9dfa;
		width: 100vw;
		height: 100vh;
		.message {
			position: absolute;
			left: 4.5vw;
			bottom: 30px;
			text-align: center;
			p {
				width: 90vw;
				margin-bottom: 10px;
				input {
					width: 100%;
					display: block;
					height: 40px;
					padding-left: 5px;
					border-radius: 5px;
					outline: none;
					border: none;
				}
			}
			button {
				display: block;
				height: 40px;
				width: 91vw;
				background-color: #6813fe;
				border-radius: 5px;
				color: #fff;
			}
			a {
				display: block;
				color: #fff;
				text-decoration: underline;
			}
		}
	}
</style>