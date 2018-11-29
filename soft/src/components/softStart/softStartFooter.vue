<template>
    <div class="softStartFooter">
      <div class="footer">
        <ul>
          <li class="l"><a href="">GitHub</a></li>
          <li class="l"><a href="">DEMO</a></li>
          <li class="l"><a href="">精彩H5</a></li>
          <li class="l"><a href="">QQ群：427632094</a></li>
        </ul>
        <p>©2018 Six God Team</p>
      </div>

    </div>
</template>

<script>
    export default {
        name: "softStartFooter"
    }
</script>

<style scoped>
  .softStartFooter{
    padding: 50px 0;
    background: #000;
  }
  .footer{
    padding: 0 10%;
  }
  .footer ul{
    display: inline-block;
    margin-bottom: 20px  ;
  }
  .footer ul li{
    text-align: left;
    margin-left: 20px;
  }
  .footer ul li a{
    color: #bbb;
    font-size: 14px;
  }
  .footer ul li:nth-child(1) {
    margin-left: 0;
  }
</style>
