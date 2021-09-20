<template>
	<div class="sign-in">
		<div class="container">
			<div class="sign-in__container">
				<div class="sign-in--logo">
					<div class="logo-icon"></div>
					<div class="logo-text">VMO</div>
				</div>
				<div class="sign-in--form">
					<div class="form">
						<div class="form--input">
							<input
								type="text"
								v-model="username"
								required
								class="input"
								name="username"
								ref="username"
								placeholder="Tên đăng nhập/email"
								id=""
							/>
							<div
								class="text-msg"
								:class="{ 'text-muted': textMuteUserName }"
							>{{msg}}</div>
						</div>
						<div class="form--input">
							<input
								type="password"
								v-model="password"
								required
								class="input"
								ref="password"
								name=""
								placeholder="Mật khẩu"
								id=""
							/>
							<div
								class="text-msg"
								:class="{ 'text-muted': textMutePassword }"
							>{{msg}}</div>
						</div>
						<div class="form--forgot-password">
							<a
								href="#"
								class="color-text"
							>Quên mật khẩu?</a>
						</div>
						<div class="form--input">
							<input
								type="submit"
								@click="btnSignInClick()"
								class="input form--btn"
								value="Đăng nhập"
							/>
						</div>
						<div class="form--sign-up">
							Chưa có công ty?
							<a
								@click="clickSignUp()"
								
								class="color-text"
							>Đăng ký</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.text-msg {
	color: red;
	font-size: 12px;
}

.text-muted {
	display: none;
}
.sign-in {
	background-image: url("../../assets/img/bg_login.jpg");
	background-size: cover;
	background-repeat: no-repeat;
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	overflow-y: scroll;
}
.container {
	justify-content: center;
	padding: 15px;
	height: 100vh;
	align-items: center;
	width: 100%;
	display: flex;
}
.sign-in__container {
	width: 400px;
	/* min-width: 350px; */
	min-height: 400px;
	background: #fff;
	border-radius: 8px;
	padding: 55px 15px 37px 15px;
	display: block;
}

.sign-in--logo {
	display: flex;
	justify-content: center;
	margin-bottom: 15px;
}
.sign-in--logo .logo-icon {
	background: url("../../assets/Sprites.5f05e81f.svg") no-repeat -1488px -872px;
	width: 64px;
	height: 64px;
}
.sign-in--logo .logo-text {
	font-size: 50px;
	padding: 10px;
	line-height: 56px;
	font-weight: 800;
}

.sign-in--form {
	width: 100%;
}

.form--forgot-password {
	margin-bottom: 20px;
}

.sign-in--form .color-text {
	text-decoration: none;
	color: #0073e6;
}

.sign-in--form .color-text:hover {
	opacity: 0.9;
	color: #384fd5;
}

.form--sign-up {
	text-align: center;
}

.form--sign-up a {
	cursor: pointer;
}

.form--btn {
	background: #0073e6;
	font-weight: 500;
	font-size: 16px;
	color: #fff;
}
.form--btn:hover {
	opacity: 0.9;
	background-color: #384fd5;
}

@media (max-width: 576px) {
	.sign-in__container {
		padding: 55px 15px 37px 15px;
	}
}
</style>

<script>
import axios from "axios";
import router from "../../router";

export default {
	components: {

	},
	props: {
		username: { type: String },
		password: { type: String },
		textMuteUserName: { type: Boolean, default: true },
		textMutePassword: { type: Boolean, default: true },
	},
	data() {
		return {
<<<<<<< HEAD
			data1: [],
		}
	},
	methods: {
		// tạm thời chưa viết xong phải quay lại viết chức năng này
=======
			data1: {},
			msg: "",
		};
	},
	created() {

	},
	methods: {
		/**
		 * sign in click
		 * CreatedBy: DucLM (20/09/2021)
		 * 1. check null user password : not null then call api
		 * 2. call api get user by username
		 * 	- data is null then show message: "Tài khoản không tồn tại"
		 * 3. check password
		 * 	- true: go to HomePage
		 *  - false: show msg
		 */
>>>>>>> feature-listEmployee
		btnSignInClick() {
			// 1. check null user password
			if (this.validate()) {
<<<<<<< HEAD
				axios.get(`http://localhost:3000/users?username=${this.username}`)
					.then((response) => {
						this.data1[0] = response.data[0];
						console.log(response)
						if (this.data1.length == 0) {
							alert("user khong ton tai")
						} else {
							if (this.data1[0].password == this.password)
								alert("mk dung")
							else
								alert("mk sai")
							if (this.data1[0].password == this.password) {
								// alert("mk dung")
								router.push("HomePage");
							} else alert("mk sai 1");
=======
				//2 call api
				axios
					.get(`http://localhost:3000/users?username=${this.username}`)
					.then((response) => {
						this.data1 = response.data[0];
						console.log(response);
						// check response data
						if (!this.data1) {
							this.msg = "Tài khoản không tồn tại."
							this.textMuteUserName = false;
						} else {
							//3. check password
							if (this.data1.password == this.password) {
								const user = this.data1;
								router.push({ name: "HomePage", query: { user: { user } } });
							} else {
								this.msg = "Sai mật khẩu";
								this.textMutePassword = false;
								this.$refs.password.focus();
							}
>>>>>>> feature-listEmployee
						}
					})
					.catch((response) => {
						console.log(response);
					});
			}
		},
<<<<<<< HEAD
=======
		/**
		 * vaidate data username, password
		 * CreatedBy: DucLM (20/09/2021)
		 */
>>>>>>> feature-listEmployee
		validate() {
			this.msg = "Không được để trống"
			if (this.username == "" || this.username == null) {
				this.textMuteUserName = false
				this.$refs.username.focus()
			} else {
				this.textMuteUserName = true
			}
			if (this.password == "" || this.password == null) {
				this.textMutePassword = false
				this.$refs.password.focus()
			} else {
				this.textMutePassword = true
				return true
			}
<<<<<<< HEAD
			return false
		}

	}
=======
			return false;
		},
		/**
		 * Click signUP then go to page SignUp
		 * CreatedBy: DucLM (20/09/2021)
		 */
		clickSignUp() {
			router.push({ name: "SignUp" })
		}
	},
>>>>>>> feature-listEmployee
};
</script>
