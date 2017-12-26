import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shou from '@/components/main/shou'
import jishu from '@/components/main/jishu'
import bawei from '@/components/main/bawei'
import houtai from '@/components/main/houtai'
Vue.use(Router)

const  routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/shou',
    name: 'shou',
    component: shou,
    children:[
      {
        path: '/jishu',
        name: 'jishu',
        component: jishu
      },
      {
        path: '/bawei',
        name: 'bawei',
        component: bawei
      },
      {
        path: '/houtai',
        name: 'houtai',
        component: houtai
      },
    ]
  },
]

const router =  new Router({
    routes
})

router.afterEach((to,from,next)=>{
  setTimeout(function () {
    // console.log('拦截');
}, 0);
})

export default router;
