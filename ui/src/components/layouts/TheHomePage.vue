<template>
	<div class="home-page">
		<TheNavbar />
		<div>
			<TheHeader :user="userData" />
			<TheContent />
		</div>

	</div>
</template>

<script>
import TheHeader from './TheHeader.vue'
import TheNavbar from './TheNavbar.vue'
import TheContent from './TheContent.vue'
import axios from 'axios'

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
		 * Get User by id
		 * CreatedBy: DucLM (21/09/2021)
		 */
		getUser() {
			//get userId in route
			const userId = this.$route.params;
			// vì truyền qua params nên kết quả trả về là 1 object nên phải userId.userId để lấy userId
			axios
				.get(`http://localhost:3000/users?id=${userId.userId}`)
				.then((response) => {
					this.userData = response.data[0];
					console.log(response);
				})
				.catch((response) => {
					console.log(response);
				});
		}
	},
}
</script>

<style>
.home-page {
	display: flex;
}
</style>