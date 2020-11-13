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
                    <h3 @click="histo()"><img src="../../../static/img/back.png">订单详情</h3>
                    <div id="order_data">
                        <ul>
                            <li>
                                <h3><span class="dfh">待发货</span> 
                                <b>产品编号：14890</b> <b>订单编号：2010101550000803544</b> 
                                <b>订单时间：2020-10-10 15:50:00</b>
                                </h3> 
                                <div>
                                    <div><span>联系人：</span> 阿斯达阿斯达爱上d</div> <div><span>手机：</span> 13251321231</div> 
                                    <div><span>商品总额：</span> ￥0 </div> <div><span>运费：</span> ￥0 </div> 
                                    <div style="border-right: none;"><span>总金额：</span> ￥0 </div>
                                </div> 
                                <p><span>地址：</span>福建省泉州市啊啊啊啊<button>一键复制用户信息</button></p>
                            </li>
                        </ul>
                    </div>
                    <div id="goods_data">
                        <h3><span >商品名称：</span>测试请勿操作</h3> <div><div style="width: 690px;"><span>款式：</span> 红色</div>
                        <div><span >商品价格：</span> ￥0</div>
                        <div style="border: none;"><span >数量：</span> *4</div>
                        </div>
                    </div>
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
        list:[
            {
                content:'自营订单',href:'/myOrder'
            },
            {
                content:'团队订单',href:'/teamOrder',
            },
            {
                content:'订单统计',href:'/countOrder'
            }
        ],
       
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
    padding: 18px 0 0 24px;
    font-size: 14px;
    color: #202020;}
    #order_data>ul>li{
    width: 1154px;
    height: 148px;
    margin: 15px 22px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;}
    #order_data>ul>li>h3{
    height: 41px;
    line-height: 41px;
    background: #f6f6f6;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 4px 4px 0 0;
    font-size: 12px;}
    #order_data>ul>li>h3>.dfh{
    background: #ff3535;}
    #order_data>ul>li>h3>b{
    padding-left: 30px;}
    #order_data>ul>li>div{
    height: 52px;
    width: 100%;
    border-bottom: 1px solid #e6e6e6;}
    #boxlist>h3>img {
    width: 26px;
    height: 26px;
    vertical-align: middle;
    padding-right: 6px;
    cursor: pointer;}
    #order_data>ul>li>div>div{
    float: left;
    height: 52px;
    width: 19%;
    line-height: 52px;
    border-right: 1px solid #e6e6e6;
    font-size: 14px;}
    #order_data>ul>li>div>div>span{
    color: #949494;
    padding-left: 12px;}
    #order_data>ul>li>p{
    text-indent: 12px;
    line-height: 50px;
    font-size: 14px;
    position: relative;}
    #order_data>ul>li>h3>span{
    display: inline-block;
    border-radius: 2px;
    width: 54px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    margin: 0 0 0 12px;}
    #order_data>ul>li>p>button{
    position: absolute;
    width: 180px;
    line-height: 30px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background: #ff3535;
    cursor: pointer;
    top: 10px;
    right: 100px;}
    #goods_data {
    width: 1154px;
    margin: 15px 22px;
    border: 1px solid #e6e6e6;
    border-radius: 4px;}
    #goods_data>h3 {
    height: 41px;
    line-height: 41px;
    background: #f6f6f6;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 4px 4px 0 0;
    font-size: 12px;
    font-weight: 600;}
    #goods_data>h3>span {
    color: #949494;
    padding-left: 12px;}
    #goods_data>div:last-child {
    border-bottom: none;}
    #goods_data>div {
    height: 52px;
    border-bottom: 1px solid #e6e6e6;}
    #goods_data>div>div {
    float: left;
    height: 52px;
    width: 230px;
    line-height: 52px;
    border-right: 1px solid #e6e6e6;
    font-size: 14px;}
    #goods_data>div>div>span {
    color: #949494;
    padding-left: 12px;}

</style>