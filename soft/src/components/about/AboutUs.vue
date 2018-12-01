<template>
  <div class="all w">
      <div class="title">
          <span>
              关于我们
          </span>
      </div>
      <div class="content">
          <div>Soul Mate成立于 2018 年 11 月 28 日，总部位于北京千峰互联。</div>
          <div>SoftUI打造轻量，好看，好用的UI组件</div>
          <div>简化开发流程，我们致力于提供好看快捷方便使用的组件让你体会真正的实惠</div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "AboutUs"
    }
</script>

<style scoped>
  .all{
      height:100%;
      /*width:100%;*/
      padding:100px 0;
  }
  .title{
    width:100%;
    text-align: center;
    padding-bottom: 10px;
    margin:auto;
  }
  .title>span{
      position: relative;
      color: #333;
      font-size: 24px;
      height:100%;
      padding-bottom: 10px;
  }
  .title>span::before{
    background-image: linear-gradient(-270deg,#eee,#aaa,#666,#333,#000);
    bottom: -2px;
    content: "";
    height: 5px;
    left: 32px;
    position: absolute;
    width: 26px;
    z-index: 100;
  }
  .title>span::after{
    background-color: #d2d2d2;
    bottom: 0;
    content: "";
    height: 1px;
    left: -50%;
    position: absolute;
    width: 200%;
  }
  .content{
      font-size: 14px;
      line-height: 24px;
      padding:36px 0 0 0;

  }
  .content>div{
      margin-bottom: .5rem;
  }
</style>
