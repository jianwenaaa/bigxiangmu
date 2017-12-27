<template>
  <div class='box'>
      <h2>
        <span>个人博客</span>
        <span>
            <router-link :to="{ path: '/number1' }" tag='el-button' >首页</router-link>
            <router-link :to="{ path: '/jishu' }"  tag='el-button'>前端</router-link>
            <router-link :to="{ path: '/bawei' }"  tag='el-button'>运维</router-link>
            <router-link :to="{ path: '/houtai' }" tag='el-button'>留言板</router-link>
        </span>
      </h2>
      <img src="../../assets/beijing.jpg" alt="">
      
      <div class="main">
         
      <router-view />
      <div class='right'>
                    <h3>全站搜索</h3>
                    <p>
                        <el-input v-model="input" placeholder="请输入内容" class='ipt' size="small"></el-input> 
                        <el-button type="primary" size="small"  @click='click()' class='btn'>搜索</el-button>
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
            val:'',
            newdata:''
        }
    },
    methods:{
        click:function(){
            console.log(this.input)
            // for(let i=0;i<this.val.length;i++){
            //     if(this.input == this.val[i]['name']){
                    
            //     }
            // }
        },
    },
     created(){
        bus.$on('name',(val)=>{  
            this.val = val;
        });
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
    button{
        border-radius:0;
        height:.35rem;
        
    }
    .main{
        width:98%;
        margin-top:.2rem;
        position: relative;
    }
    .right{
        width:3rem;
        height:3.9rem;
        position: absolute;
        right:0;
        top:0;
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
        margin-top:;
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
       line-height:.4rem;
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
     .btn{
         border-radius:.05rem;
         height:.3rem;
     }
     img{
         height:3rem;
         width:100%;
         margin-top:.1rem;
     }
</style>
