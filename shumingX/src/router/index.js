import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'
import back from '@/components/back'

import literary_add from '@/components/manage/literary/literary_add'
import literary_list from '@/components/manage/literary/literary_list'

import interface_add from '@/components/manage/interface/interface_add'
import interface_list from '@/components/manage/interface/interface_list'


import grouping_one from '@/components/manage/grouping/grouping_one'
import grouping_two from '@/components/manage/grouping/grouping_two'
import groupingList from '@/components/manage/grouping/groupingList'

import guestbook_self from '@/components/manage/guestbook/guestbook_self'
import guestbook_blog from '@/components/manage/guestbook/guestbook_blog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/helloworld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/back',
      name: 'back',
      component: back,
         children: [
        {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
        },
        {
          path:"literary_add",
          name:"literary_add",
          component:literary_add 
        },
         {
          path:"literary_list",
          name:"literary_list",
          component:literary_list
        },
        {
          path:"interface_add",
          name:"interface_add",
          component:interface_add 
        },
        {
          path:"interface_list",
          name:"interface_list",
          component:interface_list
        },
         {
          path:"grouping_one",
          name:"grouping_one",
          component:grouping_one 
        },
        {
          path:"grouping_two",
          name:"grouping_two",
          component:grouping_two 
        },
         {
          path:"groupingList",
          name:"groupingList",
          component:groupingList 
        },
        {
          path:"guestbook_self",
          name:"guestbook_self",
          component:guestbook_self 
        },
         {
          path:"guestbook_blog",
          name:"guestbook_blog",
          component:guestbook_blog 
        }
      ]
    }
  ]
})
