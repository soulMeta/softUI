<template>
    <div class="deleteData">
      <div class="deleteDataLeft l">
        <a href="" class=""><i class="iconfont">&#xeed4;</i>删除</a>
      </div>
      <div class="deleteDataRight r">
        共有数据 : <span> 0 </span>条
      </div>
    </div>
</template>

<script>
    export default {
        name: "deleteData"
    }
</script>

<style scoped>
.deleteData{
  width: 96%;
  overflow: hidden;
  padding: 5px;
  background: #F1F4F9;
}
  .deleteDataLeft{
    padding: 5px 12px;
    width: 80px;
    background: #dd514c;
    border-radius: 5px;
  }
.deleteDataLeft:hover{
  background: #c62b26;
}

.deleteDataLeft a{
  color: #fff;
}
  .deleteDataRight{
    padding: 6px 4px 0 0;
    font-size: 16px;
  }

</style>
