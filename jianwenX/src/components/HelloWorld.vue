<template>
<div class='hello'>
      <div class='box'>
        <h2>个人博客</h2>
        <form action="">
         <p><span><b>账号:</b><input type='text' v-model="passname"></span></p>
          <p><span><b>密码:</b><input type='password' v-model="password"></span></p>
          <button @click='click()'>登录</button>
        </form>
      </div>
</div>
</template>

<script>
// const {
//   sqlHandle,
//   readHandle,
//   searchHandle,
//   searchHandleNormal,
//   query
// } = require('../config/connect_db.js')
export default {
  data () {
    return {   
      'passname':'',
      'password':'',
      'data':''
    }
  },
  methods: {
    click:function(){
      this.$router.push({name:"shou",params:{name:this.passname}})
    }
  },
    created(){
    this.$http({
            url: '/page',
            method: 'GET'
        }).then((res) => {
           this.data = res.data.data;
        });
     }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .hello{   
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      background:#fff;
      background-size:100% 100%;
      box-sizing:border-box;
    }
    .box{
      border:3px solid #ef5a00;
      position:fixed;
      left:0;
      top:0;
      bottom:0;
      right:0;
      margin:auto;
      width:250px;
      height:300px;
      background:#fff;
    }
    .box h2{
      margin:.05rem .1rem;
      color:#ef5a00;
    }
    .box p{
     text-align:center;
     margin-top:.4rem;   
    }
    .box span{
     border:1px solid #ccc;
     padding: .1rem;
    }
    .box input{
      border:0;
      background:#fbffbd;
    }
    .box button{
      width:2rem;
      margin-left:.25rem;
      margin-top:.3rem;
      background:#ef5a00;
      color:#fff;
      height:.3rem;
    }
</style>
