<template>
    <div class="team">
        <div class="info-list w">
            <ul>

              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">李帅逼</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">顾丑逼</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">梁丑逼</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">李先生</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">李先生</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>
              <li>
                <div class="context">
                  <div class="my-photo">
                    <img src="../../assets/img/photo1.jpg">
                  </div>
                  <div class="first">市场合作</div>
                  <div class="second">
                    <p><img src="../../assets/img/about-h-1.png">李先生</p>
                    <p><img src="../../assets/img/about-h-2.png">029-7878-8888</p>
                    <p><img src="../../assets/img/about-h-3.png">ymyhr@goodboy.cn</p>
                  </div>
                </div>
              </li>


            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutTeam"
    }
</script>

<style scoped>
  .team{
    background-color: #f8f8f8;
    padding-top: 57px;
    width:100%;
  }
  .team>.info-list>ul{
      display: flex;
      flex-wrap: wrap;
      /* margin-left: -20px; */
      /* margin-right: -20px; */
  }
  .team>.info-list>ul>li{
    flex:0 0 33.3333%;

      margin:57px 0;
  }

  .team>.info-list>ul>li>.context{
    background: #fff;
    border-radius: 6px;
    box-shadow: 0 0 12px 0 hsla(0,0%,85.9%,.5);
    padding: 74px 42px 30px;
    position: relative;
    margin:0 20px;
    cursor:pointer;

  }
  .team>.info-list>ul>li>.context:hover::after{
    box-shadow: 15px 10px 25px #e5e5e5;
  }

  .team>.info-list>ul>li>.context:hover>.my-photo>img{
    transform: rotate(360deg)
  }

  .team>.info-list>ul>li>.context::after{
    width:100%;
    height:100%;
    content: "";
    position: absolute;
    left:0;
    top:0;
    transition:all ease .3s;
    overflow: hidden;
    border-radius: 6px;

  }


  .team>.info-list>ul>li>.context>.my-photo{
    border-radius: 50%;
    height: 98px;
    left: 50%;
    line-height: 98px;
    position: absolute;
    text-align: center;
    top: -25%;
    transform: translate(-50%);
    width: 98px;
    z-index: 99;

  }
  .team>.info-list>ul>li>.context>.my-photo>img{
    width:100%;
    height:100%;
    border-radius: 50%;
    overflow: hidden;
    transition: all ease-out 1.5s;
  }


  @keyframes rotate{from{transform: rotate(0deg)}
    to{transform: rotate(360deg)}
  }

  .team>.info-list>ul>li>.context>.first{
      font-size: 18px;
      padding-bottom: 20px;
      text-align: center;
  }
  .team>.info-list>ul>li>.context>.second>p{
    margin-bottom: 4px;
    color: #666;
    font-size: 16px;
  }
  .team>.info-list>ul>li>.context>.second>p>img{
    margin-right: 10px;
    vertical-align: middle;

  }

</style>