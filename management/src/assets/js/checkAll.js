//1、定义全选的插件
jQuery.fn.extend({
  bindCheck:function($subCheckBox){
    let $allCheckBox = this;
    //1、给全选复选框绑定click事件
    //this:是全选复选框（jQuery对象）
    this.click(function(){
      let isChecked = this.checked;
      $subCheckBox.each(function(){
        this.checked = isChecked;
      });
    });
		//2、给反选
		if(arguments.length==2){
			$btnUncheck.click(function(){
				$subCheckBox.each(function(){
					this.checked = !this.checked;
				});
				reversCheck();
			});
		}
    //3、给每个选择项的复选框绑定事件
    $subCheckBox.click(function(){
      reversCheck();
    });
    function reversCheck(){
      //1、判断是否全部的复选框被选中
      let isAllChecked = true;
      $subCheckBox.each(function(){
        if(!this.checked){
          isAllChecked = false;
        }
      });
      //2、处理全选复选框
      $allCheckBox.attr("checked",isAllChecked);
    }
  }
});
