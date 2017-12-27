<template>
<div>
    <div class='box'>
    <el-menu default-active="2" class="el-menu-vertical-demo lefts" @open="handleOpen" @close="handleClose">
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-rank"></i>文章管理</template>
            <el-menu-item index="1-1"><router-link to="/back/literary_add">添加文章</router-link></el-menu-item>
            <el-menu-item index="1-2"><router-link to="/back/literary_list">文章列表</router-link></el-menu-item>
        </el-submenu>
        
        <el-submenu index="2">
        <template slot="title"><i class="el-icon-zoom-in"></i>分类管理</template>
        <el-menu-item index="2-1"><router-link to="/back/grouping_one">添加一级分类</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/back/grouping_two">添加二级分类</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/back/groupingList">分类列表</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="3">
        <template slot="title"><i class="el-icon-circle-check-outline"></i>接口操作</template>
        <el-menu-item index="3-1"><router-link to="/back/interface_add">添加接口文档</router-link></el-menu-item>
            <el-menu-item index="3-2"><router-link to="/back/interface_list">接口列表</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="4">
        <template slot="title"><i class="el-icon-message"></i>留言板管理</template>
        <el-menu-item index="4-1"><router-link to="/back/guestbook_self">个人简介留言</router-link></el-menu-item>
        <el-menu-item index="4-1"><router-link to="/back/guestbook_blog">博客留言</router-link></el-menu-item> 
        </el-submenu>
      </el-menu>
    </div>
</div>
 
</template>


<script>
export default {
  name: 'head',
  data () {
    return {
        
    }
  },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
  .box{
    float:left;
  }
  .box .lefts {
    width: 200px;
  }
  .right{
    float:left;
  }
</style>
