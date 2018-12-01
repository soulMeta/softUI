<template>
  <form action="">
    <div class="search">
      <label class="label">公司名称</label>
      <input type="text">
    </div>
    <div class="search">
      <label class="label">联系人</label>
      <input type="text">
    </div>
    <div class="search">
      <label class="label">联系电话</label>
      <input type="text">
    </div>
    <button class="btn"><i class="iconfont">&#xe678;</i>查询</button>
  </form>
</template>

<script>
    export default {
        name: "adviceInquiry"
    }
</script>

<style scoped>
.search{
  margin-right: 30px;
  display: inline-block;
  background: #F1F4F9;
  padding: 5px 5px 5px 0;
  margin: 10px 30px 10px 0;
}
  .label{
    display: inline-block;
    padding: 5px 2px;
    font-size: 14px;
    min-width: 95px;
    text-align: center;
  }
  input{
    width: 200px;
    height: 31px;
    padding: 4px;
    border: 0;
  }
  .btn{
    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    text-align: center;
    padding: 4px 12px;
    background: #0086b3;
    color: #fff;
height: 31px;
    border:0;
  }
.btn .iconfont{
  /*color: #fff;*/
  font-weight: bold;
}
</style>
