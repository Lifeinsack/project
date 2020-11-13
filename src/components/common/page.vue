<template>
    <div class="pagination" >
        <el-pagination
        background
        layout="prev, pager, next"
        :page-size='size'
        :current-page='page'
        @current-change='changePage'
        :total='count'>
        </el-pagination>
    </div>
</template>

<script>
export default {
    data () {
      return {
        page:1,
        size:20
    }},
    props:{
        count:{
        default:''
        },
    },
    methods:{
        changePage(e){
        this.$emit('pagenation',e)
      },
    }
}
</script>
<style>
    .pagination{text-align:center;width: 100%;margin:30px auto;}
    .el-pagination.is-background .el-pager li:not(.disabled).active{background:#ff3535}
    .el-pagination.is-background .el-pager li:not(.disabled):hover {
    color: #ff3535;
}
</style>