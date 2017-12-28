<template>
  <div class="back">
      <div>
          <headers></headers>
          <div class="main">
            <asides class="left"></asides>
            <router-view class="right"></router-view>
          </div>
      </div>
</div>
</template>

<script>
  import asides from "./common/asides"
  import headers from "./common/headers"
export default {
  name: 'back',
  data () {
    return {
       
    }
  },
  components:{
      asides:asides,
      headers:headers
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main{
  overflow: hidden;
}
.main .left{
  float: lefts
}
.main .right{
  float: left;

}
</style>
