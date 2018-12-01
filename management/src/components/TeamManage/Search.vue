<template>
    <div class="search">
        <div class="top">
            <div class="s-left">
                <input type="text" placeholder="请搜索关键字">
            </div>
            <div class="s-right">
                <input type="button" value="查询">
            </div>
            <div class="s-num">
                共有数据：<span>0</span>条
            </div>
            <div class="s-add">
                <input type="button" value="添加">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Search"
    }
</script>

<style scoped>
  .search{
      padding:0 20px 0 20px;
      width:100%;
      margin-top:15px;
  }
  .search>.top{
    display: flex;
    padding:12px 0;
    background-color: #f5f5f5;
    width:100%;
  }
  .search>.top>.s-left{
    height:36px;
    width:35%;
  }
  .search>.top>.s-left>input{
    height:36px;
    width:100%;
    text-indent:1em;
    border:1px solid #5A98DE;
    transition: background-color .1s linear;
  }
  .search>.top>.s-right{
    width:10%;
  }

  .search>.top>.s-right>input{
    width:100%;
    height:36px;
    box-sizing: border-box;
    border:none;
    margin-left:-1px;
    border-radius: 2px;
    color:#fff;
    font-size: 17px;
    background-color: #5A98DE;
    transition: background-color .1s linear;
  }
  .search>.top>.s-num{
    height:36px;
    margin-left:5%;
    color:#666;
    white-space: nowrap;
    line-height: 36px;
  }

  .search>.top>.s-add{
    width:10%;
    min-width: 50px;
    margin-left:5%;
  }
  .search>.top>.s-add>input{
    width:100%;
    height:36px;
    border:none;
    font-size: 17px;
    background-color: #5A98DE;
    color:#fff;
    transition: background-color .1s linear;

  }
  .search input[type=button]{cursor:pointer;border-radius: 4px;}
</style>
