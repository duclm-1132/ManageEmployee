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
	},
	props: {
		// user:{type: Object},
	},
	data() {
		return {
			user: {},
		}
	},
	created() {
		this.user = this.$route.query;
	},
}
</script>

<style>
.home-page {
	display: flex;
}
</style>