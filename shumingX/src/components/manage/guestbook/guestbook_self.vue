<template>
 <div class="self">
 <h3>个人留言</h3>
  <el-input
  type="textarea"
  :rows="2"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
 </div>



</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>


<style scoped>
.self {
    margin-left:50px;
}
h3 {
    font-weight:normal;
    padding:20px 0px;
}
</style>
