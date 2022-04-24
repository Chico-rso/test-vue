<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Header :msg="headerMsg" />
		<HelloWorld :msg="helloWorldMsg" />
	</div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

export default {
	name: "App",
	components:
	{
		Header,
		HelloWorld,
	},
	data()
	{
		return {
			headerMsg: "This is Header component",
			helloWorldMsg: 'This is Hello World component'
		};
	},
};
</script>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
