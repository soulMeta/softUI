<template>
    <table cellspacing="0" cellpadding="0">
      <thead>
        <tr>
          <th width="25"><input type="checkbox" class="whole_check"></th>
          <th width="40">序号</th>
          <th width="110">公司名称</th>
          <th width="70">联系人</th>
          <th width="100">联系电话</th>
          <th width="130">留言内容</th>
          <th width="70">状态</th>
          <th width="130">备注</th>
          <th width="110">添加时间</th>
          <th width="110">修改时间</th>
          <th width="75" style="background: #b8b8ca;color: #fff;cursor: pointer">管理</th>
        </tr>
      </thead>
      <tbody id="goodsMessage">
        <tr>
          <td width="25"><input type="checkbox"></td>
          <td width="40">01</td>
          <td width="110">六小龄童</td>
          <td width="70">李庚</td>
          <td width="100">187****9016</td>
          <td width="130">soul</td>
          <td width="70">就绪</td>
          <td width="130"></td>
          <td width="110">2018/11/29</td>
          <td width="110">--</td>
          <td width="75" style="background: #b8b8ca;color: #fff;cursor: pointer">删除</td>
        </tr>
        <tr>
          <td width="25"><input type="checkbox"></td>
          <td width="40">01</td>
          <td width="110">六小龄童</td>
          <td width="70">李庚</td>
          <td width="100">187****9016</td>
          <td width="130">soul</td>
          <td width="70">就绪</td>
          <td width="130"></td>
          <td width="110">2018/11/29</td>
          <td width="110">--</td>
          <td width="75" style="background: #b8b8ca;color: #fff;cursor: pointer">删除</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
  import '../assets/js/checkAll'
  import $ from "jquery"
  export default {
      name: "adviceLists",
      methods:{
        _checkde(){
          console.log("ui")
          function checkGoods(){
            let $allCheckbox = $("input[type=checkbox]");  //全局所有的checkbox
            let $wholeChexbox = $('.whole_check');      //全选的checkbox
            let $cartBox = $('#goodsMessage');          //显示商品的盒子

            let $sonCheckbox = $cartBox.find("input[type=checkbox]");//单个商品的checkbox
            //
            $wholeChexbox.click(function(){//点击全选框
              console.log("rt")
              if ($(this).is(':checked')) {//如果没被选，则选中
                // $sonCheckbox.prop("checked",true);
                $allCheckbox.prop("checked",true);
              }else{//如果被选，则不选
                $allCheckbox.prop("checked",false);

              }
              // totalMoney();   //计算总价
            });

            $sonCheckbox.each(function(){//除过全选框外的
              $(this).click(function(){//点击当前
                if ($(this).is(":checked")) {

                  //判断单个商品是否被选中
                  var len = $sonCheckbox.length;
                  var num = 0;
                  $sonCheckbox.each(function(){
                    if ($(this).is(":checked")) {
                      num++;
                    }
                  });
                  if (num==len) {
                    $wholeChexbox.prop("checked",true);
                  }
                } else{
                  $wholeChexbox.prop("checked",false);
                }
                // totalMoney();
              });

            });


          }
          checkGoods()

          //全选

          // jQuery.fn.extend({
          //   check:function (isChecked) {
          //    this.each(function () {
          //      this.checked=isChecked;
          //    });
          //   }
          // });
          //
          // $(function () {
          //   $(".whole_check").click(function () {
          //     $("#box :checkbox").check(this.checked)
          //   });
          // });
        }

      },
      mounted() {
        this._checkde()
      }
    }
</script>

<style scoped>
table{
width: 96%;
  margin-top: 20px;
  border: 1px solid #ccc;
  border-left: 0;
}
  th{
    background: #F1F4F9;
    padding: 8px;
    border-left: 1px solid #ccc;
    font-size: 14px;
    /*font-weight: 100;*/
  }
  td{
    background: #F1F4F9;
    padding: 8px;
    border-left: 1px solid #ccc;
    font-size: 12px;
    text-align: center;
    border-top: 1px solid #ccc;
    /*font-weight: 100;*/
  }
</style>
