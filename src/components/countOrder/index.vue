<template>
    <div id="content">
        <div id="box">
            <div class="headlist">
                <ul>
                 <todo-item v-for="(item,index) of list"
                    :key="index"
                    :content="item.content"
                    :href="item.href"
                    :class="index==2?'liston':''"
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
                    <div>产品编号：<input type="text"></div>
                    <div>产品名称：<input type="text"></div>
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
                    <el-table-column label="操作">
                        <template slot-scope="scope" class="exam_btn">
                        <el-button type="text" size="large" @click="dialogAdditem(2,scope)">编辑</el-button>
                        <el-button type="text" size="large" @click="del(scope.$index,scope.row.e_id)" class="exam_delbtn" >删除</el-button>
                        <el-button  @click="hrefto(scope.row.e_id)" type="text" size="large">管理试题</el-button>
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
        selvalue:'',
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
          label: '待发货'
        }, {
          value: '选项3',
          label: '已发货'
        }, {
          value: '选项4',
          label: '已取消'
            }],
             tableData:[],
        tableHeadr: [
        {
        label: '序号',
        key: 'count_number',
        width:'50'
        },
        {
        label: '产品编号',
        key: 'count_id',
        width:'180'
        },
        {
        label: '商品名称',
        key: 'count_name',
        width:'180'
        },
        {
        label:'订单利润',
        key:'count_profit',
        width:'109'
        },
        {
        label:'订单数量',
        key:'count_num',
        width:'106'
        },
        {
        label:'商品数量',
        key:'shop_num',
        width:'106'
        },
        {
        label:'商品总额',
        key:'shop_fall',
        width:'106'
        },
        {
        label:'运费总额',
        key:'mail_price',
        width:'106'
        },
        {
        label:'付款总额',
        key:'buy_money',
        width:'106'
        }]
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
    .count_order{    width: 1156px;
    margin: 20px 22px 20px;}
    .count_order th.is-leaf{text-align:center}
</style>