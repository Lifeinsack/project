<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                <ul>
                 <todo-item v-for="(item,index) of list"
                    :key="index"
                    :content="item.content"
                    :href="item.href"
                    :index="index"
                    :class="index==1?'liston':''"
                    ></todo-item>
                </ul>
            </div>
            <div id="order_content">
                <div id="box_head">
                    <div>
                        订单时间：
                            <el-date-picker
                            v-model="value"
                            type="datetimerange"
                            :picker-options="pickerOptions"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            align="right">
                            </el-date-picker>
                    </div>
                    <div>代理名称：<input type="text"></div>
                    <div>代理电话：<input type="tel"></div>
                    <div>订单编号：<input type="text"></div>
                    <div>产品编号：<input type="text"></div>
                    <div><input id="search" value="查询" type="button"></div>
                </div>
                <div id="order_list">
                    <ul>
                        <li>
                            <h3>
                            <span class="dfh">待发货</span> 
                            <b>产品编号：14890</b> 
                            <b>订单编号：2010100857133992458</b> 
                            <b>订单时间：2020-10-10 08:57:13</b></h3> 
                            <div>
                                <div class="order_goods_data">
                                    <img src="http://sdj.ssddjj.com/SDJ_IMG/site_0/24/pdt_2020100811265511676.png"> 
                                    <h4>测试请勿操作</h4> 
                                    <h5>红色*1</h5>
                                </div> 
                                <div class="order_goods_user">
                                    <h4>as 15213212312</h4> 
                                    <h5>福建省泉州市鲤城区</h5>
                                </div> 
                                <div class="order_goods_price">
                                    <h4>￥0元</h4> 
                                    <h5>含运费(￥0元)</h5>
                                </div> 
                                <div class="order_goods_see">
                                    <h4 @click="ordertail(1)">查看</h4> 
                                    <h4>取消</h4>
                                </div>
                            </div>
                            </li>
                        </ul> 
                    <page :count='count'></page>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import todoitem from '../common/bread'
import page from '../common/page'
export default {
  name: 'index',
  components: {
    'todo-item':todoitem ,
    'page':page
  },
  data () {
    return {
        inputValue: '',
        count:0,
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
         pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '待发货'
        }, {
          value: '选项3',
          label: '已发货'
        }, {
          value: '选项4',
          label: '已取消'
        },],
        }
  },
  methods:{
      ordertail(id){
          this.$router.push({path:'/orderDetail',query:{id:id}})
      }
  }
  }
</script>
<style>

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
    #order_list>ul>li>div>div {
    float: left;}
    #order_list>ul>li {
        width: 1154px;
        height: 152px;
        margin: 15px 22px;
        border: 1px solid #e6e6e6;
        border-radius: 4px;}
    #order_list>ul>li>h3 {
    height: 41px;
    line-height: 41px;
    background: #f6f6f6;
    border-bottom: 1px solid #e6e6e6;
    border-radius: 4px 4px 0 0;
    font-size: 12px;}
    #order_list>ul>li>h3>.dfh {
    background: #ff3535;}
    #order_list>ul>li>h3>span {
    display: inline-block;
    border-radius: 2px;
    width: 54px;
    line-height: 22px;
    text-align: center;
    color: #fff;
    margin: 0 0 0 12px;}
    #order_list>ul>li>h3>b {
    padding-left: 30px;}
    #order_list>ul>li>div {
    height: 112px;
    width: 100%;}
    #order_list>ul>li>div .order_goods_data {
    width: 384px;
    height: 110px;
    border-right: 1px solid #e6e6e6;
    position: relative;
    overflow: auto;}
    #order_list>ul>li>div .order_goods_data>img {
    width: 88px;
    height: 88px;
    position: absolute;
    left: 12px;
    top: 12px;}
    #order_list>ul>li>div .order_goods_data>h4 {
    padding: 12px 0 0 115px;
    font-size: 16px;
    color: #047aff;}
    #order_list>ul>li>div .order_goods_data>h5 {
    padding: 6px 0 0 115px;
    font-size: 12px;
    color: #949494;}
    #order_list>ul>li>div .order_goods_user {
    width: 384px;
    height: 110px;
    border-right: 1px solid #e6e6e6;
    position: relative;}
    #order_list>ul>li>div .order_goods_user>h4 {
    padding: 12px 0 0 24px;
    font-size: 16px;
    color: #202020;}
    #order_list>ul>li>div .order_goods_user>h5 {
    padding: 6px 0 0 24px;
    font-size: 12px;
    color: #949494}
    #order_list>ul>li>div .order_goods_price {
    width: 192px;
    height: 110px;
    border-right: 1px solid #e6e6e6;
    position: relative;}
    #order_list>ul>li>div .order_goods_price>h4 {
    padding: 12px 0 0 24px;
    font-size: 16px;
    color: #202020;}
    #order_list>ul>li>div .order_goods_price>h5 {
    padding: 6px 0 0 24px;
    font-size: 12px;
    color: #949494;}
    #order_list>ul>li>div .order_goods_see {
    width: 190px;
    height: 110px;
    position: relative;}
    #order_list>ul>li>div .order_goods_see>h4 {
    padding: 16px 0 0 79px;
    font-size: 14px;
    color: #0079ff;
    cursor: pointer;}
</style>