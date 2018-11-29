<template>
<div class="box">
     <img src="../../assets/img/banner.jpg" class="i-banner">
     <div class="i-button">下载SOFT-UI</div>
     <img src="../../assets/img/i-jt.png" alt="" class="i-jt">
    <embed src="../../../static/falsh/skk.swf" palette="white]white " width="700" height="300" hidden="no"/>
</div>
</template>

<script>
import $ from "jquery"
export default {
    name:"indexBanner",
    data(){
        return{
            gotime:null
        }
    },
    mounted(){
        let that=this
        $(".i-jt").click(function(){
            if(this.gotime!=null){
                    return
                }
                var sto=0
                var scrol=$(window).scrollTop()
                that.gotime=setInterval(function(){
                    sto++
                    scrol+=sto;
                    // console.log(gotop)
                    $(window).scrollTop(scrol)
                    if(scrol>826){
                        window.clearInterval(that.gotime)
                        that.gotime=null
                    }
                },15)
        })
        window.onmousewheel=function(event){
            var top=$(window).scrollTop()
            
            if(event.deltaY>4 && top<825){
                var gotop=$(window).scrollTop()
                // console.log(gotop)
                var step=0
                // console.log("1")
                if(this.gotime!=null){
                    return
                }
                console.log("1")
                this.gotime=setInterval(function(){
                    step++
                    gotop+=step;
                    // console.log(gotop)
                    $(window).scrollTop(gotop)
                    if(gotop>825){
                        window.clearInterval(this.gotime)
                        this.gotime=null
                    }
                },15)
                // $(window).scrollTop(825)
            }else if(event.deltaY<0 && top<=826){
                var downtop=$(window).scrollTop()
                var ste=0
                 if(this.gotime!=null){
                    return
                }
                this.gotime=setInterval(function(){
                    ste++
                    downtop-=ste;
                    // console.log(gotop)
                    $(window).scrollTop(downtop)
                    if(downtop<1){
                        window.clearInterval(this.gotime)
                        this.gotime=null
                    }
                },15)
            }
        }
    },
    beforeDestroy(){
        window.onmousewheel = 'null';
    }
}
</script>

<style scoped>
embed{
    position: absolute;
    top:475px;
    left:10%;
}
.i-jt{
        width:30px;
        height: 30px;
        margin:0 auto;
        position: absolute;
        top:780px;
        left:50%;
        cursor: pointer;
        animation: play .8s  infinite linear ;
    }
.i-banner{
    width:100%;
    height: 735px;
    position: relative;
}
.i-button{
    width:170px;
    height: 50px;
    color:black;
    background: #d0d0d0;
    border-radius: 18px;
    text-align: center;
    line-height: 50px;
    position: absolute;
    top: 590px;
    left: 950px;
    transition: 1.5s all;
}
.i-button:hover{
    background: #716e6e;
    border-radius: 0;
    color:antiquewhite;
}
@keyframes play{
    0%{
        top:790px
    }
    50%{
        top:800px
    }
    100%{
        top:790px
    }
}
.box{
    margin-bottom:25px;
}
</style>
