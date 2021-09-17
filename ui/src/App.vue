<template>
	<div id="app">
		<!-- <TheSignIn /> -->
		<router-view></router-view>
	</div>
</template>

<script>
// import TheSignIn from './components/layouts/TheSignIn.vue'

export default {
	name: 'App',
	components: {
		// TheSignIn,
	}
}
</script>

<style>
@import url("./components/styles/main.css");
* {
	margin: 0;
	padding: 0;
	outline: none;
	box-sizing: border-box;
}
</style>
