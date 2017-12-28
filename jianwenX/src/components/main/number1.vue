<template>
  <div>
    <el-table
      :data="item" 
      height="400"
      border
      style="width: 65%"

      class='tab'>
      <el-table-column
        prop="id"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="tel"
        label="发布时间">
      </el-table-column>
    </el-table>

    <div class="block blocks">
      <el-pagination @current-change="Pagingjump"
        layout="prev, pager, next"
        :total="50">
      </el-pagination>
</div>
  </div>
  
</template>

<script>
export default {
  
    data() {
      return {
        input:'',
        item:[]
      }
    },
    methods:{
       Pagingjump(page){
            this.$http({
                 url:'/page',
                 method:'get',
                 pageSize:page,
            }).then(res=>{
               this.item = res.data      
            })
        }
    },
     created(){
         this.$http({
           url:'/page',
           method:'get',
            pageSize:1,
         }).then((res)=>{
           this.item = res.data         
         })
         bus.$emit('name',this.tableData)
    },
}
</script>

<style>
    .tab{
        margin-left:1.5rem;
    }
    .blocks{
      margin-left:4rem;
      margin-top:.4rem;
    }
</style>
