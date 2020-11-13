<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                <ul>
                 <todo-item v-for="(item,index) of list"
                    :key="index"
                    :content="item.content"
                    :href="item.href"
                    :class="index==0?'liston':''"
                    ></todo-item>
                </ul>
            </div>
            <div id="order_content">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" id="from">
                    <el-form-item label="代理名称：" prop="name">
                        <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号码：" prop="tel">
                        <el-input type="tel" v-model="ruleForm.tel" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="微信号码：" prop="wx">
                        <el-input type="text" v-model="ruleForm.wx" autocomplete="off"></el-input>
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
    return {
        list:[
            {
                content:'基本信息',href:'/accountMange'
            },
            {
                content:'密码修改',href:'/changePsd',
            }
        ],
        ruleForm: {
          name: '',
          tel: '',
          wx: ''
        },
        rules: {
          name: [
            { validator: '', trigger: 'blur' }
          ],
          tel: [
            { validator: '', trigger: 'blur' }
          ],
          text: [
            { validator: '', trigger: 'blur' }
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
    #from .el-button{background:#ff3535; border-radius: 4px;
    border: none;
    width: 100px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    margin-left: 82px;
    cursor: pointer;}
</style>