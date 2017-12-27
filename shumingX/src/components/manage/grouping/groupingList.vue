<template>
      <div class="classmain">
         <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column type="expand">
            <template scope="props">
                <el-table
                    :data="props.row.twoClass"
                    style="width: 100%"
                    :row-class-name="tableRowClassName">
                    <el-table-column
                      prop="cnname"
                      label="中文标识"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="enname"
                      label="英文标识"
                      width="180">
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
            </template>
          </el-table-column>
          <el-table-column
            label="中文名称"
            prop="oneClass.cnname">
          </el-table-column>
          <el-table-column
            label="英文名称"
            prop="oneClass.enname">
          </el-table-column>
         <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row,'one')">编辑</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row,'one')">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        size="tiny"
        :before-close="handleClose">
        <span>这是一段信息</span>
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
  data(){
    return{
        tableData:[],
        dialogVisible: false,
        state:"",
        oneId:"",
        one_enname:"",
        twoId:"",
    }
  }
}
</script>

<style scoped>
.classmain{
  padding:30px 20px;
  width: 700px;
}
 .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }

</style>
