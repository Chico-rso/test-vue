<template>
	<div>
		<h1>{{ msg }}</h1>
		<p v-for="item in user" :key="item.id">
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
			...mapGetters('user', ['user'])//1 это название стора ,второе название геттера
		}
	}
</script>

<style lang="scss">
</style>