<template>
    <div class="sign-in">
        <div class="container">
            <div class="sign-in__container">
                <div class="sign-in--logo">
                    <div class="logo-icon"></div>
                    <div class="logo-text">VMO</div>
                </div>
                <div class="sign-in--form">
                    <div action="" class="form">
                        <div class="form--input">
                            <input type="text" v-model="username" required class="input" name="" placeholder="Số điện thoại/email" id="">    
                        </div>
                        <div class="form--input">
                            <input type="password" v-model="password" required class="input" name="" placeholder="Mật khẩu" id="">
                        </div>
                        <div class="form--forgot-password">
                            <a href="#">Quên mật khẩu?</a>
                        </div>
                        <div class="">
                            <input type="submit" @click="btnSignInClick()" class="input form--btn" value="Đăng nhập">
                        </div>
                        <div class="form--sign-up">
                            Chưa có công ty? <a href="#"> Đăng ký</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        
    </div>
</template>

<style>


.sign-in{
    background-image: url("../../assets/img/bg_login.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    overflow-y: scroll;
}
.container{
    justify-content: center;
    padding: 15px;
    height: 100vh;
    align-items: center;
    width: 100%;
    display: flex;
}
.sign-in__container{
    width: 400px;
    /* min-width: 350px; */
    min-height: 400px;
    background: #fff;
    border-radius: 8px;
    padding: 55px 15px 37px 15px;
    display: block;
}

.sign-in--logo{
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
.sign-in--logo .logo-icon{
    background: url('../../assets/Sprites.5f05e81f.svg') no-repeat -1488px -872px;
	width: 64px;
	height: 64px;
}
.sign-in--logo .logo-text{
    font-size: 50px;
    padding: 10px;
    line-height: 56px;
    font-weight: 800;
    
}

.sign-in--form{
    width: 100%;
}

.sign-in--form .input{
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    border-radius: 4px;
    outline: none;
    border: 1px solid #ccc;
    padding: 0 8px;
    margin-bottom: 20px;
    cursor: pointer;
}

.sign-in--form .input:focus{
    border: 1px solid #0073e6;
}
.form--forgot-password{
    margin-bottom: 20px;

}

a{
    text-decoration: none;
}

.form--sign-up{
    text-align: center;
}

.form--btn{
    background: #0073e6;
    font-weight: 500;
    font-size: 16px;
    color: #fff;
}
.form--btn:hover{
    opacity: 0.9;
    background-color: #384fd5;
}

@media (max-width: 576px){
    .sign-in__container {
        padding: 55px 15px 37px 15px;
        
        
    }
}

</style>

<script>
import axios from 'axios'


export default {
    components: {
      
    },
    props:{
        username:{ type: String},  
        password:{type:String}         
    },
    data(){
        return{
            data1:[],
        }
    },
    methods: {
        btnSignInClick(){
            axios.get(`http://localhost:3000/users?email=${this.username}`)
            .then((response) => {
                 this.data1[0] = response.data[0];
                console.log(response)
                // console.log(this.data1.data)
            })
            .catch((response) => {
                console.log(response);
            });
            if(this.data1[0].password == this.password)
                alert("mk dung")
            else
                alert("mk sai")
        }
    }
};

</script>