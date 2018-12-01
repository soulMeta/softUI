<template>
    <div class="person-collection">
        <div class="container">
            <div class="info">
                  <table>
                      <thead>
                      <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>From</th>
                            <th>Duty</th>
                            <th>Major</th>
                            <th>Phone</th>
                            <th>revise</th>
                        </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                          <tr>
                            <td>nt-1</td>
                            <td>Joker.L</td>
                            <td>ShangHai</td>
                            <td>CEO</td>
                            <td>Computer</td>
                            <td>888-888-888</td>
                            <td>
                              <a class="del-btn"><img src="../../assets/img/del.png" alt=""></a>
                              <a ><img src="../../assets/img/change.png" alt=""></a>
                            </td>
                          </tr>
                      </tbody>
                  </table>
            </div>
        </div>

      <!-- ----------------添加按钮----------------- -->
    <div class="overlay">
        <div class="del-yes-cancel">
            <a class="iconX" href="#"><img src="../../assets/img/del.png" alt=""></a>
            <div>
                确定要删除此成员吗?
            </div>
            <div>
              <a class="yes" >确认</a>
              <a class="cancel">取消</a>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
  import $ from '../../../node_modules/jquery/dist/jquery.slim'
    export default {
        name: "TeamHumanbeing",
        mounted() {
          //删除框的删除按钮效果
            $('.overlay a').each(function(){
                $(this).click(function () {
                    $('.overlay').css({'display':'none'});
                })
            });
            this._del();
        },
      methods:{
          _del(){
              $('.del-btn').each(function () {
                  $(this).click(function () {
                      $('.overlay').css({display:'block'});
                  })
              })
          }
      }
    }
</script>

<style scoped>
  .person-collection{
      padding-left:20px;
      padding-right:20px;
      background-color: #FFF;
      margin-top:15px;
  }
  .person-collection>.container>.info>table{
    padding: 8px;
    line-height: 20px;
    word-break: break-all;
    border-collapse: collapse;
    width: 100%;
    empty-cells: show;
    background-color: transparent;
    border-spacing: 0;
    border:1px solid #ccc;
    text-align:center;
    white-space: nowrap;
  }
  .person-collection>.container>.info>table td,th{
      border:1px solid #ccc;
  }

  .person-collection>.container>.info>table>thead>tr>th{
    height:46px;
  }
  .person-collection>.container>.info>table>tbody>tr>td{
    height:66px;
  }
  .person-collection>.container>.info>table>tbody>tr>td:last-of-type{
      width:100px;
      padding:0 10px;
  }

  .person-collection>.container>.info>table>tbody>tr>td:last-of-type>a>img{
    width:20px ;
    height:20px;
    vertical-align: middle;
    margin:0 3px;
  }
  .person-collection>.container>.info>table>tbody>tr>td:last-of-type>a:nth-of-type(2)>img{
    width:15px ;
    height:15px;
  }


  .overlay{
    perspective: 600;
    -webkit-perspective: 600;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,.5);
    z-index: 999;
    display: none;
  }
  .overlay>.del-yes-cancel{
      width: 430px;
      height: 250px;
      margin-top: -125px;
      margin-left: -215px;
      background: #f5f5f5;
      position: absolute;
      left: 50%;
      top: 50%;
      border: none;
      overflow: hidden;
      outline: none;
      border-radius: 4px;
  }
  .overlay .del-yes-cancel div:nth-of-type(1) {
    height: 72px;
    line-height: 72px;
    font-size: 20px;
    overflow: hidden;
    margin: 45px 0;
    text-align: center;
  }

  .overlay .del-yes-cancel div:nth-of-type(2) {
    text-align: center;
  }
  .overlay .del-yes-cancel div:nth-of-type(2) a {
    min-width: 97px;
    height: 43px;
    line-height: 41px;
    font-size: 18px;
    margin: 0 8px;
    display: inline-block;
    border-radius: 2px;
    text-align: center;
    color: #666;
    border: 1px solid #666;
    box-sizing: border-box;
    transition: all .8s cubic-bezier(0,1,.5,1);
  }
  .overlay .del-yes-cancel div:nth-of-type(2) a:nth-of-type(1){
    background-color: #4A98DE;
    border-color: #4A98DE;
    color:#fff;
  }
  .overlay .del-yes-cancel div:nth-of-type(2) a:nth-of-type(2){
    background-color: #eD514C;
    border-color: #eD514C;
    color:#fff;
  }

  .overlay .del-yes-cancel div:nth-of-type(2) a:nth-of-type(1):hover{
    background-color: rgba(10,105,153);
    border-color: rgba(10,105,153);

  }
  .overlay .del-yes-cancel div:nth-of-type(2) a:nth-of-type(2):hover{
    background-color:#C62B26;
    border-color:#C62B26;
  }



  .overlay .del-yes-cancel a.iconX {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
    display: inline-block;
    color: #999;
  }
  .overlay .del-yes-cancel a.iconX>img{
      width:20px;
      height:20px;
  }


</style>
