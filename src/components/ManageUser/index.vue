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
                <div id="box_head">
                    <div>代理手机号：<input type="text"></div>
                    <div>代理名称：<input type="text"></div>
                    <div>订单状态：
                        <el-select v-model="selvalue" placeholder="请选择">
                            <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </div>
                    <div><input id="search" value="查询" type="button"></div>
                </div>
                <div id="order_list">
                    <el-table :data="tableData" border class="exam_table exam_btnManeger count_order">
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
  name: 'countOrder',
  components: {
    'todo-item':todoitem ,
    'page':page
  },
  data () {
    return {
        inputValue: '',
        value:'',
        count:0,
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
        options: [{
          value: '选项1',
          label: '直接邀请'
        }, {
          value: '选项2',
          label: '间接邀请'
        }],
             tableData:[],
        tableHeadr: [
        {
        label: '序号',
        key: 'count_number',
        width:'60'
        },
        {
        label: '代理编号',
        key: 'count_id',
        width:'120'
        },
        {
        label: '代理名称',
        key: 'count_name',
        width:'120'
        },
        {
        label:'代理手机号',
        key:'count_profit',
        width:'208'
        },
        {
        label:'代理等级',
        key:'count_num',
        width:'70'
        },
        {
        label:'状态',
        key:'shop_num',
        width:'70'
        },
        {
        label:'邀请时间',
        key:'shop_fall',
        width:'250'
        },
        {
        label:'邀请人数',
        key:'mail_price',
        width:'50'
        },
        {
        label:'本月销售额',
        key:'buy_money',
        width:'207'
        }]
        }
  },
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
</style>