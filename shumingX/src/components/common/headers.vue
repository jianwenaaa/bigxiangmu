<template>
   <div class='selfblog'>
        <h4>个人博客</h4>
        <p>当前登录账户：刘淑敏</p>
   </div>
</template>

<script>
export default {
  name: 'head',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .selfblog{
    height: 50px;
    background: orange;
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
