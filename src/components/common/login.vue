<template>
    <div class="container">
            <div style="width: 100%; margin-top: -2rem;">
                <div class="logo">
                    <div class="van-image">
                        <img src="../../../static/img/loading.png" class="van-image__img">
                    </div>
                </div>
                <div class="desc">省到家代理商城</div>
                <div class="login-form">
                <div class="van-cell van-field">
                <div class="van-cell__value van-cell__value--alone van-field__value">
                <div class="van-field__body">
                <input type="text" name="phone" placeholder="登录账号" class="van-field__control" v-model="username"></div>
                </div>
                </div>
                <div class="van-cell van-field">
                <div class="van-cell__value van-cell__value--alone van-field__value">
                <div class="van-field__body">
                <input type="password" name="password" placeholder="登录密码" class="van-field__control" v-model="password">
                </div>
                </div>
                </div>
                <div class="forget-password">
                    <span>忘记密码？</span>
                </div>
                <div style="margin: 30px 0px;">
                    <button @click="userlogin" class="van-button van-button--danger van-button--normal van-button--block van-button--round">
                        <div class="van-button__content">
                            <span class="van-button__text"> 登录 </span>
                        </div>
                    </button>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
  name: 'index',

  data () {
    return {
        username:'',
        password:''
    }
  },
    methods:{
        userlogin(){
            var up ={
                service:'App.User_User.Login',
                username:this.username,
                password:this.password,
            }
            if(this.username=='' || this.password==''){
                this.alertView.failView('账号或密码不能为空')
                return false
            }
            else if(this.password.length<6){
                this.alertView.failView('密码不能小于6位数')
                return false

            }
            this.$axios.post(this.HOME,up)
            .then(e=>{
                if(e.data.data.is_login ===true && e.data.ret=== 200){
                    sessionStorage.setItem('user_id',e.data.data.user_id)
                    sessionStorage.setItem('token',e.data.data.token)
                    this.$router.push({path:'/'})
                }
                else if(e.data.data.is_login ===false && e.data.ret=== 200){
                    this.alertView.failView('密码错误')
                }
                else{
                    this.alertView.failView('账号不存在')
                }
            })
        }
    }
  }
  </script>
<style scoped>
    .container{    
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
            background-color: #fff;
        position: absolute;
        height: 100%;
    }
    .container .logo {
    height: 3rem;
    }
    .container .logo, .container {
        width: 100%;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .van-image {
        position: relative;
        /* display: inline-block; */
    }
    .van-image__img, .van-image__loading {
        display: block;
        width: 100%;
        height: 100%;
    }
    .container .desc {
        font-size: .4rem;
        font-weight: 700;
        text-align: center;
    }
    .container .login-form {
        margin: .8rem .53333rem .53333rem;
    }
    .van-cell {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        box-sizing: border-box;
        width: 100%;
        padding: .26667rem .42667rem;
        overflow: hidden;
        color: #323233;
        font-size: .37333rem;
        line-height: .64rem;
        background-color: #fff;
    }
    .van-field__value {
        overflow: visible;
    }
    .van-cell__value--alone {
        color: #323233;
        text-align: left;
            vertical-align: middle;
    }
    .van-cell__title, .van-cell__value {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;}
    .van-cell__value--alone {
        color: #323233;
        text-align: left;
    }
    .van-field__control {
        display: block;
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
        margin: 0;
        padding: 0;
        color: #323233;
        line-height: inherit;
        text-align: left;
        background-color: transparent;
        border: 0;
        resize: none;
    }
    .van-cell:after {
        position: absolute;
        box-sizing: border-box;
        content: " ";
        pointer-events: none;
        right: .42667rem;
        bottom: 0;
        left: .42667rem;
        border-bottom: .02667rem solid #ebedf0;
        -webkit-transform: scaleY(.5);
        -ms-transform: scaleY(.5);
        transform: scaleY(.5);
    }
    .van-field__body {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
    }
    .container .login-form .forget-password {
        text-align: right;
        color: red;
        margin-top: .26667rem;
    }
    .container .login-form .forget-password {
        text-align: right;
        color: red;
        margin-top: .26667rem;
    }
    .van-button {
        position: relative;
        display: inline-block;
        box-sizing: border-box;
        height: 1.17333rem;
        margin: 0;
        padding: 0;
        font-size: .42667rem;
        line-height: 1.2;
        text-align: center;
        border-radius: .05333rem;
        cursor: pointer;
        -webkit-transition: opacity .2s;
        transition: opacity .2s;
        -webkit-appearance: none;
    }
    .van-button--danger {
        color: #fff;
        background-color: #ee0a24;
        border: .02667rem solid #ee0a24;
    }
    .van-button--normal {
        padding: 0 .4rem;
        font-size: .37333rem;
    }
    .van-button--round {
        border-radius: 26.64rem;
    }
    .van-button--block {
        display: block;
        width: 100%;
    }
</style>