<template>

      <div class="s-l-header">
        <div class="s-l-left"><img src="../../assets/img/head.jpg"><p>soft-UI</p></div>
        <div class="s-r-right">
          <i class="iconfont">&#xeed4;</i>
          <div class="l">
            <input type="text" placeholder="Search...">
            <i class="iconfont">&#xe678;</i>
          </div>
          <ul>
            <li><i class="iconfont">&#xe63d;</i><i class="iconfont">&#xe63e;<p>12</p></i></li>
            <li><i class="iconfont">&#xe6f1;</i><i class="iconfont">&#xe63e;<p>3</p></i></li>
            <li>
              <a href="#">
                <img src="../../assets/img/team.jpg">用户名
                <span  :class="[!da?'listshow':'']" @click="show"></span>
              </a>
            </li>
            <div class="s-l-down" v-if="da">
              <p>设置</p>
              <p><router-link to="/">退出</router-link></p>
            </div>
          </ul>

        </div>

      </div>


</template>

<script>
    export default {
        name: "MangeHeader",
      data(){
          return{
            da:false
          }
      },
      methods:{
          show(){
            this.da=!this.da;
          }
      },
      mounted(){

      }
    }
</script>

<style scoped>
  .listshow{
    display:block
  }
  .s-l-header{
    width:100%;
    height:70px;
    padding:7px 0;
    background:#333;
    position:fixed;

  }
  .s-l-header  .s-l-left{
    width:20%;
    float:left;
    padding:0 40px;
  }
  .s-l-header  .s-l-left img{
    width:56px;
    height:56px;
    border-radius:10px;
    float:left;
  }
  .s-l-header  .s-l-left p{
    font-size:26px;
    color:#fff;
    line-height:56px;

  }

  .s-l-header  .s-r-right{
    width:75%;
    float:right;
    height:56px;
    padding:5px 0;

  }
  .s-l-header  .s-r-right .iconfont{
    font-size:30px;
    color:#fff;
    line-height:45px;
    float:left;
  }
  .s-l-header  .s-r-right .l{
    width:30%;
    border:1px solid #ccc;
    border-radius:10px;
    padding:0 10px;
    margin-left:40px;
    float:left;
  }
  .s-l-header  .s-r-right .l input{
    width:100px;
    height:45px;
    float:left;
    border:0;
    background:0;
    color:#fff;
    font-size:24px;
  }
  ::-webkit-input-placeholder{
    color:#fff;
  }
  .s-l-header  .s-r-right .l i.iconfont{
    font-size:26px;
    float:right;
    line-height:45px;
    color:#fff;
  }
  .s-l-header  .s-r-right ul{
    float:right;
    padding:0 60px;
    position:relative;
  }
  .s-l-header  .s-r-right ul li{
    float:left;
    padding:0 15px;

  }
  .s-l-header  .s-r-right ul> li:nth-child(1){
    position:relative;
    padding-top:3px;
  }
  .s-l-header  .s-r-right ul> li:nth-child(1) i.iconfont:nth-of-type(1){
    font-size:30px;
    line-height:45px;
  }
  .s-l-header  .s-r-right ul>li:nth-child(1) i.iconfont:nth-of-type(2){
    font-size:26px;
    position:relative;
    top:-14px;
    left:-14px;
    color:#ff0050;
  }
  .s-l-header  .s-r-right ul>li:nth-child(1) i.iconfont:nth-of-type(2) p{
    position:absolute;
    top:0px;
    left:5px;
    font-size:10px;
  }
  .s-l-header  .s-r-right ul>li:nth-child(2){
    position:relative;
  }
  .s-l-header  .s-r-right ul>li:nth-child(2) i.iconfont:nth-of-type(2){
    font-size:26px;
    position:relative;
    top:-10px;
    left:-14px;
    color:#ff0050;

  }
  .s-l-header  .s-r-right ul>li:nth-child(2) i.iconfont:nth-of-type(2) p{
    position:absolute;
    top:0px;
    left:10px;
    font-size:10px;
  }
  .s-l-header  .s-r-right ul>li:nth-child(3) a{
    line-height:45px;
    color:#fff;
    display:block;
    height:45px;
    position:relative;
  }
  .s-l-header  .s-r-right ul>li:nth-child(3) a img{
    float:left;
    width:45px;
    height:45px;
    border-radius:50%;
    margin-right:5px;
  }
  .s-l-header  .s-r-right ul>li:nth-child(3)  span{
    position:absolute;
    top:18px;
    left:126px;
    width:0;
    height:0;
    border-top:7px solid #fff;
    border-left:7px solid #333;
    border-bottom:7px solid #333;
    border-right:7px solid #333;
  }
  .s-l-header  .s-r-right  ul .s-l-down{
    width:80px;
    background:#333;
    position:absolute;
    left:332px;
    top:50px;
  }
  .s-l-header  .s-r-right  ul .s-l-down p{
    line-height:60px;
    text-align:center;
    color:#fff;
  }
  .s-l-header  .s-r-right  ul .s-l-down p a{
    color:#fff;
  }



















</style>
