<template>
  <div class="all w" >
    <div class="title">
          <span>
              联系我们
          </span>
    </div>
    <div class="content">
        <div class="left l">
            <img src="../../assets/img/map.png">
        </div>
        <div class="right l">
            <div>
              <h3>电话</h3>
              <p>0755 - 2660 9869</p>
            </div>
            <div>
              <h3>邮箱</h3>
              <p>marketing@eventist.cn</p>
            </div>
            <div>
              <h3>地址</h3>
              <p>深圳市宝安区新安街道创业二路259号219</p>
            </div>
            <div>
              <h3>公众号</h3>
                <img src="../../assets/img/weixin.png">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "PhoneUs"
  }
</script>

<style scoped>
  .all{
      background: #fff;
    padding-bottom: 146px;
  }
  .title{
    width:100%;
    text-align: center;
    padding: 100px 0;
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
      padding-bottom: 146px;
      margin:0 -45px;
      height:340px;
      box-sizing: border-box;
  }

  .content>.left{
      padding:0 75px 0 45px;
      height:340px;
  }
  .content>.left>img{
      height: 340px;
      width:661px;
  }
  .content>.right{
    width:299px;
    padding: 10px  45px 0 45px;
    height:330px;
  }
  .content>.right>div{
    margin-bottom: 23px;
  }
  .content>.right>div>h3{
    font-size: 18px;
    font-weight: 300;
    line-height: 25px;
  }
  .content>.right>div>p{
    color: #666;
    font-size: 14px;
  }

  .content>.right>div:last-of-type>img{
    height: 72px;
    margin-top: 4px;
    width: 72px;
  }

</style>
