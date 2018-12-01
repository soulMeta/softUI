<template>
  <div class="s-l-all">
    <mange-header></mange-header>
    <div class="s-l-nav">
    
    <mange-main></mange-main>
      
      <div class="right">
        <router-view></router-view>
      </div>
  </div>
  </div>

</template>

<script>
    import "../assets/css/base.css"
    import MangeHeader from "../components/mange/MangeHeader";
    import MangeMain from "../components/mange/MangeMain";
    export default {
        name: "Mange",
      components: {MangeMain, MangeHeader}
    }
</script>

<style>
html,body,#app{
  height:100%;
}
.s-l-nav{
  height:100%;
  width:100%;
  padding-top:70px;
}
.s-l-nav .s-l-first{
  position: fixed;
  height:100%;
  overflow: auto;
}
.s-l-nav .s-l-first::-webkit-scrollbar{
  display: none;
}
.right{
  height:100%;
  overflow: auto;
}
.s-l-all{
    height:100%;
    width:100%;
}
</style>


<style scoped>
  

</style>
