<template>
	<div class="home-page">
		<TheNavbar />
		<div>
			<TheHeader />
			<TheContent />
		</div>

	</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheNavbar from './TheNavbar.vue'
import TheContent from './TheContent.vue'
export default {
	name: "HomePage",
	components: {
		TheHeader,
		TheNavbar,
		TheContent
	}
}
</script>

<style>
.home-page{
    display: flex;
}
</style>