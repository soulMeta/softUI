<template>
    <div class="mainbox">
        <div class="pcbox">
            <p class="i-tit">PC&nbsp;组件库</p>
            <p class="i-text">好看、好用、业务组件丰富</p>
            <div class="i-btn">
                <p class="btnbox">
                    <span class="i-show">文档</span>
                        <span class="i-show">github</span>
                </p>
            </div>
        </div>
        <!--pc演示-->
        <div class="pcshow">
            <img src="../../assets/img/pc.jpg" class="pcshow">
            <div class="bgshow"></div>
            <img src="../../assets/img/one.png" alt="" class="one">
            <img src="../../assets/img/two.png" alt="" class="two">
            <img src="../../assets/img/three.png" alt="" class="three">
             <img src="../../assets/img/four.png" alt="" class="four">
        </div>
        <!--移动-->
        <div class="pcbox">
            <p class="i-tit">H5&nbsp;组件库</p>
            <p class="i-text">好看、好用、业务组件丰富</p>
            <div class="i-btn">
                <p class="btnbox">
                    <span class="i-show">文档</span>
                    <span class="i-show">github</span>
                </p>
            </div>
        </div>
        <div class="phoneshow">
            <img src="../../assets/img/phone.png" alt="" class="phone">
            <div class="phonebg"></div>
            <img src="../../assets/img/pone.png" alt="" class="pone">
            <img src="../../assets/img/ptwo.png" alt="" class="ptwo">
            <img src="../../assets/img/pthree.png" alt="" class="pthree">
            <img src="../../assets/img/pfour.png" alt="" class="pfour">
        </div>
    </div>
</template>

<script>
import $ from "jquery"
export default {
    name:"indexMain",
    mounted(){
        $(".phoneshow").mouseenter(function(){
            $(".phonebg").animate({
                opacity:.5
            })
        })
        $(".phoneshow").mouseleave(function(){
            $(".phonebg").css({
                opacity:0
            })
        })
        $(".bgshow").mouseenter(function(){
            $(".bgshow").css({
                opacity:.4
            })
        })
        $(".one").mouseenter(function(){
            $(".three").css({
                display:"block"
            })
            $(".two").css({
                opacity:1
            })
            $(".one").css({
                opacity:1
            })
        })
        $(".one").mouseleave(function(){
            $(".three").css({
                display:"none"
            })
            $(".two").css({
                opacity:0
            })
            $(".one").css({
                opacity:0
            })
        })
        $(".pcshow").mouseleave(function(){
            $(".bgshow").css({
                opacity:0
            })
        })
    }

}
</script>

<style scoped>
    .pfour{
        width:235px;
        height: 87px;
        position: absolute;
        top:343px;
        left: 11px;
        opacity: 0;
    }
    .pfour:hover{
        opacity: 1;
    }
    .ptwo{
        width:235px;
        height: 62px;
        position: absolute;
        top:214px;
        left: 10px;
        opacity: 0;
    }
    .pthree{
        width:236px;
        height: 64px;
        position: absolute;
        top:275px;
        left: 11px;
        opacity: 0;
    }
    .pthree:hover{
        opacity: 1;
    }
    .ptwo:hover{
        opacity: 1;
    }
    .pone{
        width:237px;
        height: 131px;
        position: absolute;
        top:84px;
        left: 10px;
        opacity: 0;
    }
    .pone:hover{
        opacity: 1;
    }
    .phonebg{
        width: 238px;
        height: 384px;
        background: gray;
        position: absolute;
        top: 83px;
        left: 10px;
        opacity:0;
    }
    .phoneshow{
        text-align: center;
        margin-top:50px;
        position: relative;
         width: 264px;
        height: 470px;
        margin:50px auto;
    }
    .phone{
        width:263px;
        height: 469px;
        margin:0 auto;
        box-shadow: 0px 0px 3px gray;
    }
    .one{ 
        width: 53px;
        height: 22px;
        position: absolute;
        top: 113px;
        left: 204px;
        opacity: 0;
    }
     .four{ 
        width: 579px;
        height: 109px;
        position: absolute;
        top: 338px;
        left: 180px;
        opacity: 0;
    }
    .two{ 
        width: 246px;
        height: 22px;
        position: absolute;
        top: 113px;
        left: 267px;
        opacity: 0;
    }
    .two:hover{
        opacity: 1;
    }
     .three{ 
        width: 54px;
        height: 61px;
        position: absolute;
        top: 140px;
        left: 204px;
        display: none;
    }
    .bgshow{
        width:771px;
        height: 452px;
        background: #514f4f;
        opacity: 0;
        position: absolute;
        top:40px;
        left: 5px;
        transition: .4s;
    }
    .four:hover{
        opacity: 1;
    }
    .mainbox{
        margin-top:65px;
    }
    .btnbox{
        overflow: hidden;
        margin: 0 auto;
        display: inline-block;
    }
    .i-btn{
        overflow: hidden;
        text-align: center;
    }
    .pcbox{
        width: 100%;
        text-align: center;
        
    }
    .i-show:nth-child(1){
        background: #1382ea;
        color:white;
    }
    .i-show{
        border:1px solid #1382ea;
        font-size:14px;
        line-height: 29px;
        width:73px;
        height: 29px;
        display: block;
        float: left;
        margin-right:14px;
        border-radius: 8px;
    }
    .i-text{
        margin-bottom: 15px;
    }
    .i-tit{
        font-size:30px;
        margin-bottom: 11px;
    }
    .pcshow{
        width:780px;
        height: 467px;
        margin: 0 auto;
        margin-top:20px;
        position: relative;
        overflow: hidden;
        margin-bottom: 65px;
    }
</style>
