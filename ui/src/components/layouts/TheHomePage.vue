<template>
	<div class="home-page">
		<TheNavbar />
		<div>
			<TheHeader :user="userData"/>
			<TheContent />
		</div>

	</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheNavbar from './TheNavbar.vue'
import TheContent from './TheContent.vue'
// import axios from 'axios'

export default {
	name: "HomePage",
	components: {
		TheHeader,
		TheNavbar,
		TheContent
	},
	props: {
		// user: { type: Object },
	},
	data() {
		return {
			// userId: {},
			userData: {},
		}
	},
	created() {
		// this.userData = this.$route.query;
		this.getUser();
	},
	methods: {
		/**
		 * Get User on cookie
		 * CreatedBy: DucLM (21/09/2021)
		 */
		getUser() {
			//get user
			this.userData = this.$cookies.get("user")
			console.log(this.userData)
		}
	},
}
</script>

<style>
.home-page {
	display: flex;
}
</style>