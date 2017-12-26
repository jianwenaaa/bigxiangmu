<template>
  <div class='box'>
      <h2>
        <span>个人博客</span>
        <span>当前登录账号:{{this.$route.params.name}}</span>
      </h2>
      <div class="main">
        <el-breadcrumb separator-class="el-icon-arrow-right" class='nav'>
            <el-breadcrumb-item :to="{ path: '/number1' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  :to="{ path: '/jishu' }">技术</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/bawei' }">八维</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/houtai' }">后台</el-breadcrumb-item>
        </el-breadcrumb>
      <router-view />
      <div class='right'>
                    <h3>全站搜索</h3>
                    <p>
                        <el-input v-model="input" placeholder="请输入内容" class='ipt' size="small"></el-input> 
                        <el-button type="primary" size="small">搜索</el-button>
                    </p>
                   <h3>点击排行</h3>
                    <ol>
                        <li>
                            <p> 
                                <b>1</b>
                                呀呀呀
                            </p>        
                            <div class="block">
                                 <em>★</em> 
                                <span>1</span>
                            </div>
                        </li>
                            <li>
                            <p> 
                                <b>1</b>
                                呀呀呀
                            </p>
                            <div class="block">
                                <em>★</em>
                                <span>1</span>
                            </div>
                        </li>
                            <li>
                            <p> 
                                <b>1</b>
                                呀呀呀
                            </p>
                            <div class="block">
                                 <em>★</em>
                                <span>1</span>
                            </div>
                        </li>    
                    </ol>
                   <h3>最新文章</h3>
                     <ol>
                            <li>
                                <p> 
                                    <b>1</b>
                                    呀呀呀
                                </p>        
                                <time>1997/12/07</time>
                            </li>
                                <li>
                                <p> 
                                    <b>1</b>
                                    呀呀呀
                                </p>
                                <time>1997/12/07</time>
                            </li>
                                <li>
                                <p> 
                                    <b>1</b>
                                    呀呀呀
                                </p>
                               <time>1997/12/07</time>
                            </li>    
                        </ol>
            </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            input:'',
            activeName: '',
        }
    },
}
</script>

<style scoped>
    h2{     
        background:#87a7c7;
        height:.5rem;
        line-height:.5rem;
        display:flex;
        justify-content:space-between;
        padding:0 .1rem;
    }
    .nav{
        margin-bottom:.2rem;
        margin-left:.2rem;
    }
    .main{
        width:98%;
        margin-top:.4rem;
        position: relative;
    }
    .right{
        width:3rem;
        height:3.5rem;
        position: absolute;
        right:0;
        top:.3rem;
        border-radius:.1rem;
        background:#fff7b5;
        padding-top:.1rem;
    }
    .right h3{
        background:#00f5ff;
        text-align:center;
        margin: .05rem;
        padding:.05rem;
        border-radius:.1rem;
        width:2.5rem;
        color:#fff;
        margin-left:.2rem;
        height:.15rem;
        line-height:.15rem;
    }
    .right p .ipt{
        width:2rem;
        margin-left:.2rem;
       
    }
    .right ul{
        list-style:square;
    }

     ol li{
       display:flex;
       line-height:.3rem;
       justify-content: space-between;
       padding:0 .3rem;
    }
    ol li .block{
        display:flex;
        position: relative;
    }
     ol li .block em{
         font-style:normal;
         font-size:.18rem;
     }
     ol li .block span{
        position: absolute;
        left:.2rem;
        top:.01rem;
     }
     ol li b{
         background:red;
         width:.2rem;
         height:.2rem;
         display:inline-block;
         text-align: center;
         line-height: .2rem;
     }
</style>
