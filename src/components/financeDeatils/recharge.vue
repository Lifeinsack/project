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
                <div id="boxlist">
                    <h3 ><img src="../../../static/img/back.png" @click="histo()">充值</h3>
                    <div id="order_data">
                        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" id="from">
                            <el-form-item label="充值金额：" prop="price">
                                <el-input type="text" v-model.number="ruleForm.price" autocomplete="off"></el-input>
                            </el-form-item>
                        
                            <el-form-item>
                                <el-button type="primary" class="changebtn">提交</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
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
          return callback(new Error('金额不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 200) {
              callback(new Error('充值金额不能小于200'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
    return {
        list:[
            {
                content:'销量统计',href:'/myWallet'
            },
            {
                content:'财务明细',href:'/financeDeatils',
            }
        ],
        ruleForm: {
          price:''
        },
        rules: {
          price: [
            { validator: checkAge, trigger: 'blur' }
          ]
        }
        }
  },
  methods:{
        histo(){
          this.$router.go(-1)
      }
  }
  }
</script>
<style scoped>

    #order_content{width: 100%;background: #fff;overflow:hidden}
    #box_head{margin-top:15px;}
    #box_head h3{font-size:16px;}
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
    #boxlist{width: 1200px;
    margin: auto;
    background: #fff;
    overflow: hidden;}
    #boxlist>div{
    font-size: 14px;
    color: #202020;
    display: inline-block;
    }
    #boxlist>div>input{
    height: 34px;
    width: 177px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    text-indent: 15px;}
    #boxlist>h3 {
    line-height: 50px;
    padding: 0 0 0 24px;
    font-size: 14px;
    color: #202020;
    border-bottom: 1px solid #e6e6e6;}
</style>