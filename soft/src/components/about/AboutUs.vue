<template>
  <div class="all w">
      <div class="title">
          <span>
              关于我们
          </span>
      </div>
      <div class="content">
          <div>Soul Mate成立于 2018 年 11 月 28 日，总部位于北京千峰互联。</div>
          <div>Soul Mate致力于提供 UIFramework 里面最专业、最有诚意的技术服务</div>
          <div>办会家为办会主办方和专业机构（会务/活动公司），提供基于会务流程的一站式技术服务：</div>
          <div>会邀约：在线网站搭建、注册报名、售票收费和会讯通知；</div>
          <div>会订房：在线订房、在线分房、签到分房系统；</div>
          <div>会签到：电子签到，为不同场景提供针对性的签到方案：微信签到、扫码签到、身份证签到、RFID签到和面部识别签到、闸机签到；</div>
          <div>会互动：场内互动，为场内互动提供多种互动方案：微信上墙、滚动抽奖、摇一摇、现场投票、微信抢红包、打赏等 14 大类；</div>
          <div>办会家已为：腾讯、创维、Oracle、比亚迪、中信银行等上千位主办方提供一站式会务技术服务。</div>
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
