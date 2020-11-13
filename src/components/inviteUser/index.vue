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
                    <el-form-item label="登陆账号：" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="登陆密码：" prop="pass">
                        <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码：" prop="pass">
                        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="代理实名：" prop="checkPass">
                        <el-input type="password" v-model="ruleForm.age" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="验证码：" prop="age">
                        <el-input v-model.number="ruleForm.age"></el-input>
                        <el-button >验证码</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary">提交</el-button>
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
          return callback(new Error('年龄不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'));
            } else {
              callback();
            }
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
        inputValue: '',
        value:'',
        selvalue:'',
        list:[
            {
                content:'团队列表',href:'/ManageUser'
            },
            {
                content:'手工邀请',href:'/inviteUser',
            },
            {
                content:'扫码邀请',href:'/inviteCode'
            }
        ],
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          age: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
      };
  },
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
    #from .el-button{background:#ff3535;color:#fff;border:none}


</style>