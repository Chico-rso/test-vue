<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<div
			v-for="item in user"
			:key="item.id"
		>
			{{ capitalize }} : {{ item.age }}
		</div>
		<button @click="addUser">ADD User</button>
	</div>
</template>

<script>

import {mapActions} from 'vuex';

export default {
	name: "HelloWorld",
	data() {
		return {
		}
	},
	props:
	{
		msg: String,
		user: Array,
	},
	methods:
	{
		...mapActions("user", ['addNewUser']),
		addUser()
		{
			const newUser =
			{
				name: 'Ivan',
				age: 30
			};
			this.addNewUser(newUser);
		}
	},
	computed:
	{
		//через компютед мы меняем данные и выводим его на странице уже результат метода
		capitalize()
		{
			let upper;
			for (let iterator of this.user)
			{
				Object.values(iterator).forEach(item =>
				{
					if(typeof item === "string")
					{
						upper = item.toUpperCase();
					}
				})
			}
			return upper;
		}
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
</style>
