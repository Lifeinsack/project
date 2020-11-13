<template>
  <div id="app">
    <div id="head" v-show="!(path==='/login')"><img src="../static/img/logo.png">
    </div>
    <div id="nav" v-show="!(path==='/login')">
      <div>
        <ul>
          <li v-for="(operate,path,index) in navTo.operate" :key="index">
              <router-link :to="{ path: operate.path }">
                {{operate.name}}
              </router-link>
          </li>
          <p id="login_data" ><span>大咖 黄晓义</span> <i>在线客服</i> <b>退出</b></p>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
 data(){
    return {
      path:'',
      navTo:{
      "operate":[
        {"name":"产品中心","path":'/'},
        {"name":"好评返现","path":'/BKGoods'},
        {"name":"我的订单","path":'/myOrder'},
        {"name":"团队管理","path":'/ManageUser'},
        {"name":"退换货列表","path":"/returnAndChangeGoods"},
        {"name":"我的钱包","path":'/myWallet'},
        {"name":"账户管理","path":'/accountMange'},
        {"name":"站内信","path":'/msg'}
      ]
    },
    }
},
watch:{
  $route(to,from){
    this.path=to.path
    if(from.path=='/login'){
      var up ={
            service:'App.User_User.Profile',
            user_id:sessionStorage.getItem('user_id'),
            token:sessionStorage.getItem('token'),
        }
      this.$axios.post(this.HOME,up)
      .then(e=>{
          sessionStorage.setItem('ismobile',e.data.data.profile.ismobile)
          sessionStorage.setItem('username',e.data.data.profile.username)
      })
      console.log('6666')
    }
  }
},
mounted()
{
  this.path=this.$route.path
 
},

      
}
</script>

<style>
@import "./assets/css/base.css";
</style>