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
                <h3><span v-for="(item,index) of vlist" :key="index" :class="index==vhide?'active':''" @click="tablelist(index)">{{item}}</span></h3>
                <div id="order_list">
                    <el-table :data="tableData" border class="exam_table exam_btnManeger count_order" v-if="vhide==0">
                    <el-table-column
                        v-for="info in tableHeadr" :key="info.key"     
                        :property="info.key"
                        :label="info.label"
                        :width="info.width"
                    >
                    <template slot-scope="scope">
                        {{scope.row[scope.column.property]}}  <!-- 渲染对应表格里面的内容 -->
                    </template>
                    </el-table-column>
                    </el-table>
                    <el-table :data="teamData" border class="exam_table exam_btnManeger count_order" v-else>
                    <el-table-column
                        v-for="info in teamHeadr" :key="info.key"     
                        :property="info.key"
                        :label="info.label"
                        :width="info.width"
                    >
                    <template slot-scope="scope">
                        {{scope.row[scope.column.property]}}  <!-- 渲染对应表格里面的内容 -->
                    </template>
                    </el-table-column>
                    </el-table>
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
    return {
        vhide:'0',
        vlist:['个人数据','团队数据'],
        list:[
            {
                content:'销量统计',href:'/myWallet'
            },
            {
                content:'财务明细',href:'/financeDeatils',
            }
        ],
        tableData:[],
        tableHeadr: [
        {
        label: '日销售额(元)',
        key: 'count_number',
        width:'130'
        },
        {
        label: '日订单数',
        key: 'count_id',
        width:'128'
        },
        {
        label: '日利润(元)',
        key: 'count_name',
        width:'128'
        },
        {
        label:'月销售额(元)',
        key:'count_profit',
        width:'128'
        },
        {
        label:'月订单数',
        key:'count_num',
        width:'128'
        },
        {
        label:'月利润(元)',
        key:'shop_num',
        width:'128'
        },
        {
        label:'累计销售额(元)',
        key:'shop_fall',
        width:'128'
        },
        {
        label:'累计订单数',
        key:'mail_price',
        width:'128'
        },
        {
        label:'累计利润(元)',
        key:'buy_money',
        width:'129'
        }],
        teamData:[],
        teamHeadr: [
        {
        label: '日销售额(元)',
        key: 'count_number',
        width:'97'
        },
        {
        label: '日订单数',
        key: 'count_id',
        width:'96'
        },
        {
        label: '日佣金(元)',
        key: 'count_name',
        width:'96'
        },
        {
        label:'日奖励',
        key:'count_profit',
        width:'96'
        },
        {
        label:'月销售额(元)',
        key:'count_num',
        width:'96'
        },
        {
        label:'月订单数',
        key:'shop_num',
        width:'96'
        },
        {
        label:'月佣金(元)',
        key:'shop_fall',
        width:'96'
        },
        {
        label:'月奖励',
        key:'mail_price',
        width:'96'
        },
        {
        label:'累计销售额(元)',
        key:'buy_money',
        width:'96'
        },
        {
        label:'累计订单数',
        key:'buy_money',
        width:'96'
        },
        {
        label:'累计佣金(元)',
        key:'buy_money',
        width:'97'
        },
        {
        label:'累计奖励',
        key:'buy_money',
        width:'97'
        }],
        }
  },
  methods:{
      tablelist(id){
        this.vhide=id
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
    .count_order{    width: 1156px;
    margin: 20px 22px 20px;}
    .count_order th.is-leaf{text-align:center}
    #order_content>h3{
    width: 200px;
    text-align: center;
    background: #f6f6f6;
    height: 36px;
    margin: 20px;}
    #order_content>h3>span{
    display: inline-block;
    height: 36px;
    font-size:16px;
    line-height: 36px;
    cursor:pointer;
    text-align: center;
    width: 100px;
    float: left;}
    .active{
    color: #fff;
    background: #ff6930;}
</style>