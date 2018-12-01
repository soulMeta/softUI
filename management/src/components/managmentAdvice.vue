<template>
    <div class="managmentAdvice">
      <div class="adviceNav">
        <div class="title l">
          <i class="iconfont">&#xe616;</i>
          互动交流
          <span> > </span>
          诉求建议
        </div>
        <div class="refresh r">
          <a href=""><i class="iconfont">&#xe63e;</i></a>
        </div>
      </div>
      <advice-inquiry></advice-inquiry>
      <delete-data></delete-data>
      <advice-lists></advice-lists>
    </div>
</template>

<script>
  import '../assets/css/base.css'
  import AdviceInquiry from "./adviceInquiry";
  import DeleteData from "./deleteData";
  import AdviceLists from "./adviceLists";
    export default{
        name: "managmentAdvice",
      components: {AdviceLists, DeleteData, AdviceInquiry}
    }
</script>

<style scoped>
.managmentAdvice{
  padding-left: 20%;
}
.adviceNav{
  height: 41px;
  line-height: 41px;
  padding: 0 2%;
  background: #F1F4F9;
  border-bottom: 1px solid #ddd;
  border-radius: 5px;
}
  .title{
    font-size: 14px;
  }
.title .iconfont{
  color: #000;
}
  .refresh{
    width: 3%;
    height: 85%;
    text-align: center;
    margin-top: 2px;
    background: #0086b3;
    border-radius: 5px;
  }
.refresh .iconfont{
  color: #fff;
}

</style>
