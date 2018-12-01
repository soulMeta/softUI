<template>
    <div class="softStartMain">
      <h2 class="history">简介</h2>
      <p>SoftUI 轻量简便，一款适合小白新手的UI组件，让你感受真正的</p>
      <h2 class="history">获取 SoftUI</h2>
      <p><strong>方式一</strong> ：点击链接下载文件</p>
      <p><a href="https://github.com/frozenui/softui/archive/2.0.0.zip">https://github.com/softui/softui/archive/2.0.0.zip</a></p>
      <p><strong>方式二</strong> ：在页面上引入样式文件（推荐）</p>

      <div class="code">
        <span class="deepblue">< link  </span>
        <span class="blue"> rel=</span>
        <span class="red">"stylesheet"  </span>
        <span class="blue">href=</span>
        <span class="red">"http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/softui.css"</span>
        <span class="deepblue">></span>
      </div>
      <h2 class="history">如何使用</h2>
      <p>通过以上方式获取到 softUI后，在页面中引入后即可使用。以 softUI 的按钮为例：</p>
      <div class="code">
        <span class="green"> <!DOCTYPE html> </span><br>
        <span class="deepblue"> < html&nbsp  </span> <span class="blue">lang=</span><span class="blue">"en"</span><span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp; < head ></span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp; charset= </span><span class="red">"UTF-8" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp; charset= </span><span class="red">"UTf-8" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp; name= </span><span class="red">"viewport" </span> <span class="blue">content=</span><span class="red">"width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no"</span><span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< title> </span><span class="">FrozenUI Demo</span><span class="deepblue">< title> </span><br>
        <span class="gray">&emsp;&emsp;< !-- 引入 FrozenUI --> </span><br>
        <span class="deepblue">&emsp;&emsp;< link  </span><span class="blue"> rel=</span><span class="red">"stylesheet"  </span><span class="blue">href=</span><span class="red">"http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/softui.css"</span><span class="deepblue">></span><br>
        <span class="deepblue">&emsp; < head></span><br>
        <span class="deepblue">&emsp; < body></span><br>
        <span class="gray">&emsp;&emsp;< !-- 使用 --> </span><br>
        <span class="deepblue">&emsp;&emsp;< div </span><span class="blue"> &nbsp;  class= </span><span class="red">"ui-btn-wrap" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;&emsp;< button </span><span class="blue"> &nbsp;  class= </span><span class="red">"ui-btn" </span> <span class="deepblue"> > </span><span>常规按钮</span><span class="deepblue">  &nbsp< /button> </span> <br>
        <span class="deepblue">&emsp;&emsp;&emsp;< button </span><span class="blue"> &nbsp;  class= </span><span class="red">"ui-btn disabled" </span> <span class="deepblue"> > </span><span>不可点击按钮</span><span class="deepblue">  &nbsp< /button> </span> <br>
        <span class="deepblue">&emsp;&emsp;< /div> </span><br>
        <span class="deepblue">&emsp; < /body></span><br>
        <span class="deepblue">< /html></span><br>
      </div>
      <h2 class="history">如何开发</h2>
      <p style="margin-bottom: 20px">softUI 在你开发的时候按照说明下载样式文件</p>

      <p style="margin: 20px 0 30px 0">在需要引用的页面引入css样式 </p>
      <p style="margin: 30px 0 20px 0">复制组件html代码即可使用 说明如下：</p>
      <div class="code">
        <p>softUI/</p>
        <p>├── 下载所需文件/</p>
        <p>│   └── 引入页面</p>
        <p>└── src/</p>
        <p>│   └── css</p>
        <p>│        └── 样式文件</p>
        <p>│   └── scss</p>
        <p>│        └── 存放 .scss源码</p>
        <p>│   └── demo</p>
        <p>│        └── 参考例子</p>
        <p>│   └── font</p>
        <p>│        └── 存放 icon的图片</p>
        <p>│</p>
        <p>└── tool/</p>
        <p>└── 编译工具</p>
      </div>
      <h2 class="history">softUI</h2>
      <p>从小白到大黑，从复杂而难受到简单而舒适，softUI您的居家必备</p>
    </div>
</template>

<script>
    export default {
        name: "softStartMain" 
    }
</script>

<style scoped>
.softStartMain{
  height: 100%;
  padding: 0 10%;
  margin-bottom: 40px;
}
.history{
  margin-top: 40px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
}

.softStartMain p{
  line-height: 2.2rem;
}
.code{
  padding: 20px;
  margin: 20px 0;
  background: #f7f7f9;
  font-size: 14px;
  line-height: 1.5rem;
}
.deepblue{
  color: #2f6f9f;
}
.blue{
    color: #4f9fcf;
  }
.red{
  color: #d44950;
}
.gray{
  color: #999;
}
.green{
  color:#099;
}
</style>
