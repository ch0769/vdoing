(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{446:function(t,r,e){"use strict";e.r(r);var h=e(14),o=Object(h.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("p",[t._v("做博客就图个稳定，一次性买了10年的域名，搭配免费的github，适合做长期博客。"),e("br"),t._v("\n之前安装的hexo，可玩性非常强，前面文章有写一些关于hexo的安装使用教程，用了一年多，也发现了一些问题，hexo版本更新各种不兼容，访问速度慢，，很影响心情，自己都懒得搭理博客了，国内cdn加速需要备案，只是做个小站，不想太麻烦。"),e("br"),t._v("\n所幸，无意中发现荒野无灯大神把站转移到hugo，访问速度非常快，于是自己马上搭建了一个，打开文章页面基本上是秒开，之前hexo打开文章大约要5-6秒，用不同设备，不同网络测试很多次，hugo博客的访问速度要快4倍以上。并且文章越多，hugo的优势就越明显，为避免以后迁移麻烦，所以赶紧把博客迁到了hugo。主题也是我喜欢的，非常简洁。"),e("br"),t._v("\n下面开始教程吧！！！")]),t._v(" "),e("h1",{attrs:{id:"安装hugo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装hugo"}},[t._v("#")]),t._v(" 安装hugo")]),t._v(" "),e("p",[t._v("下载hugo https://gohugo.io\n解压到任意目录，比如D:\\hugo\\bin\n将Hugo添加到Windows的环境变量 PATH中"),e("br"),t._v("\n系统变量和用户变量都添加D:\\hugo\\bin"),e("br"),t._v("\n下载Git https://git-scm.com  并安装"),e("br"),t._v("\n下载Go语言开发环境 https://golang.org/dl  并安装\n打开Git Bash 输入 hugo version 出现hugo static site generator相关信息表示安装完成"),e("br"),t._v("\n打开D盘 右键点击 git bash here"),e("br"),t._v("\n输入hugo new site blog")]),t._v(" "),e("h1",{attrs:{id:"安装主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装主题"}},[t._v("#")]),t._v(" 安装主题")]),t._v(" "),e("p",[t._v("去官网下载主题  https://themes.gohugo.io"),e("br"),t._v("\n我下载的是even  https://themes.gohugo.io/hugo-theme-even"),e("br"),t._v("\ncd /blog"),e("br"),t._v("\ngit clone https://github.com/olOwOlo/hugo-theme-even themes/even"),e("br"),t._v("\n安装好后 打开D:\\blog\\themes\\even\\exampleSite"),e("br"),t._v("\n找到config.toml和content 复制到D:\\blog目录下"),e("br"),t._v("\n输入"),e("br"),t._v('\nhugo --theme=even --baseUrl="ch0769.github.io" --buildDrafts'),e("br"),t._v("\n#even改成你的主题 ch0769.github.io也改成你的网址"),e("br"),t._v("\n出现 public 文件夹  cd /public"),e("br"),t._v("\n依次输入"),e("br"),t._v("\ngit init"),e("br"),t._v("\ngit add ."),e("br"),t._v('\ngit commit -m "yyyy/mm/dd-hh:mm"'),e("br"),t._v("\ngit remote add origin https://github.com/ch0769/ch0769.github.io.git"),e("br"),t._v("\ngit push -u origin master")]),t._v(" "),e("p",[t._v("cd /blog"),e("br"),t._v("\nhugo"),e("br"),t._v("\nhugo server"),e("br"),t._v("\n可以本地预览了 http://localhost:1313")]),t._v(" "),e("h1",{attrs:{id:"新建文章"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建文章"}},[t._v("#")]),t._v(" 新建文章")]),t._v(" "),e("p",[t._v("hugo new post\\hugo搭建和使用教程.md"),e("br"),t._v("\n会在D:\\blog\\content\\post  hugo搭建和使用教程.md"),e("br"),t._v("\n可以下载Visual Studio Code编辑和修改文章，记得换行前要先打两个空格，再按回车键。")]),t._v(" "),e("h1",{attrs:{id:"hugo使用教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hugo使用教程"}},[t._v("#")]),t._v(" hugo使用教程")]),t._v(" "),e("h2",{attrs:{id:"添加固定链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加固定链接"}},[t._v("#")]),t._v(" 添加固定链接")]),t._v(" "),e("p",[t._v("这篇教程的加法参考如下"),e("br"),t._v("\ntitle: hugo搭建和使用教程"),e("br"),t._v("\ndate: 2020-06-01 15:55:32"),e("br"),t._v("\nurl: /hugodajian.html"),e("br"),t._v("\n（hugodajian 可以改成数字或者任意字母）")]),t._v(" "),e("h2",{attrs:{id:"写文章后部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写文章后部署"}},[t._v("#")]),t._v(" 写文章后部署")]),t._v(" "),e("p",[t._v("在blog目录输入hugo"),e("br"),t._v("\n在blog/public目录依次输入"),e("br"),t._v("\ngit add ."),e("br"),t._v('\ngit commit -m "yyyy/mm/dd-hh:mm"'),e("br"),t._v("\ngit push -u origin master")]),t._v(" "),e("h2",{attrs:{id:"netlify-自动编译部署生成-web-网站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#netlify-自动编译部署生成-web-网站"}},[t._v("#")]),t._v(" Netlify 自动编译部署生成 Web 网站")]),t._v(" "),e("p",[t._v("官方首页：https://www.netlify.com")]),t._v(" "),e("h2",{attrs:{id:"快速在netlify建立jekyll、hexo、hugo静态博客"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速在netlify建立jekyll、hexo、hugo静态博客"}},[t._v("#")]),t._v(" 快速在Netlify建立Jekyll、Hexo、Hugo静态博客")]),t._v(" "),e("p",[t._v("网站首页：https://www.staticgen.com/"),e("br"),t._v("\n教程可以看这里 https://kuleyu.github.io/hexolog/post/31808.html")]),t._v(" "),e("h2",{attrs:{id:"写文章日期格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#写文章日期格式"}},[t._v("#")]),t._v(" 写文章日期格式")]),t._v(" "),e("p",[t._v("date: 2020-06-01 15:55:32")]),t._v(" "),e("h2",{attrs:{id:"从hexo导入文章到hugo的固定链接设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从hexo导入文章到hugo的固定链接设置"}},[t._v("#")]),t._v(" 从hexo导入文章到hugo的固定链接设置")]),t._v(" "),e("p",[t._v("hexo设置 permalink: posts/:abbrlink.html"),e("br"),t._v("\n文章页面设置 abbrlink: 1   （每篇文章加一个数）"),e("br"),t._v("\nhugo固定链接设置"),e("br"),t._v("\n文章里面的"),e("br"),t._v("\nabbrlink: 1"),e("br"),t._v("\n改成"),e("br"),t._v("\nurl: /posts/1.html"),e("br"),t._v("\n域名从hexo解析到hugo后，固定链接是不变的"),e("br"),t._v("\n也可以不用阿拉伯数字，随便输入其他字母也是可以的，这个看个人喜欢了。")]),t._v(" "),e("h2",{attrs:{id:"绑定域名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绑定域名"}},[t._v("#")]),t._v(" 绑定域名")]),t._v(" "),e("p",[t._v("绑域名非常简单，大家可以翻我前面的教程。"),e("br"),t._v("\n这里发现一个问题"),e("br"),t._v("\n绑定域名后"),e("br"),t._v("\n输入  git push -u origin master  出现错误如下"),e("br"),t._v("\ngit上传文件出错[rejected] master -> master (fetch first) error: failed to push some refs to"),e("br"),t._v("\n这个是因为github中的README.md文件不在本地代码目录中，可以通过如下命令进行代码合并"),e("br"),t._v("\ngit pull --rebase origin master"),e("br"),t._v("\n再输入"),e("br"),t._v("\ngit push origin master"),e("br"),t._v("\n就可以了。")])])}),[],!1,null,null,null);r.default=o.exports}}]);