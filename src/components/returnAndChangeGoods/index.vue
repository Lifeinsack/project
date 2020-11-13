<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                退换货列表
            </div>
            <div id="order_content">
                <div id="box_head">
                    <div>
                        时间选择：
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
                    <div>售后状态：
                        <el-select v-model="selvalue" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>售后类型：
                        <el-select v-model="seltype" placeholder="请选择">
                            <el-option
                            v-for="item in type"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div>联系人：<input type="text"></div>
                    <div>电话：<input type="tel"></div>
                    <div>售后编号：<input type="text"></div>
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
                                    <h4 @click="ordertail(1)">查看详情</h4> 
                                    <h4>取消售后</h4>
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
import page from '../common/page'
export default {
  name: 'index',
  components: {
    'page':page
  },
  data () {
    return {
        inputValue: '',
        value:'',
        seltype:'选项1',
        selvalue:'选项1',
        count:0,
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
          label: '待审核'
        }, {
          value: '选项3',
          label: '审核通过'
        }, {
          value: '选项4',
          label: '不通过'
        },{
          value: '选项4',
          label: '跟进中'
        },],
        type: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '退货'
        }, {
          value: '选项3',
          label: '换货'
        }, {
          value: '选项4',
          label: '重发货'
        }, {
          value: '选项3',
          label: '只退款'
        }, {
          value: '选项4',
          label: '补偿'
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
<style scoped>

    #order_content{width: 100%;background: #fff;overflow:hidden}
    #box_head{margin-top:15px;}
    .headlist{
    width: 1200px;
    margin: auto;
    background: #f8f8f8;
    height: 70px;
    line-height: 70px;
    color: #ff6930;
    text-indent: 22px;
    font-size:16px;
    font-weight: 600;}
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