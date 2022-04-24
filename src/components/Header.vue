<template>
	<div>
		<h1>{{ msg }}</h1>
		<p v-for="item in users" :key="item.id">
			{{ item.name }}: {{ item.age}}
		</p>
	</div>
</template>

<script>
	import {mapGetters, mapActions} from 'vuex'
	export default {
		name: "Header",
		props:
		{
			msg: String,
		},
		computed:
		{
			...mapGetters('user', ['user'])//1 это название стора ,второе название гетера
		}
	}
</script>

<style lang="scss">
</style>