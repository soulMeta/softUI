<template>
      <div class="s-l-first">
        <div class="s-l-top">
          <img src="../../assets/img/team.jpg">
          <p>Excellence</p>

        </div>
        <ul>
          <li><router-link to="/mange">首 页</router-link></li>
          <li @click="dis"><a href="#">组 件 信 息</a><i :class="[!dd?'iconfont': 'iconfont r180']">&#xe62f;</i></li>
              <div class="list">
                <p>components</p>
                <p>上传组件</p>
                <p>必要组件</p>
                <p>附加组件</p>
                <p>组件图</p>
                <p>树形组件</p>
                <p>com组件</p>
                <p>组件拖拽</p>
                <p>js组件</p>

              </div>
          <li @click="btn"><a href="#">皮 肤 切 换</a><i :class="[!dt?'iconfont': 'iconfont r180']">&#xe62f;</i></li>
              <div class="s-l-list">
                <p>red</p>
                <p>green</p>
                <p>blue</p>

              </div>
          <li><router-link to="/mange/teamManage" exact>成 员 信 息</router-link></li>
          <li><router-link to="/mange/managmentAdvice" tag="a">留 言</router-link></li>
          <li><a href="#">合 作 企 业</a></li>
        </ul>
    </div>

</template>

<script>
    export default {
      name: "MangeMain",
      data() {
        return {
          dd: false,
          dt: false
        }
      },
      methods: {
        dis(e) {
          this.dd = !this.dd;
          let li;
          if(e.target.tagName.toLowerCase() == 'li'){
            li = e.target
          }else{
            li = e.target.parentNode
          }
          if(this.dd){
            // e.target.parentNode.nextElementSibling

          //   $(e.target).parent().next().slideDown('slow');
          // if()
            $(li).next().show('slow');
          }else{
          //   $(e.target).parent().next().slideUp('slow');
            $(li).next().hide('slow');
          }
        },
        btn(e){
          this.dt=!this.dt;
          let li;
          if(e.target.tagName.toLowerCase() == 'li'){
            li = e.target
          }else{
            li = e.target.parentNode
          }
          if(this.dt){
            // e.target.parentNode.nextElementSibling
            $(li).next().show('slow');
          }else{
            $(li).next().hide('slow');
          }
        }
      },
      mounted() {
        $('.s-l-first i.iconfont').parent().next().hide();
        // $(function () {
        //   $(".s-l-first ul li:nth-of-type(2)  i").click(function () {
        //     $(this).css("transform", "rotate(180deg)")
        //     $(".s-l-first ul .list").css("display","none")
        //
        //   })


          // console.log($(".s-l-first  ul li:nth-of-type(2)  i"))
        // })
      }
    }
</script>

<style scoped>
  .r180{
  transform:rotate(180deg);
  }
  .l180{
    transform:rotate(180deg);
  }

  
  .s-l-nav .s-l-first{
    width:20%;
    background:#333;
  }
  .s-l-nav .s-l-first .s-l-top{
    height:84px;
    padding:0 30px;
  }
  .s-l-nav .s-l-first .s-l-top img{
    width:56px;
    height:56px;
    display:inline-block;
    border-radius: 50%;
    margin-top:28px;

  }
  .s-l-nav .s-l-first .s-l-top p{
    float:right;
    font-size:26px;
    line-height:56px;
    color:#fff;
    margin-top:28px;

  }
  .s-l-nav .s-l-first ul{
    background:#333;
    padding:0 20px;
  }
  .s-l-nav .s-l-first ul li{
    height:80px;
    line-height:80px;
    border-bottom:1px solid #fff;
    cursor: pointer;
  }
  .s-l-nav .s-l-first ul li a{
    color:#fff;
  }
  .s-l-nav .s-l-first ul li i{
    color:#fff;
  }
  .s-l-nav .s-l-first ul>li:nth-child(2) a {
    float:left
  }
  .s-l-nav .s-l-first ul>li:nth-child(2) i{
    float:right;
    transition: .25s;
  }
  .s-l-nav .s-l-first ul .list p{
    color:#fff;
    line-height:40px;
    text-align:center;
  }
  .s-l-nav .s-l-first ul .s-l-list p{
    color:#fff;
    line-height:40px;
    text-align: center;
  }

  .s-l-nav .s-l-first ul>li:nth-of-type(3) a {
    float:left
  }
  .s-l-nav .s-l-first ul>li:nth-of-type(3) i{
    float:right;
    transition: .25s;
  }












</style>
