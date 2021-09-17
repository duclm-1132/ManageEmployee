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
							<span
								id=""
								class="form-text"
								:class="{ 'text-muted': textMuteUserName }"
							>Không được để trống</span>
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
							<span
								id=""
								class="form-text"
								:class="{ 'text-muted': textMutePassword }"
							>Không được để trống</span>
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
							<a @click="clickSignUp()"
								to="/sign-up"
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
.form-text {
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
			data1: {},
		};
	},
	created() {

	},
	methods: {
		// tạm thời chưa viết xong phải quay lại viết chức năng này
		btnSignInClick() {
			if (this.validate()) {
				axios
					.get(`http://localhost:3000/users?username=${this.username}`)
					.then((response) => {
						this.data1 = response.data[0];
						console.log(response);
						if (this.data1.length == 0) {
							alert("user khong ton tai");
						} else {
							if (this.data1.password == this.password) {
								// alert("mk dung")
								const user = this.data1;
								router.push({ name: "HomePage", query: { user: { user } } });

							} else alert("mk sai");
						}
						// console.log(this.data1.data)
					})
					.catch((response) => {
						console.log(response);
					});
			}
		},
		validate() {
			if (this.username == "" || this.username == null) {
				this.textMuteUserName = false;
				this.$refs.username.focus();
			} else {
				this.textMuteUserName = true;
			}
			if (this.password == "" || this.password == null) {
				this.textMutePassword = false;
				this.$refs.password.focus();
			} else {
				this.textMutePassword = true;
				return true;
			}
			return false;
		},
		clickSignUp(){
			router.push({name:"SignUp"})
		}
	},
};
</script>
