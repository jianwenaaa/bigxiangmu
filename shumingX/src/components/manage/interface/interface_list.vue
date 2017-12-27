<template>
      <div class="classmain">
         <el-table
          :data="formData"
          border
          style="width: 800px" @row-dblclick.self="dbclick">
          <el-table-column
            label="标题"
            width="180">
            <template scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.title }}</span>
            </template>
          </el-table-column>
         <el-table-column
            label="前后端分类"
            width="180">
            <template scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.backorfont }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="时间"
            width="180">
            <template scope="scope">
              
              <span style="margin-left: 0px">{{ scope.row.time }}</span>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="nowPage"
          :page-sizes="[2, 5, 10, 15]"
          :page-size="everyrows"
          layout="total, sizes, prev, pager, next, jumper"
          :total="this.olddata.length">
        </el-pagination>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span>删除：{{deleteItem}}</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleOK">确 定</el-button>
        </span>
      </el-dialog>
      </div>
</template>
<script>
export default {
  name: 'index',
 data() {
      return {
        olddata:[],
        formData:[],
        everyrows:5,
        nowPage:1,
         dialogVisible: false,
         deleteItem:"",
         id:""
      };
    }
}
</script>

<style scoped>
.classmain{
  padding:30px 20px;
}
p{
  font-size: 20px;
  font-weight: bold;
  padding:10px;
}
</style>
