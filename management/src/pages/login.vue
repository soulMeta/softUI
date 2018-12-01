<template>
    <div class="bg">
        <p class="gq-tit">
            <span>SoftUI</span> Login From
        </p>
        <p class="gq-intro">
            This is a free responsive softUI.  customize and use it as you like!
        </p>
        <div class="gq-loginbox">
            <div class="whitebox">
                <div class="gq-leftbox">
                    <p class="logtit">
                        Login to our site
                    </p>
                    <p class="logtt">
                         Login to our site Enter your username and password to log on
                    </p>
                </div>
                <div class="rightbox">
                    <img src="../assets/img/login.png" alt="">
                </div>
            </div>
            <div class="gq-input">
                <input type="text" class="username us" placeholder="usernmae...">
                <input type="password" class="userpass us" placeholder="userpassword...">
                 <input type="button" class="loginbtn" value="sign in">
            </div>
        </div>
        <div class="mesgtit">管理员账户名不正确</div>
    </div>
</template>

<script>
import $ from "jquery"
export default {
    name:"login",
    created(){
        $("html").css({
            height:"100%"
        })
    $('body').css({
        height:"100%",
        width:"100%",
        overflow:"hidden",

    })
    },
    mounted(){
         var user=document.getElementsByClassName("username")[0]
         user.oninput=function(){
             console.log(user)  
             var reg=/^[a-zA-Z]\w{11}$/
            var regname=reg.test($(".username").val())
            if(regname==false){
                $(".mesgtit").css({
                    opacity:1
                })
                setTimeout(function(){
                    $(".mesgtit").animate({
                    opacity:0
                },200)
                },400)
            }
         }
        
    }
}
</script>

<style scoped>
    .mesgtit{
        width:550px;
        height: 70px;
        background: gray;
        border-radius: 12px;
        margin:0 auto;
        margin-top:20px;
        opacity: 0;
        text-align: center;
        color:white;
        line-height: 70px;
        transition: 1s;
    }
    .loginbtn{
        width:91%;
        height: 46px;
        background: #049f0f;
        border-radius: 4px;
        color:white;
        font-size:20px;
        text-align: center;
    }
    .gq-input{
        text-align: center;
        padding:30px 10px;
    }
    .us{
        width: 90%;
        height: 40px;
        border:2px solid #a8a8a8;
        font-size:19px; 
        text-indent: 12px;  
        margin-bottom: 15px;
    }
    .us::placeholder{
        color: #a8a8a8;
    }
    .us:focus{
        outline: none;
    }
    .rightbox{
        display: flex;
        align-items: center;
    }
    .rightbox img{
        width:80px;
        height: 80px;
    }
    .gq-leftbox{
        width:70%;
        overflow: hidden;
        padding-left:30px;
        padding-top:30px;
    }
    .gq-leftbox .logtit{
        float: left;
        width: 100%;
        white-space:wrap;
        font-size: 28px;
        margin:0;
         margin-bottom:15px;    
    }
    .whitebox{
        width:556px;
        height: 123px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        background: white;
        display: flex;
        justify-content: space-between;
    }
    .logtt{
        font-size:12px;
    }
    .gq-loginbox{
        width:556px;
        height: 360px;
        background: #e5e6e6;
        border-radius: 12px;
        margin:0 auto;
        opacity: .7;
        
    }
    .gq-tit span{
        font-weight: 800;
    }
    .bg{
        height: 100%;
        width: 100%;
        background: url("../assets/img/bbg.gif");
        background-size:100% 100%;
        padding-top:50px;
    }
    .gq-tit{
        color:white;
        font-weight: lighter;
        font-size:34px;
        text-align: center;
    }
    .gq-intro{
        color:white;
        margin-bottom:50px;
        text-align: center;
    }
</style>
