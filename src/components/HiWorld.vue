<template>
	<div>
		<h1>我是HiWorld组件</h1>
		<p>我接受到的msg的值为{{msg}}</p>
		<p>我接受到的num的值为{{num}}</p>
		
		
	</div>
</template>

<script>

	export default {
		props:{
			msg:{
				type:[String,Number],
				default:'2021/1/26'
			},
			num:{
				type:Number,
				required:true
			}
		},
		
	}
</script>

<style>
</style>
