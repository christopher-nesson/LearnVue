<template>
	<div class="about">
		<div>
			<h2>点击计数案例</h2>
			<button @click="reduce">-</button>
			<span>{{num}}</span>
			<button @click="add">+</button>
			<p>{{normal()}}</p>
			<p>{{comput1}}</p>
			<button @click="reduce2">-</button>
			<span>{{num2}}</span>
			<button @click="add2">+</button>
			<p>{{normal()}}</p>
			<p>{{comput2}}</p>
			<HiWorld :num="10"></HiWorld>
		</div>
	</div>
</template>

<script>

	export default {
		// 在组件中使用data必须使用函数格式，在函数的返回值中返回数据类型
		data: function() {
			return {
				num: 0,
				num2:0
			}
		},
		methods: {
			normal(){
				console.log("普通方法执行了！");
				return "普通方法"
			},
			reduce() {
				this.num--;
			},
			add() {
				this.num++;
			},
			reduce2() {
				this.num2--;
			},
			add2() {
				this.num2++;
			}
		},
		computed:{
			comput1(){
				console.log("计算属性执行了！");
				return "计算属性"+this.num
			},
			comput2(){
				console.log("计算属性执行了！");
				return "计算属性"
			}
			
		},
		watch:{
			num(newValue,oldValue){
				console.log("监听到num变化了",newValue,oldValue);
			},
			num2(newvalue,oldvalue){
				console.log("监听到num2变化了",newvalue,oldvalue);
			},
			
		},
	}
	// 方法在meghods中编写computed vs methods
// 我们可以使用 methods 来替代 computed，效果上两个都是一样的，但是 computed 是基于它的依赖缓存，只有相关依赖发生改变时才会重新取值。而使用 methods ，在重新渲染的时候，函数总会重新调用执行。
</script>
