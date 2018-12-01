<template>
    <div class="headnav">
        <img src="../../assets/img/headlogo.png" class="logo">
        <ul class="navlist">
            <router-link to='/' tag="li">首页</router-link>
            <router-link to='/softStart' tag="li">快速开始</router-link>
            <router-link to='/element' tag="li">UI组件</router-link>
            <router-link to='/case' tag="li">案例展示</router-link>
            <router-link to='/##' tag="li">github</router-link>
            <router-link to='/about' tag="li">关于我们</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name:"headNav"
}
</script>

<style scoped>
    .headnav{
        /* height:90px; */
        padding:0 30px;
        overflow: hidden;
        line-height: 81px;
        /* position: fixed; */
    }
    .logo{
        width:105px;
        height: 37px;
        /* float: left; */
        /* margin-top:36.5px; */
        vertical-align: middle;
    }
    .navlist{
        float: right;
        padding-right: 50px;
    }
    .navlist li{
        float: left;
        margin-left: 38px;
        font-size: 15px;
    }
    /* .navlist li:nth-child(1){
        color:#07a8e4;
    } */
    .navlist li:hover{
        color:#07a8e4;
        cursor: pointer;
    }
    .router-link-exact-active{color:#07a8e4;}
</style>
