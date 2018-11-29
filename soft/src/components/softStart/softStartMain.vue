<template>
    <div class="softStartMain">
      <h2 class="history">简介</h2>
      <p>SoftUI 是一套基于移动端的UI库。它非常轻量、精美、舒适，遵从设计规范，提供了表单、对话框、列表等常用组件。此外，SoftUI还提供文字截断、1px边框、rem、两端留白等常用场景的解决方案。CSS做得更模块化和颗粒化，使用sass编写CSS代码，你完全可以按照实际情况按需加载。</p>
      <h2 class="history">获取 SoftUI</h2>
      <p><strong>方式一</strong> ：点击链接下载文件</p>
      <p><a href="https://github.com/frozenui/frozenui/archive/2.0.0.zip">https://github.com/frozenui/frozenui/archive/2.0.0.zip</a></p>
      <p><strong>方式二</strong> ：在页面上引入样式文件（推荐）</p>

      <div class="code">
        <span class="deepblue">< link  </span>
        <span class="blue"> rel=</span>
        <span class="red">"stylesheet"  </span>
        <span class="blue">href=</span>
        <span class="red">"http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/frozen.css"</span>
        <span class="deepblue">></span>
      </div>
      <h2 class="history">如何使用</h2>
      <p>通过以上方式获取到 FrozenUI 后，在页面中引入后即可使用。以 FrozenUI 的按钮为例：</p>
      <div class="code">
        <span class="green"> <!DOCTYPE html> </span><br>
        <span class="deepblue"> < html&nbsp  </span> <span class="blue">lang=</span><span class="blue">"en"</span><span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp; < head ></span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp charset= </span><span class="red">"UTF-8" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp charset= </span><span class="red">"UTf-8" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< meta </span><span class="blue"> &nbsp name= </span><span class="red">"viewport" </span> <span class="blue">content=</span><span class="red">"width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0, user-scalable=no"</span><span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;< title> </span><span class="">FrozenUI Demo</span><span class="deepblue">< title> </span><br>
        <span class="gray">&emsp;&emsp;< !-- 引入 FrozenUI --> </span><br>
        <span class="deepblue">&emsp;&emsp;< link  </span><span class="blue"> rel=</span><span class="red">"stylesheet"  </span><span class="blue">href=</span><span class="red">"http://i.gtimg.cn/vipstyle/frozenui/2.0.0/css/frozen.css"</span><span class="deepblue">></span><br>
        <span class="deepblue">&emsp; < head></span><br>
        <span class="deepblue">&emsp; < body></span><br>
        <span class="gray">&emsp;&emsp;< !-- 使用 --> </span><br>
        <span class="deepblue">&emsp;&emsp;< div </span><span class="blue"> &nbsp  class= </span><span class="red">"ui-btn-wrap" </span> <span class="deepblue"> > </span><br>
        <span class="deepblue">&emsp;&emsp;&emsp;< button </span><span class="blue"> &nbsp  class= </span><span class="red">"ui-btn" </span> <span class="deepblue"> > </span><span>常规按钮</span><span class="deepblue">  &nbsp< /button> </span> <br>
        <span class="deepblue">&emsp;&emsp;&emsp;< button </span><span class="blue"> &nbsp  class= </span><span class="red">"ui-btn disabled" </span> <span class="deepblue"> > </span><span>不可点击按钮</span><span class="deepblue">  &nbsp< /button> </span> <br>
        <span class="deepblue">&emsp;&emsp;< /div> </span><br>
        <span class="deepblue">&emsp; < /body></span><br>
        <span class="deepblue">< /html></span><br>
      </div>
      <p id="cankao">更多的使用示例，请参考 <a href=" http://frozenui.github.io/frozenui/demo/index.html"> http://frozenui.github.io/frozenui/demo/index.html</a></p>
      <h2 class="history">如何开发</h2>
      <p style="margin-bottom: 20px">FrozenUI 使用 Grunt 作为编译系统，在你开发编译之前需要安装 <span class="blue">node.js</span> （npm 已经包含在内) 和<span class="blue">Grunt</span>。</p>
      <div class="code">
        <p>git clone https://github.com/frozenui/frozenui.git</p>
        <p>cd frozenui</p>
        <p>npm install</p>
        <p>grunt</p>
      </div>
      <p style="margin: 20px 0 30px 0">运行 grunt 命令，会监听src目录下所有文件的变更，并且默认会在8080端口启动服务器，然后在浏览器打开 http://localhost:8080/。 </p>
      <p style="margin: 30px 0 20px 0">项目 clone 到本地后，可以看到文件组织结构，具体文件说明如下：</p>
      <div class="code">
        <p>FrozenUI/</p>
        <p>├── release/</p>
        <p>│   └── 编译生成文件</p>
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
      <h2 class="history">历史版本及代码规范</h2>
      <p>2.0.0以前的历史版本修改记录：<a href="https://github.com/frozenui/frozenui/wiki/History">https://github.com/frozenui/frozenui/wiki/History</a></p>
      <p>2.0.0版本的修改记录：<a href=" https://github.com/frozenui/frozenui/wiki/History-2.0.0"> https://github.com/frozenui/frozenui/wiki/History-2.0.0</a></p>
      <p>组件css规范：<a href=" https://github.com/frozenui/frozenui/wiki/CSS-Guide"> https://github.com/frozenui/frozenui/wiki/CSS-Guide</a></p>
      <p>通用代码规范： <a href=" https://github.com/frozenui/frozenui/wiki/CSS-Guide"> https://github.com/frozenui/frozenui/wiki/CSS-Guide</a></p>
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
