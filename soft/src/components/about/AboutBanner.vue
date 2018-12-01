<template>
    <div class="banner">
          <div class="bannenr-container">
              <div class="text">
                  <div>为猿类提供最简单最好用的UI组件</div>
                  <div>softUI 轻便简洁您的必备</div>
              </div>
          </div>
    </div>
</template>

<script>
    export default {
        name: "AboutBanner"
    }
</script>

<style scoped>
  .banner{
    padding-top:81px;
    width:100%;
  }
  .banner>.bannenr-container{
    height: 396px;
    width: 100%;
    background: url("../../assets/img/about-banner.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    position: relative;
  }
  .banner>.bannenr-container:hover::after{
    background-color: rgba(100,100,100,0.25);
    box-shadow: 3px 3px 10px #ccc;
  }
  .banner>.bannenr-container::after{
      width:100%;
      height:100%;
      content: "";
      position: absolute;
      top:0;
      left:0;
      background-color: rgba(255,255,255,0);
      transition: all ease-out .5s;
  }
  .banner>.bannenr-container>.text{
      margin:auto;
      text-align: center;
      z-index: 99;
      text-shadow:2px 1px 1px #000,2px 1px 1px #666,2px 1px 1px #999,2px 1px 1px #aaa,2px 1px 1px #ccc,2px 1px 1px #fff;
  }

  .banner>.bannenr-container>.text>div:nth-of-type(1){
      color: #fff;
      font-size: 36px;
      margin-bottom: 6px;
  }
  .banner>.bannenr-container>.text>div:nth-of-type(2){
      color: #fff;
      font-size: 18px;
      letter-spacing: 0;
  }



</style>