<template>
	<div class="sign-up">
		<div class="container">
			<div class="container__item">
				<div class="container--header">
					<div class="header-text">Đăng ký tài khoản</div>
					<div class="back-sign-in">
						<p>
							Tôi đã có tài khoản?
							<router-link
								to="/"
								class="color-text-green"
							>
								Đăng nhập</router-link>
						</p>
					</div>
				</div>
				<div class="container-form">
					<div class="form-name">
						<div class="form-item firstName">
							<label for="firstName">Họ và tên</label>
							<input
								type="text"
								class="input"
								name=""
								id="firstName"
								placeholder="Nhập họ và tên đệm"
								v-model="user.firstName"
								ref="firstName"
							/>
							<div
								class="text-error"
								:class="{ 'text-muted': textMuteFirstName }"
							>
								{{ msg }}
							</div>
						</div>
						<div class="form-item lastName">
							<label for="lastName">Tên</label>
							<input
								type="text"
								class="input"
								name=""
								id="lastName"
								placeholder="Nhập tên"
								v-model="user.lastName"
								ref="lastName"
							/>
							<div
								class="text-error"
								:class="{ 'text-muted': textMuteLastName }"
							>
								{{ msg }}
							</div>
						</div>
					</div>
					<div class="form-item">
						<label for="companyName">Tên công ty</label>
						<input
							type="text"
							class="input"
							name=""
							id="companyName"
							placeholder="Nhập tên công ty"
							v-model="user.companyName"
							ref="companyName"
						/>
						<div
							class="text-error"
							:class="{ 'text-muted': textMuteCompanyName }"
						>
							{{ msg }}
						</div>
					</div>
					<div class="form-item">
						<label for="username">Tên đăng nhập/Email</label>
						<input
							type="text"
							class="input"
							name=""
							id="username"
							placeholder="Nhập tên đăng nhập/email"
							v-model="user.username"
							ref="username"
						/>
						<div
							class="text-error"
							:class="{ 'text-muted': textMuteUsername }"
						>
							{{ msg }}
						</div>
					</div>
					<div class="
							form-item">
						<label for="password">Mật khẩu</label>
						<input
							type="password"
							minlength="8"
							class="input"
							name=""
							id="password"
							placeholder="Nhập mật khẩu"
							v-model="user.password"
							ref="password"
						/>
						<div
							class="text-error"
							:class="{ 'text-muted': textMutePassword }"
						>
							{{ msg }}
						</div>
					</div>
					<div class="form-item">
						<input
							type="submit"
							class="input btn-submit"
							value="Đăng ký"
							@click="btnClickSignUp()"
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
@import url("../styles/input.css");
.color-text-green {
	text-decoration: none;
	color: #0073e6;
}

.color-text-green:hover {
	opacity: 0.9;
	color: #384fd5;
}

.text-error {
	color: red !important;
	font-size: 12px;
}
.text-suscess {
	color: #27ff00 !important;
}
.text-muted {
	display: none;
}
.sign-up {
	background-image: url("../../assets/img/bg6.jpg");
	background-size: cover;
	height: 100vh;
}

.container {
	padding: 15px;
	width: 100%;
}

.container__item {
	width: 546px;
	padding: 10px;
	min-height: 400px;
	background: #fff;
	border-radius: 8px;
}

.container__item .container--header {
	align-items: center;
	text-align: center;
	padding-top: 20px;
	line-height: 1.4;
}

.container__item .header-text {
	font-size: 24px;
	font-weight: 800;
}
.container__item .form-item {
	margin-top: 10px;
}
.container__item .form-name {
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin-top: 20px;
}

.container__item .form-name .firstName {
	width: 60%;
	margin-right: 8px;
}

.container__item .form-name .lastName {
	width: 40%;
}

.container__item .btn-submit {
	background: #0073e6;
	font-weight: 500;
	font-size: 16px;
	color: #fff;
}
.container__item .btn-submit:hover {
	opacity: 0.9;
	background-color: #384fd5;
}

@media (max-width: 576px) {
	.container__item .form-name {
		display: block;
		width: 100%;
		justify-content: space-between;
		margin-top: 20px;
	}
	.container__item .form-name .firstName,
	.container__item .form-name .lastName {
		width: 100%;
		/* margin-right: 8px; */
	}
}
</style>

<script>
import axios from "axios";
import router from "../../router";

export default {
	name: "SignUp",
	props: {
		textMuteFirstName: { type: Boolean, default: true },
		textMuteLastName: { type: Boolean, default: true },
		textMuteCompanyName: { type: Boolean, default: true },
		textMuteUsername: { type: Boolean, default: true },
		textMutePassword: { type: Boolean, default: true },
	},
	data() {
		return {
			msg: "",
			user: { type: Object },
		};
	},

	methods: {
		/**
		 * validate input null
		 * CreatedBy: DucLM (20/09/2021)
		 */
		validate() {
			this.msg = "Không được để trống";
			if (!this.user.firstName) {
				this.textMuteFirstName = false;
				this.$refs.firstName.focus();
			} else {
				this.textMuteFirstName = true;
			}
			if (!this.user.lastName) {
				this.textMuteLastName = false;
				this.$refs.lastName.focus();
			} else {
				this.textMuteLastName = true;
			}
			if (!this.user.companyName) {
				this.textMuteCompanyName = false;
				this.$refs.companyName.focus();
			} else {
				this.textMuteCompanyName = true;
			}
			if (!this.user.username) {
				this.textMuteUsername = false;
				this.$refs.username.focus();
			} else {
				this.textMuteUsername = true;
			}
			if (!this.user.password) {
				this.textMutePassword = false;
				this.$refs.password.focus();
			} else {
				this.textMutePassword = true;
				return true;
			}
			return false;
		},
		/**
		 * click sign up
		 * CreatedBy: DucLM (20/09/2021)
		 */
		btnClickSignUp() {
			if (this.validate()) {
				axios
					.post("http://localhost:3000/users", this.user)
					.then((res) => {
						console.log(res);
						// alert("ok")
						router.push("/");
					})
					.catch((res) => {
						console.log(res);
						alert("false");
					});
			}
		},
	},
};
</script>
