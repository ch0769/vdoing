(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{441:function(t,a,e){"use strict";e.r(a);var n=e(14),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"安装armbian"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装armbian"}},[t._v("#")]),t._v(" 安装armbian")]),t._v(" "),e("p",[t._v("测试了很多版本的Armbian+omv，OMV经常会报错，改用了XQ7的N1首个支持FullCone Nat的Armbian系统，非常好用\n下面是链接\nhttps://www.right.com.cn/forum/thread-788004-1-1.html\n"),t._v("\nROM下载地址：链接：https://share.weiyun.com/5IsYMcO 密码：fop0i5\n需要说明的是img制作成U盘后，不需要替换dtb，不需要更换内核，直接使用就可以，一步到位。")]),t._v(" "),e("p",[t._v("先把镜像写入U盘，从U盘启动后，从路由器找到N1的ip地址\n通过Xshell登陆 输入N1的ip 账号root 密码1234\n第一次进入需要修改密码\n再写入N1的内置存储，用下面的命令就可以了\n/boot/create-mbr-linux.sh\n/root/install.sh\n写入完成后，断电，拔U盘，插电重启")]),t._v(" "),e("p",[t._v('切换中国时间\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo "Asia/Shanghai" > /etc/timezone')]),t._v(" "),e("p",[t._v("运行\nnano /etc/apt/sources.list\n修改源为国内源\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian stretch main contrib non-free\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian stretch-updates main contrib non-free\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free\ndeb http://mirrors.tuna.tsinghua.edu.cn/debian stretch-backports main")]),t._v(" "),e("p",[t._v("或者")]),t._v(" "),e("p",[t._v("deb http://mirrors.ustc.edu.cn/debian stretch main contrib non-free\ndeb http://mirrors.ustc.edu.cn/debian stretch-updates main contrib non-free\ndeb http://mirrors.ustc.edu.cn/debian stretch-backports main contrib non-free\ndeb http://mirrors.ustc.edu.cn/debian-security/ stretch/updates main contrib non-free")]),t._v(" "),e("p",[t._v("保存后，更新源\n执行 apt-get update 命令即可更新源\n执行 apt-get upgrade 更新软件")]),t._v(" "),e("h2",{attrs:{id:"做一个补充-切换国内源后安装omv和插件有一定概率会出问题-官方的也是一样-最稳的做法是-外国ip-官方源-稳定-速度又快。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#做一个补充-切换国内源后安装omv和插件有一定概率会出问题-官方的也是一样-最稳的做法是-外国ip-官方源-稳定-速度又快。"}},[t._v("#")]),t._v(" 做一个补充，切换国内源后安装omv和插件有一定概率会出问题，官方的也是一样，最稳的做法是，外国ip，官方源，稳定，速度又快。")]),t._v(" "),e("h1",{attrs:{id:"安装omv"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装omv"}},[t._v("#")]),t._v(" 安装omv")]),t._v(" "),e("p",[t._v("armbian-config")]),t._v(" "),e("p",[t._v("选择Software，回车确认 接着选择Softy，回车确认 最后选择OMV，空格勾选，回车确认开始安装")]),t._v(" "),e("p",[t._v("然后，按tab键，选择OK，回车确认 最后等OMV程序自动安装完成")]),t._v(" "),e("p",[t._v("依次选择Exit、Cancel，返回命令行\n至此OMV安装完毕，正常的话，浏览器输入N1 ip或http://aml/ ,会看到OpenMediaVault登陆界面")]),t._v(" "),e("p",[t._v("此时使用默认用户名：admin 默认密码：openmediavault ，登陆即可")]),t._v(" "),e("p",[t._v("OMV安装OMVEXTRAS\n官方教程  https://www.openmediavault.cn/read-omvextrasorg.html\n安装好后，按下图设置")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112165303.png",alt:""}})]),t._v(" "),e("h1",{attrs:{id:"安装typecho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装typecho"}},[t._v("#")]),t._v(" 安装Typecho")]),t._v(" "),e("h2",{attrs:{id:"在文件管理-找到自己的usb设备-我的是移动2t的移动硬盘-选择挂载。"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在文件管理-找到自己的usb设备-我的是移动2t的移动硬盘-选择挂载。"}},[t._v("#")]),t._v(" 在文件管理，找到自己的usb设备，我的是移动2T的移动硬盘，选择挂载。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112170829.png",alt:""}})]),t._v(" "),e("p",[t._v("用winscp软件，到2t下面建www文件夹，在www下面建typecho文件夹，在typecho下面建public_html 文件夹  都设置777权限，如下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112170108.png",alt:""}}),t._v(" "),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112170222.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"安装nginx和mysql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx和mysql"}},[t._v("#")]),t._v(" 安装nginx和mysql")]),t._v(" "),e("p",[t._v("在插件找插件，点安装就可以的，先安装nginx，再安装mysql，安装好后入下图")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112171153.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"设置nginx-点击pools-添加typecho"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置nginx-点击pools-添加typecho"}},[t._v("#")]),t._v(" 设置nginx 点击pools，添加typecho")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112171656.png",alt:""}}),t._v("\n点击服务器，添加后保存\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112171847.png",alt:""}}),t._v("\n应用更改后再设置，选择typecho目录，选择公共目录，选择public_html，启用php，php-fpm-pool选择刚刚建立的typecho")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112172404.png",alt:""}})]),t._v(" "),e("p",[t._v("Index下面的三个选项都打开")]),t._v(" "),e("p",[t._v("这里先打乱一些顺序，我发现安装好typecho后，只能打开前台，文件页面和管理后台都出现404，下面就是解决方法\n下面有个扩展选项，填入下面代码")]),t._v(" "),e("p",[t._v("if (-f $request_filename/index.html){\nrewrite (."),e("em",[t._v(") $1/index.html break;\n}\nif (-f $request_filename/index.php){\nrewrite (.")]),t._v(") $1/index.php;\n}\nif (!-f $request_filename){\nrewrite (.*) /index.php;\n}")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112173220.png",alt:""}})]),t._v(" "),e("p",[t._v("也可以直接在配置 /etc/nginx/sites-available/zzz-omv-nginx 最后面加上面的代码\n就可以了")]),t._v(" "),e("p",[t._v("最后在General点击启用，nginx 就配置好了\n下面配置数据库")]),t._v(" "),e("h3",{attrs:{id:"omv安装数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#omv安装数据库"}},[t._v("#")]),t._v(" omv安装数据库")]),t._v(" "),e("p",[t._v("https://www.openmediavault.cn/read-omv-install-mysql.html")]),t._v(" "),e("p",[t._v("打开mysql，重设密码。绑定ip改成n1的ip")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112174209.png",alt:""}})]),t._v(" "),e("p",[t._v("点击show\n用户ID：omvadmin\n密码：刚修改过的\n登陆后，创建数据库\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112174527.png",alt:""}}),t._v("\n官方下载 http://typecho.org/"),e("br"),t._v("\n解压后，将文件上传到前面建立都public_html文件夹，就可以安装了。")]),t._v(" "),e("h3",{attrs:{id:"mysql自动启动"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql自动启动"}},[t._v("#")]),t._v(" mysql自动启动")]),t._v(" "),e("p",[t._v("安装配置完nginx和mysql后默认mysql是不能自启动的。所以还要配置数据库自启动。用winscp连接OMV系统【默认用户名root密码openmediavault】。连接后打开etc-找到rc.loal,右键点编辑，在exit 0上一行添加service mysqld start保存退出。就可以了")]),t._v(" "),e("h3",{attrs:{id:"备份数据库和还原数据库"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#备份数据库和还原数据库"}},[t._v("#")]),t._v(" 备份数据库和还原数据库")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/waimao8/image@master/20200112182628.png",alt:""}})]),t._v(" "),e("h1",{attrs:{id:"顺便推荐一个非常漂亮的主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#顺便推荐一个非常漂亮的主题"}},[t._v("#")]),t._v(" 顺便推荐一个非常漂亮的主题")]),t._v(" "),e("p",[t._v("https://zhebk.cn/Web/Akina.html")]),t._v(" "),e("h1",{attrs:{id:"下面是相关命令和教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下面是相关命令和教程"}},[t._v("#")]),t._v(" 下面是相关命令和教程")]),t._v(" "),e("p",[t._v("omv-firstaid\nFirst aid 界面翻译")]),t._v(" "),e("p",[t._v("configure network interface 配置网络界面")]),t._v(" "),e("p",[t._v("configure web control panel 配置Web控制面板")]),t._v(" "),e("p",[t._v("change control panel administrator password 更改控制面板管理员密码")]),t._v(" "),e("p",[t._v("restore failed login attempt counter 恢复失败登录尝试计数器")]),t._v(" "),e("p",[t._v("restore configuration backup 恢复配置备份")]),t._v(" "),e("p",[t._v("check configuration status file 检查配置状态文件")]),t._v(" "),e("p",[t._v("check RRD database 检查RRD数据库")]),t._v(" "),e("p",[t._v("clear local upload package repository 清除本地上传包存储库")]),t._v(" "),e("p",[t._v("clean apt 清除apt")]),t._v(" "),e("p",[t._v("clear web control panel cache 清除Web控制面板缓存")]),t._v(" "),e("p",[t._v("submit diagnostic report to administrator 向管理员提交诊断\n卸载相关\napt-get remove 会删除软件包而保留软件的配置文件\napt-get purge 会同时清除软件包和软件的配置文件\n卸载openmediavault命令\napt-get purge openmediavault")]),t._v(" "),e("p",[t._v("armbian-config可视化操作里面有许多快捷的系统设置，\n比如说基本的时间设置、网络设置，Wi-Fi设置，设置热点、安装桌面和远程、安装热门的第三方软件（诸如nginx Nextcloud、Plex、OpenMediaVault、Pi-hole、Transmission、Docker等热门软件）\n下面收集了一些omv的相关教程，可以参考\nomv使用")]),t._v(" "),e("p",[t._v("OMV安装NextCloud\nhttps://www.openmediavault.cn/read-omv-an-zhuang-nextcloud.html")]),t._v(" "),e("p",[t._v("phicomm N1 armbian环境下安装功能丰富的开源NAS系统 OpenMediaVault\nhttps://www.right.com.cn/forum/thread-342164-1-1.html")]),t._v(" "),e("p",[t._v("N1 OpenMediaVault 使用DLNA+VLC多媒体应用的小白教程\nhttps://www.right.com.cn/forum/thread-342841-1-1.html")]),t._v(" "),e("p",[t._v("OpenMediaVault(OMV)配置Docker\nhttps://www.jianshu.com/p/5b0eacc61527")]),t._v(" "),e("p",[t._v("OMV安装可道云(kodexplorer)\nhttps://www.jianshu.com/p/4731a1ef01d1")]),t._v(" "),e("p",[t._v("OMV安装web服务器详细教程\nhttps://jingyan.baidu.com/article/0aa223757304e688cd0d6464.html")])])}),[],!1,null,null,null);a.default=r.exports}}]);