<template>
   <div class='selfblog'>
        <h4>个人博客</h4>
        <p>当前登录账户：{{username}}</p>
   </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
        username:""
    }
  },
    mounted(){
      console.log(sessionStorage.getItem("userName"))
      this.username=sessionStorage.getItem("userName")
     
    }
}
</script>

<style scoped>
  .selfblog{
    height: 50px;
    background: #909399;
    overflow: hidden;
    line-height:50px;
    padding:0 20px;
    color:#fff;
  }
  div h4{
    float: left;
     font-weight: normal;
  }
  div p{
    float: right
  }

</style>
