<template>
	<div class="home-page">
		<TheNavbar @collapse="colapseClick" />
		<div>
			<TheHeader
				:user="userData"
				:colapseClick="colapse"
			/>
			<TheContent :colapseClick="colapse" />
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
			colapse: false,
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
		},
		colapseClick(res) {
			this.colapse = res
		}
	},
}
</script>

<style>
.home-page {
	display: flex;
}
</style>