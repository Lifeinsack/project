<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                <ul>
                 <todo-item v-for="(item,index) of list"
                    :key="index"
                    :content="item.content" 
                    :index="index"
                    :href="item.href"
                    :class="index==0?'liston':''"
                    ></todo-item>
                </ul>
            </div>
            <div id="order_content">
                <div id="boxlist">
                    <h3 @click="histo()"><img src="../../../static/img/back.png">申请售后</h3>
                    <div>
                        <ul>
                            <li v-for="(item,index) of bread" @click="breadto(item.href)" :class="index==0?'active':''" :key="index">{{item.content}}</li>                         
                        </ul>
                    </div>
                    <div>
                        <div id="order_box">
                        <h3>测试请勿操作</h3>
                            <div id="order_data">
                                <h3>
                                    <div>款式名称</div> 
                                    <div>下单数量</div> 
                                    <div>单价</div> 
                                    <div style="border: none;">单价</div>
                                </h3> 
                                <div>
                                    <div>红色</div> 
                                    <div>4(剩余数量4)</div> 
                                    <div>￥0</div> 
                                    <div style="border: none;">
                                    <el-input-number v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="order_form">
                    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" id="from" :inline-message=true>
                        <el-form-item label="快递公司：" prop="name">
                            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="退货单号：" prop="tel">
                            <el-input type="tel" v-model="ruleForm.tel" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="退货时间：" prop="wx">
                             <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" ></el-date-picker>
                        </el-form-item>
                        <p>注意：非质量问题不退运费</p>
                        <el-form-item label="退运费：" prop="wx" style="letter-spacing:3.5px">
                            <el-input type="text" v-model="ruleForm.wx" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="退货款：" prop="wx" style="letter-spacing:3.5px">
                            <el-input type="text" v-model="ruleForm.wx" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item label="活动形式：" prop="desc">
                            <el-input type="textarea" v-model="ruleForm.desc" class="from_textare"></el-input>
                        </el-form-item>
                        <el-form-item label="图片上传：" prop="img">
                            <el-upload
                                action="#"
                                list-type="picture-card"
                                v-model="ruleForm.img"
                                :auto-upload="false">
                                    <i slot="default" class="el-icon-plus"></i>
                                    <div slot="file" slot-scope="{file}">
                                    <img
                                        class="el-upload-list__item-thumbnail"
                                        :src="file.url" alt=""
                                    >
                                    <span class="el-upload-list__item-actions">
                                        <span
                                        class="el-upload-list__item-preview"
                                        @click="handlePictureCardPreview(file)"
                                        >
                                        <i class="el-icon-zoom-in"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleDownload(file)"
                                        >
                                        <i class="el-icon-download"></i>
                                        </span>
                                        <span
                                        v-if="!disabled"
                                        class="el-upload-list__item-delete"
                                        @click="handleRemove(file)"
                                        >
                                        <i class="el-icon-delete"></i>
                                        </span>
                                    </span>
                                </div>
                            </el-upload>
                        </el-form-item>
                            <p>为了帮助您更好的解决问题，请上传图片，最多只能传三张。</p>                        
                        <el-form-item>
                        
                            <el-button type="primary">提交</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
import todoitem from '../common/bread'
export default {
  name: 'index',
  components: {
    'todo-item':todoitem ,
  },
  data () {
    return {
        inputValue: '',
        value:'',
        selvalue:'',
        num: 1,
        list:[
            {
                content:'自营订单',href:'/myOrder'
            },
            {
                content:'只退款',href:'/teamOrder',
            },
            {
                content:'重发货',href:'/countOrder'
            }
        ],
        bread:[
            {
                content:'退货',href:'/applyBuyAfter'
            },
            {
                content:'团队订单',href:'/returnMoney',
            },
            {
                content:'订单统计',href:'/againToGoods'
            },
            {
                content:'补偿',href:'/compensate'
            }
        ],
        ruleForm: {
          name: '',
          tel: '',
          date1:'',
          wx: '',
          desc:'',
          img:'',
        },
        rules: {
          name: [
            {required: true, message: '请输入快递公司名称', trigger: 'blur' }
          ],
          tel: [
            { validator: '', trigger: 'blur' }
          ],
          text: [
            { validator: '', trigger: 'blur' }
          ]
        }
       
    }
  },
  methods:{
      histo(){
          this.$router.go(-1)
      },
      breadto(href,id){
          this.$router.push({path:href,query:{id:id}})
      }
  }
  }
</script>
<style scoped>
    #boxlist{width: 1200px;
    margin: auto;
    background: #fff;
    overflow: hidden;}

    #boxlist>div>input{
    height: 34px;
    width: 177px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    text-indent: 15px;}
    #boxlist>h3 {
    padding: 18px 0 0 24px;
    font-size: 14px;
    color: #202020;}

    #boxlist>h3>img {
    width: 26px;
    height: 26px;
    vertical-align: middle;
    padding-right: 6px;
    cursor: pointer;}
    
    #boxlist>div>ul{
    height: 55px;
    line-height: 55px;
    border-top: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
    padding-left: 22px;}
    #boxlist>div>ul>li{
        float: left;
        line-height: 31px;
        width: 82px;
        text-align: center;
        border: 1px solid #ff6930;
        cursor:pointer;
        border-radius: 4px;
        font-size: 14px;
        margin: 12px 6px 0 0;
        color: #ff6930;
        display: inline-block;
    }
    .active{
        color: #fff!important;
        background: #ff6930;
    }
    #order_box{
        width: 1200px;
        margin: auto;
    }
    #order_box>h3{
    font-size: 16px;
    color: #202020;
    padding: 16px 0 0 22px;
    font-weight: 600;}
    #order_data{
    width: 1154px;
    margin: 16px 22px 0;
    border: 1px solid #e6e6e6;
    font-size: 14px;
    }
    #order_data>h3{
        height: 42px;
        border-bottom: 1px solid #e6e6e6;
        border-radius: 4px 4px 0 0;
        background: #f6f6f6;
    }
    #order_data>div{
    height: 52px;
    border-radius: 4px 4px 0 0;}
    #order_data>h3>div{
    text-align: center;
    line-height: 42px;
    float: left;
    width: 24.5%;
    border-right: 1px solid #e6e6e6;}
    #order_data>div>div{
    text-align: center;
    line-height: 52px;
    float: left;
    width: 24.5%;
    border-right: 1px solid #e6e6e6;}
    .ar {
        width: 120px;
        border: 1px solid #E6E6E6;
        line-height: 30px;
        border-radius: 4px;
        position: relative;
        margin: 10px 0 0 86px;
    }
    #order_form{
        margin-top: 12px;
        margin-left: 22px;}
    #from>.el-form-item{
    margin-bottom: 12px;
    line-height: 34px;
    position: relative;}
    .el-input,.el-input__inner{
    height: 34px;
    width: 239px;
    cursor:pointer;
    font-size: 14px;}
    #from>p{
        color: red;
        font-size: 12px;
        margin-bottom:12px;
    }
    .el-textarea
    {
        line-height: 24px;
        width: 237px;
        vertical-align: top;
        border-radius: 4px;
    }
    .el-button{
    margin: 22px 0 43px 72px;
    height: 40px;
    width: 135px;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #fff;
    border: none;
    padding:0;
    background: #ff6930;
    border-radius: 4px;}
</style>
<style>
    .from_textare textarea{
        height:150px;
        resize:none
    }
</style>