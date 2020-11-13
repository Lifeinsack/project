<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                <ul>
                 <todo-item v-for="(item,index) of list"
                    :key="index"
                    :content="item.content"
                    :href="item.href"
                    :class="index==1?'liston':''"
                    ></todo-item>
                </ul>
            </div>
            <div id="order_content">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" id="from">
                    <el-form-item label="原始密码：" prop="oldpass">
                        <el-input type="password" v-model="ruleForm.oldpass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="登陆密码：" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" prop="code">
                        <el-input v-model.number="ruleForm.code"></el-input>
                        <el-button @click="getcode" :disabled="!show" :class="!show?'nobtn':''">{{count}}</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" class="changebtn" @click="changepass">提交</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>
<script>
import todoitem from '../common/bread'
export default {
  name: 'countOrder',
  components: {
    'todo-item':todoitem ,
  },
  data () {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
           
              callback();
            }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
    return {
        list:[
            {
                content:'基本信息',href:'/accountMange'
            },
            {
                content:'密码修改',href:'/changePsd',
            }
        ],
        username:sessionStorage.getItem('username'),
        ismobile:sessionStorage.getItem('ismobile'),
        ruleForm: {
          oldpass:'',
          pass: '',
          checkPass: '',
          code: ''
        },
        rules: {
          oldpass: [
            {required: true, trigger: 'blur',message:'请输入原始密码'}
          ],
          pass: [
            {required: true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            {required: true, validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            {required: true, validator: checkAge, trigger: 'blur' }
          ]
        },
        show: true, // 初始启用按钮
        count: '验证码', // 初始化次数
        timer: null,
      };
  },
  methods:{
    getcode(){
      let number ={
        service:'App.User_User.Getsmscode',
        username:this.username
      }
      this.$axios.post(this.HOME,number)
      .then(e=>{
        if(e.data.ret!=200){
          this.alertView.failView('请输入正确的手机号')
        }
        else{
          const TIME_COUNT = 60;
           if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
              if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
              } else {
                this.show = true;
                this.count ='验证码'
                clearInterval(this.timer); // 清除定时器
                this.timer = null;
              }
            }, 1000)
          }
        }
      })
    },
    changepass(){
      let pass ={
        service:'App.User_User.Changepassword',
        username:this.username,
        ismobile:this.ismobile,
        code:this.ruleForm.code,
        password:this.ruleForm.oldpass,
        newpassword:this.ruleForm.checkPass
      }
      this.$axios.post(this.HOME,pass)
      .then(e=>{
        if(e.data.ret!=200){
          this.alertView.failView(e.data.msg)
        }
        else{
          this.alertView.success(e.data.msg)
          this.$router.push({path:'/changePsd'})
        }
      })
    }
  }
  }
</script>
<style scoped>
    #order_content{width: 100%;background: #fff;overflow:hidden}
    #box_head{margin-top:15px;}
    #box_head>div{
    font-size: 14px;
    color: #202020;
    margin-left: 20px;
    display: inline-block;
    margin-bottom: 10px;}
    #box_head>div>input{
    height: 34px;
    width: 177px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    text-indent: 15px;}
    #order_content{width: 100%;background: #fff;overflow:hidden}
    #from{margin-left: 22px;overflow: hidden;padding-top:20px;width:400px;}
    #from .el-form-item{margin-bottom:30px;}
    #from .el-form-item__content{float:left}
    #from .el-input{width:200px;}
    #from .el-button{background:#ff3535;color:#fff;border:none;padding:0;width:82px;height:38px}
    #from .nobtn{background:#909399}
    #from .changebtn{background:#ff3535; border-radius: 4px;
    border: none;
    width: 100px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    margin-left: 68px;
    cursor: pointer;}
</style>