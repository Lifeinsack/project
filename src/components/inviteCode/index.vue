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
            <div id="invitebox">
                <div>
                    <h3>
                    <span>团队邀请码：</span>7000</h3> 
                    <p>
                    <span>团队邀请码：</span>http://sdj.ssddjj.com/sdj.open/register.html?msg=aW52aXRlQ29kZT03MDAwJmludml0ZU5hbWU9JUU5JUJCJTg0JUU2JTk5JTkzJUU0JUI5JTg5Jmludml0ZUlkPTI5NTQ=</p>
                </div>
                <h4>团队邀请二维码</h4>
                <img src="http://vm.vvmang.com/common.api/QrCodeServlet?qrContent=http%3A%2F%2Fsdj.ssddjj.com%2Fsdj.open%2Fregister.html%3Fmsg%3DaW52aXRlQ29kZT03MDAwJmludml0ZU5hbWU9JUU5JUJCJTg0JUU2JTk5JTkzJUU0JUI5JTg5Jmludml0ZUlkPTI5NTQ%3D">
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
                content:'团队列表',href:'/ManageUser'
            },
            {
                content:'手工邀请',href:'/inviteUser',
            },
            {
                content:'扫码邀请',href:'/inviteCode'
            }
        ],
        
      };
  },
  }
</script>
<style>
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
    #invitebox{
        width: 1200px;
        margin: auto;
        background: #fff;
        overflow: hidden;}
    #invitebox>div{
    overflow: hidden;
    height: 95px;
    width: 1154px;
    margin: 22px 22px 0;
    border: 1px solid #e6e6e6;
    border-radius: 4px;}
    #invitebox>div>h3{
        border-bottom: 1px solid #e6e6e6;
        border-radius: 4px 4px 0 0;
        background: #f6f6f6;
        height: 41px;
        line-height: 41px;
        font-size: 14px;
    }
    #invitebox>div>h3>span{
        color: #949494;
        padding-left: 12px;
        font-size: 14px;}
    #invitebox>div>p{
        border-bottom: 1px solid #e6e6e6;
        border-radius: 4px 4px 0 0;
        height: 53px;
        line-height: 53px;
        font-size: 12px;}
    #invitebox>div>p>span{
        color: #949494;
        padding-left: 12px;}
    #invitebox>h4{
    padding: 16px 0 0 38px;
    color: #202020;
    font-weight: 600;
    font-size: 14px;}
    #invitebox>img{
    width: 192px;
    height: 192px;
    padding: 14px 0 0 22px;}
</style>