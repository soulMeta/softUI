<template>
    <div class="entry">
        <div class="container">
            <div class="e-left">
                <a href=""><i class="iconfont">&#xe7fa;</i></a>
                <a href=""> 企业管理 </a>>
                <a href=""> 全量企业库</a>
            </div>
            <div class="e-right">
                <router-link to="/TeamManage"><i class="iconfont">&#xe63e;</i></router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Entry"
    }
</script>

<style scoped>
.entry{
  padding:0 20px 0 20px;
  margin:15px 0;
}
.entry>.container{
    padding:0 20px;
    display: flex;
    background-color: #f5f5f5;
    justify-content: space-between;
    height:44px;
    line-height: 44px;
}
.entry>.container>div{
  font-size: 14px;
  color: #333;
  height:100%;
}
.entry>.container>div.e-left>a:nth-of-type(1){
  width:30px;
  height:100%;
  display: inline-block;
  text-align: center;
}
.entry>.container>div.e-left>a:nth-of-type(1) i{
  font-size: 22px;
}

.entry>.container>div.e-right>a{
    background-color: #4D95E8;
    padding: 3px 10px;
    height:24px;
}
.entry>.container>div.e-right>a>i {
  font-size: 22px;
  color: #fff;
  vertical-align: middle;
}

</style>
