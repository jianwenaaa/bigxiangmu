<template>
  <div>
    <el-table
      :data="tableData"
      border
      style="width: 65%"
      class='tab'>
      <el-table-column
        prop="date"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="分类"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="作者">
      </el-table-column>
      <el-table-column
        prop="date"
        label="发布时间">
      </el-table-column>
    </el-table>

    <div class="block blocks">
      <el-pagination
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
        tableData: [{
          date: '2016-05-02',
          name: '技术',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '八维',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '八维',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '技术',
          address: '上海市普陀区金沙江路 1516 弄'
        }, {
          date: '2016-05-03',
          name: '技术',
          address: '上海市普陀区金沙江路 1516 弄'
        },],
        input:''
      }
    },
    methods:{
      
    },
     created(){
         bus.$emit('name',this.tableData)
    },
}
</script>

<style>
    .tab{
        margin-left:.2rem;
    }
    .blocks{
      margin-left:2.5rem;
    }
</style>
