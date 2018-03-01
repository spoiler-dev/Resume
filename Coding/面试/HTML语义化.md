# HTML语义化
`HTML`
------

> 引入语义化标签的好处主要有下列三点：
> 
 - 比div标签有更加丰富的含义，方便开发与维护
 - 搜索引擎能更方便的识别页面的每个部分
 - 方便其他设备解析（如移动设备、盲人阅读器等）

> div元素被替换成新的元素：header 页眉, nav 导航, section 区块, article 文章, aside 侧边栏, footer 页脚

------

### **HTML5结构代码**

    <body>
        <header>...</header>
        <nav>...</nav>
        <article>
            <section>
            ...
            </section>
        </article>
        <aside>...</aside>
        <footer>...</footer>
    </body>

------

### **语义化标签**

| 标签 |  语义 |  用法 |
| :----: | :----: | :----: |
| header | 标签定义文档的页眉（介绍信息）。|通常被放置在页面或者页面中某个区块元素的顶部，包含整个页面或者区块的标题、简介等信息，起到引导与导航的作用。|
| nav | 表示页面的导航，可以通过导航连接到网站的其他页面，或者当前页面的其它部分。 | nav 标签一般只用于页面的主要导航部分 |
| aside | 所包含的内容不是页面的主要内容、具有独立性，是对页面的补充。 | 一般使用在页面、文章的侧边栏、广告、友情链接等区域。 |
| footer | 定义文档或节的页脚。 | 一般被放置在页面或者页面中某个区块的底部，包含版权信息、联系方式等信息。 |
| article | 表示包含于一个文档、页面、应用程序或网站中的一段独立的内容，可以被独立的发布或者重新使用文章标记标签。 | article 标签应该使用在相对比较独立、完整的的内容区块，所以我们可以在一篇博客、一个论坛帖子、一篇新闻报道或者一个用户评论中使用它。通常情况下，一个 article 元素包括标题、正文和脚注。和 nav 标签一样，该标签同样不能用在 address 标签中。 |
| section | 是一个主题性的内容分组，通常用于对页面进行分块或者对文章等进行分段。 | section标签所包裹的是有一组相似的主题的内容，可以用这个标签来实现文章的章节、标签式对话框中的各种标签页等类似的功能。section 通常包含一个头部header、可能还会包含一个尾部 footer。 |
| figure | 规定独立的流内容（图像、图表、照片、代码等等）。 | 元素代表一段独立的内容.用于对元素进行组合。多用于图片与图片描述组合。 |
| hgroup | 用来对标题元素进行分组 | 用于对网页或区段（section）的标题进行组合。使用新的 HTML5 元素 hgroup，可以为 header 元素添加更多的信息。（头部主标题/副标题） |

### **举例**

    <header>
        <img src="images/logo.png" alt="**科技" />
        <h1>**信息科技有限公司</h1>
        <nav>
            <li><a href="#">首页</a></li>
            <li><a href="example.html">客户案例</a></li>
            <li><a href="service_one.html">技术服务</a></li>          
            <li><a href="aboutus_one.html">关于我们</a></li>
            <li><a href="connection.html">联系我们</a></li>
        </nav>
    </header>
    
    <hgroup>
    <h1>Welcome to my WWF</h1>
    <h2>For a living planet</h2>
    </hgroup>
    <p>The rest of the content...</p>

    <article>
        <h1>HTML5学习之语义化标签</h1>
        <p>....正文.....</p>
        <aside>
            <h2>什么是语义化标签</h2>
            <p>语义化标签就是......</p>
        </aside>
    </article>
    
    <article>
        <h1>HTML5学习之语义化标签</h1>
        <p>....正文.....</p>
        <footer>版权所有*伪版必究</footer>
    </article>
    
    <article>
        <h1>JavaScript框架</h1>
        <p>Javascript框架是指以Javascript语言为基础搭建的编程框架。</p>
        <section>
            <h2>angular.Js<h2>
            <p>angular.Js是一款优秀的前端JS框架</p>
        </section>
        <section>
            <h2>Vue.js<h2>
            <p>Vue.js是用于构建交互式的Web界面的库</p>
        </section>
        <section>
            <h2>jQuery<h2>
            <p>jQuery是一个快速、简洁的JavaScript框架。</p>
        </section>
    </article>

    <footer>
        <small>
        版权所有 © 2016-2017 **信息科技有限公司
        </small>
    </footer>

------

### **文档级别语义**

**1. ruby、rt、rp**

> ruby 是一种排版注释系统，是位于横排基础文本上方的简短文字，主要针对东亚语言作出简单的读音注释。例如可以为中文或日文显示读音。
> 
> ruby 涉及的元素包括 ruby 、rt 以及 rp 。首先使用 ruby 指定一个具体的表达式，然后使用rt提供说明。rt部分将显示在表达式上方。

下面这个例子中，拼音将显示在文字的上方。

     <ruby>
        北<rt>bei</rt>
        京<rt>jing</rt>
    </ruby>

但是在不支持 ruby 的浏览器中需要使用 rp 对这两个区块进行视觉上的隔离。


    <ruby>
        北
        <rp>
            <rt>bei</rt>
        </rp>
        京
        <rp>
            <rt>jing</rt>
        </rp>
    </ruby>


**2. time**

> 为了将现在的常用的日期和时间语句用规范的、利于机器识别的格式进行表述，time 元素提供了一个可选的时间和时区组件。

    <p>
        我们在每天早上 <time>9:00</time> 开始营业。
    </p>
    
    <p>
        我在 <time datetime="2008-02-14">情人节</time> 有个约会。
    </p>

为了确保机器能够正确识别，我们可以使用 datetime 属性，其属性值可以被定义为时间、日期或者这两者的复合体。

    <time datetime="2017-07-03">

还可以使用 pubdate 为一个网页指定发布时间。

    <time datetime="2017-07-03" pubdate>
    <!--以下两种形式也可以行-->
    <time datetime="2017-07-03" pubdate="">
    <time datetime="2017-07-03" pubdate="pubdate">

**注意**：在 HTML5 中，true 或 false 并非有效的属性值，当解释器发现存在布尔属性时，它将直接解释为 true 。如果需要将属性设为 false ，将这个属性去掉即可。

**3. mark**

> mark 元素用于高亮标记一段文字。 可以使用 mark 元素来标记出网页里被搜索的关键词或是用于高亮显示一段解释性的代码。

**4. wbr**

> wbr 元素用于让浏览器为长单词增加可选择的破折号，以便自动拆行。
> 在相当长的单词中插入一对 wbr 元素，可以让浏览器根据排版的需要决定是否将单词换行。破折号是否出现，以及出现的位置完全由排版决定。 wbr 只是允许自动拆行，但非强制拆行。

    <p>
        如果想学习 AJAX，那么您必须熟悉 XML<wbr>Http<wbr>Request 对象。
    </p>

**5. 略微改变的元素**

> 在HTML4版本中的标签元素在HTML5中有了新的定义。

使用  `b`  表示文档渲染为粗体，而 `i` 表示文档渲染为斜体。使用 `strong` 和 `em` 来强调一段重要的文本。 `cite` 用来为对参考文献的引用进行定义，比如书籍或杂志的标题。 `small` 不仅仅指的是小字体，它还同样为法律声明增添不具有重要性的旁注或小字。 `hr` 现在表达的是主体性的间断，不再仅仅是分割版面的一条水平线。

License
> * 可以拷贝、转发，但是必须提供原作者信息，同时也不能将本项目用于商业用途。


