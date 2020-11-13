<template>
    <div id="content">
        <div id="box">
            <div id="order_content">
                <div id="boxlist">
                    <h3 @click="histo()"><img src="../../../static/img/back.png">产品详情</h3>
                    <div id="cnt">
                        <div id="goods"><h3>{{shoptitle}}</h3>
                            <div>
                                <img :src="shopimg">
                            </div> 
                            <p class="goods_time">
                                <span>
                                    <span>
                                        <img src="../../../static/img/qg.png">
                                    </span>
                                </span>
                            </p> 
                            <h4></h4><button>转发文案</button>
                        </div>
                        <div id="fr">
                            <div id="user_fr">
                                <p>收货人信息：</p> 
                                <textarea placeholder="请复制收货人信息，会自动拆分，格式为： 地址 联系人 电话  备注"></textarea> 
                                <h3  @click="dialogTableVisible = true">选择地址</h3> 
                                <p>地址：</p> 
                                <input type="text"> 
                                <p>姓名：</p> 
                                <input type="text"> 
                                <p>手机：</p> 
                                <input type="text"> 
                                <p>备注：</p> 
                                <textarea></textarea> 
                                <button>提交</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
                <el-table-column property="date" label="日期" width="150"></el-table-column>
                <el-table-column property="name" label="姓名" width="200"></el-table-column>
                <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
             <div slot="footer" class="dialog-footer diabtn">
                <button type="button" class="el-button el-button--primary rf" @click="tablenr()"><span>添加新地址</span></button>
            </div>
        </el-dialog>
        <el-dialog title="添加新地址" :visible.sync="dialogFormVisible">
            <p style="margin-top: 15px;">
                <el-input v-model="tname" placeholder="请输入收货人姓名"></el-input>
            </p>
            <p style="margin-top: 15px;">
                <el-input v-model="tphone" placeholder="请输入收货人电话"></el-input>
            </p>
            <p style="margin-top: 15px;">
                <el-input v-model="tcity" placeholder="请输入省市区"></el-input>
            </p>
            <p style="margin-top: 15px;">
                <el-input v-model="taddress" placeholder="请输入详细地址"></el-input>
            </p>
            <div slot="footer" class="dialog-footer diabtn">
                <button type="button" class="el-button el-button--primary rf"><span>确定</span></button>
            </div>
        </el-dialog>
        
    </div>
</template>
<script>
export default {
    name: 'index',
    data () {
        return {
            dialogTableVisible:false,
            dialogFormVisible:false,
            tname:'',
            tphone:'',
            tcity:'',
            taddress:'',
            gridData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
            }],
            shopimg:'',
            shoptitle:'',
        }
    },
    methods:{
        histo(){
            this.$router.go(-1)
        },
        tablenr(){
            this.dialogFormVisible=true,
            this.dialogTableVisible=false
        },
    },
    mounted(){
        let up ={
            service:'App.Getgoodsdetail_Getgoodsdetail.GetGetgoodsdetail',
            id:this.$route.query.id
        }  
       this.$axios.post(this.HOME,up).then(e=>{
           console.log(e.data.data.info.goods)
           this.shoptitle=e.data.data.info.goods.title
           this.shopimg=e.data.data.info.goods.thumb
       })
    }
  }
</script>
<style scoped>
 
    #order_content{width: 100%;background: #fff;overflow:hidden;}
    #box{padding-top:20px;}
    #boxlist{width: 1200px;
    margin: auto;
    background: #fff;
    overflow: hidden;}
    #boxlist>div{
    font-size: 14px;
    color: #202020;
    display: inline-block;
    }
    #boxlist>h3>img{
    width: 26px;
    height: 26px;
    vertical-align: middle;
    padding-right: 6px;
    cursor: pointer;
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
    #cnt{
    width: 1154px;
    margin: 20px 23px;
    min-height: 875px;
    height: auto;
    margin-bottom: 60px;}
    #cnt>div{
    display: inline-block;
    vertical-align: top;}
    #goods{
    width: 340px;
    height: 875px;
    padding-right: 14px;
    border-right: 1px solid #dedede;}
    #fr{
    width: 760px;
    height: auto;
    margin-left: 24px;}
    #goods>h3{
    font-size: 20px;
    color: #202020;
    font-weight: 600;
    line-height: 26px;
    margin-top: 15px;
    margin-bottom: 15px;}
    #goods>div{
    width: 340px;
    height: 340px;
    margin-bottom: 15px;}
    #goods>div>img{
    width: 340px;
    height: 340px;}
    #goods .goods_time{
    line-height: 22px;
    padding-bottom: 12px;
    border-bottom: 1px solid #dedede;}
    #goods>h4{
    font-size: 14px;
    color: #202020;
    height: 342px;
    line-height: 22px;
    padding: 12px 0 15px;
    overflow: auto;
    width: 100%;
    border-bottom: 1px solid #dedede;}
    #goods .goods_time>span{
    display: inline-block;
    width: 179px;
    height: 22px;
    vertical-align: middle;
    font-size: 12px;
    position: relative;
    text-indent: 72px;
    color:#ff3535;}
    #goods .goods_time>span>span{
    position: absolute;
    display: inline-block;
    left: 0;
    top: 0;
    width: 64px;
    height: 22px;
    background: #ff3535;}
    #goods .goods_time>span>span>img{
    position: absolute;
    left: 6px;
    top: 6px;}
    #goods>button{
    border: 1px solid #ff3535;
    border-radius: 16px;
    width: 100%;
    height: 34px;
    background: #fff;
    font-size: 14px;
    color: #ff3535;
    margin-top: 15px;}
    #user_fr{
    margin-bottom: 50px;}
    #user_fr>p{
    padding-top: 20px;
    color: #949494;
    font-size: 14px;}
    #user_fr>textarea{
    width: 360px;
    height: 100px;
    border: 1px solid #bbb;
    margin-top: 15px;
    text-indent: 10px;
    resize: none;
    font-size: 16px;}
    #user_fr>h3{
    line-height: 35px;
    color: #047aff;
    font-size: 15px;
    cursor: pointer;}
    #user_fr>input{
    width: 360px;
    height: 40px;
    border: 1px solid #bbb;
    margin-top: 15px;
    text-indent: 10px;}
    #user_fr>button{
    display: block;
    background:#ff3535;
    border-radius: 4px;
    width: 240px;
    height: 34px;
    margin:0;
    margin-top: 15px;
    color: #fff;
    border: none;}
    .diabtn{overflow:hidden}
</style>