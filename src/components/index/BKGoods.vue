<template>
    <div id="content">
        <div id="box">
            <div class="headzb"><img src="../../../static/img/time.png">好评返现<p ><input type="text" placeholder="请输入商品关键字"><span>搜索</span></p></div>
            <div id="goods_list">
                <ul>
                    <li v-for="(item,ix) in sdlist" :key="ix">
                        <h3 class="goods_tlt">{{item.title}}</h3>
                        <div class="goods_img">
                            <img src="../../../static/img/fuli.png" class="td_qd"> 
                            <img :src="item.thumb" class="goodsBigImg">
                        </div>
                        <p class="goods_time"><span><span><img src="../../../static/img/xsqg.png"></span>0天 21:19:14
                            </span></p>
                        <p class="go"><span>去抢购</span> <b>去转发</b></p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    #goods_list>ul>li:nth-child(4n-3) {
        margin-left: 0;
    }
    #goods_list>ul>li{
        height: 447px;
        width: 291px;
        background: #fff;
        margin-bottom: 12px;
        margin-left: 12px;
        border-radius: 6px;
        display: inline-block;
        position: relative;
        overflow: hidden;
    }
    .goods_tlt {
        font-size: 17px;
        color: #202020;
        font-weight: 600;
        padding: 12px 19px 11px 16px;
        border-bottom: 1px solid #ececec;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;}
    .goods_img{
        width: 258px;
        height: 258px;
        margin: 5px 16px 8px;
        position: relative;
        overflow: hidden;
        border-radius: 6px;
        border: 1px solid #f2f2f3;
    }
    .goods_img>.td_qd{
        position: absolute;
        left: 0;
        top: 0;
        width: 48px;
        height: 20px;
    }
    .goods_img>.goodsBigImg{
    width: 100%;
    height: 100%;}
    .goods_time {
    line-height: 22px;
    margin: 0 16px;
    position: relative;}
    .goods_time>span{
    display: inline-block;
    width: 160px;
    height: 22px;
    vertical-align: middle;
    font-size: 12px;
    position: relative;
    text-indent: 72px;
    color: #ff3535;
    border-radius: 6px;
    overflow: hidden;
    background: #fff3ef;}
    .goods_time>span>span {
        position: absolute;
        display: inline-block;
        left: 0;
        top: 0;
        width: 64px;
        height: 22px;
        background: #ff3535;
    }
    .goods_time>span>span>img {
        position: absolute;
        left: 6px;
        top: 6px;
    }
    .go{
    width: 256px;
    height: 29px;
    line-height: 29px;
    margin: 12px 16px 0;
    border: 1px solid #ff3535;
    font-size: 13px;
    border-radius: 16px;
    overflow: hidden;
    position: relative;}
    .go>b, .go>span{
    display: inline-block;
    width: 50%;
    position: absolute;
    top: 0;
    font-size: 13px;
    text-align: center;
    line-height: 29px;}
    .go>span{
    left: 0;
    color: #ff3535;
    background: #fff;}
    .go>b{
    right: 0;
    background: #ff3535;
    color: #fff;}
</style>
<script>
export default {
  name: 'index',

  data () {
    return {
        username:'',
        password:'',
        sdlist:[]
    }
  },
   mounted(){
       var up ={
            service:'App.Shopindex_Shopindex.GetShopindexList',
            page:1,
            pageSize:20,
            is_group_buy:1
        }
       this.$axios.post(this.HOME,up)
        .then(e=>{
            for(var i in e.data.data.info){
                this.sdlist.push(e.data.data.info[i])
            }
        })
   }
  }
  </script>