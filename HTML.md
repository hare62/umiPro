#### **HTML：**

###### Doctype的作用？

> 文档声明，告诉浏览器以什么标准去渲染解析html

###### **标准模式和怪异模式的区别：**

> 标准模式的页面排版和JS运作模式都是浏览器支持的最高标准，而怪异模式是向后兼容，模拟老浏览器模式行为，防止页面无法正常工作



> **行内元素****/块级元素/空元素有哪些？**
>
> 行内元素:  a/img/span/b/strong/input/select/section
>
> 块级元素: div/p/table/ul/ol/li/h1-h6
>
> 空元素: br/hr/img/input/link/meta

###### **介绍一下你对浏览器内核的理解**

> 浏览器主要分为两个部分:渲染引擎和JS引擎
>
> 渲染引擎：主要负责获取页面内容和排版渲染页面
>
> JS引擎：解析和执行JS来实现页面的动态效果，以及交互内容
>
> 注意：js引擎和渲染引擎是互斥的，也就是说当前js引擎在运行的时候，渲染引擎不会工作，反之亦然，这也是为什么建议把通过script标签引入的脚本放到body后面，而不是body前面的原因。





**常用浏览器的内核有哪些？**
>chrome/safari-webkit
>Mozilla firefox-Gecko
>Opera-Presto
>IE-trident
> ![https://note.youdao.com/yws/public/resource/b1780c5a1dfb87d402449badc06922b2/xmlnote/5B321AE5635D4E27BF0EC851B50A20A2/4565](https://note.youdao.com/yws/public/resource/b1780c5a1dfb87d402449badc06922b2/xmlnote/5B321AE5635D4E27BF0EC851B50A20A2/4565)
>
>  

**浏览器是怎么对****HTML5的离线储存资源进行管理和加载的？**

> · 在线的情况下，浏览器发现 html 标签有 manifest 属性，它会请求 manifest 文件
>
> · 如果是第一次访问app，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储
>
> · 如果已经访问过app且资源已经离线存储了，浏览器会对比新的 manifest 文件与旧的 manifest 文件，如果文件没有发生改变，就不做任何操作。如果文件改变了，那么就会重新下载文件中的资源并进行离线存储
>
> · 离线的情况下，浏览器就直接使用离线存储的资源。
>
**描述一下****cookies/sessionStorage和localStorage的区别?**
>
> cookies是网站为了表示用户身份而储存在用户本地终端上的数据,Cookies的数据始终在同源的http请求中携带,会在浏览器和服务器中来回传递,大小不能4K(通常经过加密,所以不用担心账号被盗,同源策略[同源是指"协议+域名+端口"三者相同]可以防止XSS和CSRF攻击浏览器,XSS就是用过浏览器的cookies,截取用户数据,CSRF是模拟用户在网页上面的操作,完成数据请求.异步策略牵扯到了JSONP)
>
> sessionStorage和localStorage的数据都是在本地存储,不会把数据发给服务器,localStorage是关闭浏览器,数据还存在不会丢失,而sessionStorage是离开浏览器后,数据会自动删除.
>
**HTML5新特性有哪些？如何处理HTML5新标签的兼容性问题？如何区分HTML和HTML5？**
>
>HTML5新特性：
>
> 绘图方面：加入了canvas绘图和SVG绘图；
>
> 媒体方面： 加入了video和audio标签
>
> 语义化标签： 比如header、nav、footer、section ['sekʃ(ə)n]、article ['ɑrtɪkl]
>
> 本地离线存储： localStorage[ˈloʊkl] 和sessionStory两种本地离线缓存
>
> localStorage是长期储存数据,关闭浏览器后数据不会丢失
>
> sessionStorage是关闭浏览器后数据自动删除
>
> 表单控件:  calendar、date、time、email、url、search ;
>
> 以及一些新技术: webwoker / websocket (säkit)/ Geolocation(ˌjēōlōˈkāSHən)
>
> 如何区分HTML和HTML5: 通过Doctype声明/新增的结构元素/功能元素
>
>  
>
 **简述一下你对****HTML语义化的理解?**
>
> 用正确的标签做正确的事情，html语义化让页面的内容结构更加简单易懂，便于搜索引擎解析，便于阅读维护和理解
>
 **页面导入样式时****,使用link和@import有什么区别?**
>
> 1/link属于XHTML标签,除了加载CSS之外还能用于定义RSS,@import是CSS提供的,只能用于加载CSS
>
> 2/link加载的文件,在页面加载的时候,link文件会同时加载,而@import引入的CSS文件,是页面在加载完成后再加载的
>
> 3/@import有兼容性问题,IE5以下的浏览器是无法识别的,而link无兼容性问题
>
 **Iframe有哪些缺点?**
>
> Iframe会阻碍页面的onload事件
>
> 浏览器的搜索引擎一般读无法解读iframe页面,不利于SEO的搜索
>
> Iframe和主页面共享链接池,会影响页面的并行加载
>
> 使用js动态添加iframe  src属性,可以避免一三问题
>
**Label的作用是什么?怎么用?**
>label便签用可以让用户点击文字区域，自动聚焦到当前项的input框。
input设置id属性，label设置for属性，for属性的属性值为id属性值。
> ![https://note.youdao.com/yws/public/resource/b1780c5a1dfb87d402449badc06922b2/xmlnote/5554CADFB47E42EB8ED164D33539DD34/4569](https://note.youdao.com/yws/public/resource/b1780c5a1dfb87d402449badc06922b2/xmlnote/5554CADFB47E42EB8ED164D33539DD34/4569)
>
>  
>
> label标签是定义表单控制间的关系,当用户点击label里面的文字时,浏览器会自动把光标转载表单控件上
>
**HTML5的form如何关闭自动完成功能?**
>
> 给不想要提示form或某个input设置autocomplete = off
>
**如何实现浏览器内多个标签之间的通信****?**
>
> ·  Websocket['sɒkɪt]/SharedWorker 都是可以将不同线程共享为一个线程,他们的数据也是共享的(没怎么用过,用法不太清楚)
>
> · LocalStorage 也可以实现浏览器多个标签页之间的通信
>A.js localStorage.setItem('namehare', name)
>B.js window.addEventListener('storage', function(event){    
>    alert(event.key + '=' + event.newValue)  
> })   
> · localStorage在另一个浏览器被添加/删除/修改时,会触发一个事件,我们可以通过对loacalStorage监听事件,控制他的值来进行信息通信

**页面可见性有哪些用途****?(visibility API)**
>
> 可以通过visibilityState检测当前页是否可见,以及打开网页的时间,可以 控制页面在被切换后,停止视频和音频的播放
>我们打开这个页面，然后再打开另一个页面，来回点击这两个页面，动画，视频，音频都可以在页面显示时打开，在页面隐藏时关闭。

**如何在页面上实现一个圆形的可点击区域****?**
>
> Border-radius
>
> 或者js实现,需要求一个点在不在圆上的算法,获取鼠标坐标等
>
**网页验证码是干嘛的****,解决了什么安全问题?**
>
> 区分用户是计算机还是人的公告全自动程序,可以防止恶意破解密码,刷票等
>
 **Title和h1的区别,b与strong的区别,i和em的区别?**
>
> title属性没有明确的标题,只是HTML语义化的一个标签,而h1则是层次明确的标题,h1标签里的文字,字体较大,并且会加粗
>
> b与strong都有加粗字体的作用,strong只是更加语义化,是加重语气的意思
>
> i和em,em是强化文本的内容,而所有浏览器对重要内容都是以斜体形式显示的,i则是表示,标签内文本为斜体
>
**<img>的title和alt有什么区别?**
>
> title是当鼠标划到图片元素时显示的图片描述
>
> alt是img的特有属性，是图片内容的等价描述，用于图片无法加载时显示、读屏器阅读图片。可提高图片可访问性，除了纯装饰性图片外都需要设置有意义的值，搜索引擎会重点分析。
>
**Web标准以及W3C标准是什么？**
> 标签闭合、标签小写、不乱嵌套，使用外链css和js、结构行为表现的分离
**xhtml和html有什么区别？**
>
> 功能上的差别：
>
> 主要是xhtml可兼各大浏览器、手机以及PDA，并且浏览器也能快速正确地编译网页
>
> 书写习惯的差别：
>
> xhtml元素必须被正确嵌套，闭合、区分大小写，文档必须拥有根元素
>
 **Canvas和Svg有什么区别?**
>
> svg绘制出来的每一个图形的元素都是独立的DOM节点,能够方便的绑定事件或用来修改。canvas输出的是一副画布
>
> svg输出的图形是矢量图形，后期可以修改参数来自由放大缩小，不会失真和锯齿。而canvas输出标量画布，就像一张图片一样，放大会失真或者锯齿
