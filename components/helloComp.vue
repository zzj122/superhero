<template name="helloComp">
	<view>
		{{msg}}
		<input type="text" :value="myval" class="txt"/>
	</view>
</template>

<script>
	export default {
		
		name: "helloComp",
		
		data() {
			return {
				msg: "您好，这是自定义组件"
			}
		},
		props: {
			myval: {
				type: String
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.txt {
		color: green;
	}
</style>
