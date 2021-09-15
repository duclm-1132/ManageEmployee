<template>
    <div class="sign-up">
        <div class="container">
            <div class="container__item">
                <div class="container--header">
                    <div class="header-text">Đăng ký tài khoản</div>
                    <div class="back-sign-in">
                        <p>Tôi đã có tài khoản? 
                            <router-link to="/" class="color-text-green"> Đăng nhập</router-link>
                        </p>
                    </div>
                </div>
                <div class="container-form">
                    <div class="form-name">
                        <div class="form-item firstName">
                            <label for="firstName">Họ và tên</label>
                            <input type="text" class="input" name="" id="firstName"  placeholder="Nhập họ và tên đệm">
                            <span id="" class="form-text text-muted">Không được để trống</span>
                        </div>
                        <div class="form-item lastName">
                            <label for="lastName">Tên</label>
                            <input type="text" class="input" name="" id="lastName"  placeholder="Nhập tên">
                            <span id="" class="form-text text-muted">Không được để trống</span>
                        </div>
                    </div>
                    <div class="form-item">
                        <label for="phoneNumber">Số điện thoại</label>
                        <input type="text" class="input" name="" id="phoneNumber"  placeholder="Nhập số điện thoại">
                        <span id="" class="form-text text-muted">Không được để trống</span>
                    </div>
                    <div class="form-item">
                        <label for="email">Tên đăng nhập/Email</label>
                        <input type="text" class="input" name="" id="email"  placeholder="Nhập tên đăng nhập/email">
                        <span id="" class="form-text text-muted">Không được để trống</span>
                    </div>
                    <div class="form-item">
                        <label for="password">Mật khẩu</label>
                        <input type="password" minlength="8" class="input" name="" id="password"  placeholder="Nhập mật khẩu">
                        <span id="" class="form-text text-muted">Không được để trống</span>
                    </div>
                    <div class="form-item">
                        <input type="submit" class="input btn-submit" value="Đăng ký">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style>
@import url('../styles/input.css');
.color-text-green{
    text-decoration: none;
    color: #0073e6;
}

.color-text-green:hover{
    opacity: 0.9;
    color: #384fd5;
}

.form-text{
    color: red;
    font-size: 12px;

}

.text-muted{
    display: none;
}
.sign-up{
    background-image: url('../../assets/img/bg6.jpg');
    background-size: cover;
    height: 100vh;
}

.container {
    padding: 15px;
    width: 100%;
}

.container__item{
    width: 546px;
    padding: 10px;
    min-height: 400px;
    background: #fff;
    border-radius: 8px;
}

.container__item .container--header{
    align-items: center;
    text-align: center;
    padding-top: 20px;
    line-height: 1.4;
}

.container__item .header-text{
    font-size: 24px;
    font-weight: 800;
    
}
.container__item .form-item{
    margin-top: 10px;
}
.container__item .form-name{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20px;
}

.container__item .form-name .firstName{
    width: 60%;
    margin-right: 8px;
}

.container__item .form-name .lastName{
    width: 40%;
}

.container__item .btn-submit{
    background: #0073e6;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
}
.container__item .btn-submit:hover{
    opacity: 0.9;
    background-color: #384fd5;
}

@media (max-width: 576px){
    .container__item .form-name{
        display: block;
        width: 100%;
        justify-content: space-between;
        margin-top: 20px;
    }
    .container__item .form-name .firstName,
    .container__item .form-name .lastName{
        width: 100%;
        /* margin-right: 8px; */
    }
}
</style>

<script>
export default {
    
}
</script>