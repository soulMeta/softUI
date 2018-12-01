<template>
    <div class="about-footer">
        <div class="container">
            <div class="news-list w">

              <div>
                <ul>
                  <li>网站导航</li>
                  <li>使命</li>
                  <li>场景</li>
                  <li>产品</li>
                  <li>优势</li>
                  <li>合作品牌</li>
                  <li>联系我们</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>联系我们</li>
                  <li>关于我们</li>
                  <li>市场合作</li>
                  <li>渠道合作</li>
                  <li>媒体查询</li>
                </ul>
              </div>

              <div>
                <ul>
                  <li>联系方式</li>
                  <li>总部：西安 南稍门中贸广场12号1404</li>
                  <li>分部：西安</li>
                  <li>电话：0888 - 2880 9888</li>
                  <li>邮箱：ymyhr@e vent.cn</li>
                </ul>
              </div>

            </div>
            <div class="border-line">
            </div>
            <div class="copy">
                版权归 <span>SoftUI</span> 六小龄童组合
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutFooter"
    }
</script>

<style scoped>
  .about-footer{
    overflow: hidden;
    position: relative;
    height:460px;
    background: #f5f5f5;
  }
  .about-footer>.container>.news-list{
    display: flex;
    padding-top: 100px;
  }
  .about-footer>.container>.news-list>div{
    flex:0 0 33.333%;

  }
  .about-footer>.container>.news-list>div>ul{
    padding-left: 46px;
    padding-bottom: 26px;
  }

  .about-footer>.container>.news-list>div>ul>li{
    color: #666;
    font-size: 14px;
    margin-bottom: 16px;
  }
  .about-footer>.container>.news-list>div>ul>li:nth-of-type(1){
    color: #333;
    font-size: 18px;
    margin-bottom: 22px;
  }
  .about-footer>.container>.border-line{
      background-color: #eee;
      height: 1px;
      width: 100%;
      margin-top:10px;
  }
  .about-footer>.container>.copy{
    color: #999;
    font-size: 14px;
    padding: 24px 0;
    text-align: center;
  }
  .about-footer>.container>.copy>span{
    color: #1580ea;
  }

</style>
