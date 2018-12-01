<template>
  <div class="case_box">
    <div class="case_center">
      <div class="case_l">

        <h1>案例展示</h1>
        <p class="case_p">收集基于softUIkit框架制作的优秀网页作品。</p>
        <hr/>
        <h2>投稿</h2>
        <p class="case_last">你也用UIkit制作了很棒的作品吗？赶紧投稿给咱吧！</p>
        <p class="case_send">
          <a href="https://mail.qq.com/cgi-bin/loginpage?autologin=n&errtype=1&clientuin=709799179&param=&sp=&tfcont=22%20serialization%3A%3Aarchive%205%200%200%204%200%200%200%208%20authtype%201%204%209%20clientuin%209%20709799179%206%20domain%206%20qq.com%202%20vm%203%20wsk&r=3b8edd33d388354bdf03f268b696b40d">发送邮件 </a>
        </p>

      </div>
      <div class="case_r">
        <div class="case_up">
          <h1>{{title}}</h1>
          <p>{{title1}}</p>
        </div>
        <div class="case_down">
          <img :src="imgs">
          <span><a href="#">C</a></span>

        </div>

      </div>

    </div>

  </div>

</template>

<script>
    export default {
        name: "CaseMain",
      data(){
          return{
            title:"softUIkit 代码汇",
            title1:"LoveAndCoffee.io",
            imgs:"../../../static/img/ukp.jpg"
          }
      },
      mounted(){

          $(function(){
            $(".case_down ").mouseenter(function(){
              $(".case_down  span").css("opacity",".5")
            })
            $(".case_down ").mouseleave(function(){
              $(".case_down  span").css("opacity","0")
            })


          })
      }

    }
</script>

<style scoped>
  .case_box{
    padding-top:120px;
    width:100%;
  }
  .case_box .case_center{
    background:#fff;
    width:80%;
    height:850px;
    margin:0 auto;
  }
  .case_box .case_center .case_l{
    float:left;
    width:20%;
    height:850px;
    padding-right:2%;
    position:fixed;
    border-right:1px solid #eee;
  }
  .case_box .case_center .case_l h1{
    font-size:36px;
    line-height:42px;
    font-weight:100;
    margin-bottom:15px;
  }
  .case_box .case_center .case_l .case_p{
    font-size:20px;
    line-height:26px;
    font-weight:300;
  }
  .case_box .case_center .case_l h2{
    font-size:24px;
    line-height:30px;
    font-weight:100;
    padding:15px 0;
  }
  .case_box .case_center .case_l .case_last{
    font-size:14px;
  }
  .case_box .case_center .case_l .case_send{
    padding-top:15px;

  }
  .case_box .case_center .case_l .case_send a{
    display:inline-block;
    width:96px;
    height:40px;
    background:#009dd8;
    border-radius: 5px;
    text-align: center;
    line-height: 40px;
    color:#fff;
  }

  .case_box .case_center .case_r{
    float:right;
    width:70%;
    margin-left:5%;
    padding-bottom:50px;
    border-bottom: 1px solid #ccc;
  }
  .case_box .case_center .case_r .case_up{
    height:42px;
    width:100%;
    margin-bottom:10px;

  }
  .case_box .case_center .case_r .case_up h1{
    float:left;
    font-size:36px;
    font-weight:300;
    line-height:42px;
  }
  .case_box .case_center .case_r .case_up p{
    float:right;
    line-height:42px;
  }
  .case_box .case_center .case_r .case_down{
    width:100%;
    height:600px;
    position:relative;
  }
  .case_box .case_center .case_r .case_down img{
    display:inline-block;
    width:100%;
    height:600px;
    background-size:100%;
    margin:auto;

  }
  .case_box .case_center .case_r .case_down span{

    width:100%;
    height:600px;
    background:#000;
    position:absolute;
    top:0;
    left:0;
    display:block;
    transition:0.5s ;
    opacity:0;

  }
  .case_box .case_center .case_r .case_down span a{
    display:block;
    font-size:80px;
    color:#fff;
    font-weight:bold;
    position:relative;
    left:50%;
    top:45%;

  }


</style>
