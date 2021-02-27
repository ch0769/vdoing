(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{428:function(a,t,v){"use strict";v.r(t);var s=v(14),e=Object(s.a)({},(function(){var a=this,t=a.$createElement,v=a._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[v("h2",{attrs:{id:"官方安装教程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#官方安装教程"}},[a._v("#")]),a._v(" 官方安装教程")]),a._v(" "),v("p",[a._v("https://wiki.archlinux.org/index.php/Installation_guide_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)")]),a._v(" "),v("h2",{attrs:{id:"手敲键盘部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#手敲键盘部分"}},[a._v("#")]),a._v(" 手敲键盘部分")]),a._v(" "),v("p",[a._v("开启SSH")]),a._v(" "),v("p",[a._v("首先设置root的密码 passwd")]),a._v(" "),v("p",[a._v("回车之后输入root的密码即可")]),a._v(" "),v("p",[a._v("打开sshd")]),a._v(" "),v("p",[a._v("systemctl start sshd")]),a._v(" "),v("p",[a._v("查看ip地址")]),a._v(" "),v("p",[a._v("ip addr")]),a._v(" "),v("p",[a._v("4、安装工具\npacman -Syy\npacman -S net-tools openssh")]),a._v(" "),v("p",[a._v("5、启动 ssh")]),a._v(" "),v("p",[a._v("systemctl start sshd")]),a._v(" "),v("p",[a._v("dhcpcd  #网线\nwifi-menu # wifi\nping www.baidu.com")]),a._v(" "),v("p",[a._v("ctrt+c  #退出ping")]),a._v(" "),v("h2",{attrs:{id:"复制粘帖部分"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#复制粘帖部分"}},[a._v("#")]),a._v(" 复制粘帖部分")]),a._v(" "),v("p",[a._v("用ssh软件登录")]),a._v(" "),v("p",[a._v("windows推荐Xshell        linux推荐putty")]),a._v(" "),v("p",[a._v("登录后就可以复制下面代码敲回车就可以了。")]),a._v(" "),v("h3",{attrs:{id:"硬盘分区"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#硬盘分区"}},[a._v("#")]),a._v(" 硬盘分区")]),a._v(" "),v("p",[a._v("查看磁盘信息  sda")]),a._v(" "),v("p",[a._v("fdisk -l  # 查看磁盘信息  我查看的是sda 下面请把sda改成你的就可以了")]),a._v(" "),v("p",[a._v("硬盘分区有两种方法，请选一种 cfdisk是图像化的  fdisk是纯命令的\n#方法一：图像化的操作\ncfdisk /dev/sda\n分别用new新建三个分区 分别选择Type 选择类型\nsda1   512M  EFI system\nsda3    4G      linux swap      # 不要大于虚拟机实际内存\nsda2   默认剩余全部 linux filesystem"),v("br"),a._v("\n分好后选择Write写入 选择\nQuit退出")]),a._v(" "),v("p",[a._v("#方法二：纯命令的操作")]),a._v(" "),v("p",[a._v("fdisk /dev/sda\n输入m #显示菜单\n输入p #显示硬盘情况\n输入M 输入g   # 硬盘更改成GPT分区")]),a._v(" "),v("p",[a._v("输入n # 分区\n先选择1 回车再回车再输入+512M\n输入t 输入1  # 可以输入L查看格式\n输入W\n输入m"),v("br"),a._v("\n输入n输入n # 分区\n先选择3 回车再回车再输入+4G\n输入t 输入19\n输入W\n输入m"),v("br"),a._v("\n输入n输入n # 分区\n先选择2 回车再回车再回车"),v("br"),a._v("\n#剩余目录会自动全部分配到这里\nsda2无需更改格式 默认是就是linux filesystem\n输入W\n最后输入q退出分区\n下面命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的")]),a._v(" "),v("p",[a._v("#上面是两种硬盘分区教程，随便选一种吧，下面要格式化硬盘\nfdisk -l  # 查看磁盘信息\n下面的命令直接打复制粘贴就可以了  sda1，2，3 请改成你自己的")]),a._v(" "),v("h3",{attrs:{id:"挂载并格式化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载并格式化"}},[a._v("#")]),a._v(" 挂载并格式化")]),a._v(" "),v("p",[a._v("mkfs.fat -F32 /dev/sda1\nmkfs.ext4 /dev/sda2\nmkswap /dev/sda3\nswapon /dev/sda3")]),a._v(" "),v("p",[a._v("挂载根分区到/mnt下")]),a._v(" "),v("p",[a._v("mount /dev/sda2 /mnt")]),a._v(" "),v("p",[a._v("创建 boot 文件夹 来挂载EFI分区")]),a._v(" "),v("p",[a._v("mkdir /mnt/boot")]),a._v(" "),v("p",[a._v("挂载EFI分区到 /mnt/boot 下")]),a._v(" "),v("p",[a._v("mount /dev/sda1 /mnt/boot")]),a._v(" "),v("p",[a._v("df 查看挂载情况")]),a._v(" "),v("h3",{attrs:{id:"编辑软件源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编辑软件源"}},[a._v("#")]),a._v(" 编辑软件源")]),a._v(" "),v("p",[a._v("nano /etc/pacman.d/mirrorlist  #fdisk -k 删除多余的源，fdisk -x 退出 y 回车\n我选了下面三个，选一个也行\nhttps://mirrors.tuna.tsinghua.edu.cn/\nmirrors.tuna.tsinghua.edu.cn\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch\nServer = http://mirrors.163.com/archlinux/$repo/os/$arch\nServer = http://mirrors.aliyun.com/archlinux/$repo/os/$arch")]),a._v(" "),v("p",[a._v("Server = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$repo/os/$arch\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch\nServer = http://mirrors.163.com/archlinux/$repo/os/$arch\nServer = http://mirrors.163.com/archlinux-cn/$repo/os/$arch")]),a._v(" "),v("p",[a._v("更新系统\npacman -Syy")]),a._v(" "),v("h3",{attrs:{id:"安装系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装系统"}},[a._v("#")]),a._v(" 安装系统")]),a._v(" "),v("p",[a._v("安装必须的软件包 （不建议）")]),a._v(" "),v("p",[a._v("pacstrap /mnt base linux linux-firmware")]),a._v(" "),v("p",[a._v("安装加强版的软件包 （建议）")]),a._v(" "),v("p",[a._v("pacstrap /mnt base linux linux-firmware base-devel networkmanager intel-ucode vim git openssh net-tools")]),a._v(" "),v("p",[a._v("用以下命令生成 fstab 文件 (用 -U 或 -L 选项设置UUID 或卷标)：")]),a._v(" "),v("p",[a._v("genfstab -U /mnt >> /mnt/etc/fstab")]),a._v(" "),v("p",[a._v("cat /mnt/etc/fstab\n检查\nvim /mnt/etc/fstab")]),a._v(" "),v("h3",{attrs:{id:"change-root-到新安装的系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#change-root-到新安装的系统"}},[a._v("#")]),a._v(" Change root 到新安装的系统")]),a._v(" "),v("p",[a._v("arch-chroot /mnt")]),a._v(" "),v("p",[a._v("#设置时区：\nln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime")]),a._v(" "),v("p",[a._v("#同步时区\nhwclock --systohc")]),a._v(" "),v("p",[a._v("安装vim\npacman -S vim")]),a._v(" "),v("p",[a._v("本地化：")]),a._v(" "),v("p",[a._v("设置系统语言")]),a._v(" "),v("p",[a._v("vim /etc/locale.gen\nnano /etc/locale.gen")]),a._v(" "),v("p",[a._v("把 en_US.UTF-8 UTF-8和zh_CN.UTF-8 UTF-8注释都去掉之后 按esc退出编辑模式，然后 :wq 保存退出")]),a._v(" "),v("p",[a._v("生成一下语言")]),a._v(" "),v("p",[a._v("locale-gen")]),a._v(" "),v("p",[a._v("最后设置缺省的语言，这里推荐使用英文，不然到时候进入命令模式的时候会出现中文乱码")]),a._v(" "),v("p",[a._v("echo LANG=en_US.UTF-8 >> /etc/locale.conf\necho LANG=zh_CN.UTF-8 >> /etc/locale.conf\nsudo vim /etc/locale.conf")]),a._v(" "),v("p",[a._v("这里使用一个箭头或者两个箭头都可以")]),a._v(" "),v("p",[a._v("设置 主机名")]),a._v(" "),v("p",[a._v("echo archlinux >> /etc/hostname")]),a._v(" "),v("p",[a._v("#网络配置\nvim /etc/hosts  #输入下面内容")]),a._v(" "),v("p",[a._v("127.0.0.1 localhost\n::1 localhost\n127.0.1.1 archlinux.localdomain archlinux")]),a._v(" "),v("p",[a._v("127.0.0.1    localhost    localhost\n::1          localhost   localhost\n127.0.1.1    archlinux.localdomain    archlinux")]),a._v(" "),v("p",[a._v("保存并退出")]),a._v(" "),v("p",[a._v("安装网络管理（如果不安装这个服务的话，每次开机都得重新设置网络）\npacman -S networkmanager\npacman -S net-tools openssh\n开机启动\nsystemctl enable NetworkManager sshd")]),a._v(" "),v("p",[a._v("设置root密码\npasswd")]),a._v(" "),v("p",[a._v("安装一个其他用户\nuseradd -m -g wheel chenan")]),a._v(" "),v("p",[a._v("passwd chenan")]),a._v(" "),v("p",[a._v("pacman -S sudo")]),a._v(" "),v("p",[a._v("visudo   # 去掉%wheel=（ALL）ALL 前面的#号")]),a._v(" "),v("h3",{attrs:{id:"安装grub"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装grub"}},[a._v("#")]),a._v(" 安装grub")]),a._v(" "),v("p",[a._v("重新生成ramdisk环境\nmkinitcpio -p linux")]),a._v(" "),v("p",[a._v("pacman -S grub efibootmgr\ngrub-install --target=x86_64-efi --efi-directory=/boot --bootloader-id=GRUB\ngrub-mkconfig -o /boot/grub/grub.cfg")]),a._v(" "),v("p",[a._v("exit 或按 Ctrl+d 退出 chroot 环境。")]),a._v(" "),v("p",[a._v("可选用 umount -R /mnt 手动卸载被挂载的分区：这有助于发现任何「繁忙」的分区，并通过 fuser(1) 查找原因。")]),a._v(" "),v("p",[a._v("最后，通过执行 reboot 重启系统")]),a._v(" "),v("h2",{attrs:{id:"再用ssh软件登录-安装桌面和服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#再用ssh软件登录-安装桌面和服务"}},[a._v("#")]),a._v(" 再用ssh软件登录，安装桌面和服务")]),a._v(" "),v("h3",{attrs:{id:"添加清华源"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#添加清华源"}},[a._v("#")]),a._v(" 添加清华源")]),a._v(" "),v("p",[a._v("sudo vim /etc/pacman.conf\n把multilib和它下面一行的 # 去掉，具体是把光标移到 # 那，按 x ，然后在文件里添加 archlinuxcn 源，按 i 输入\n[archlinuxcn]\nServer = https://mirrors.tuna.tsinghua.edu.cn/archlinuxcn/$arch")]),a._v(" "),v("p",[a._v("sudo pacman -Syu")]),a._v(" "),v("p",[a._v("sudo pacman -S archlinuxcn-keyring")]),a._v(" "),v("p",[a._v("sudo pacman -Syyu   #更新到最新系统")]),a._v(" "),v("h3",{attrs:{id:"安装x-服务"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装x-服务"}},[a._v("#")]),a._v(" 安装x 服务")]),a._v(" "),v("p",[a._v("sudo pacman -S xorg")]),a._v(" "),v("h3",{attrs:{id:"安装桌面环境"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装桌面环境"}},[a._v("#")]),a._v(" 安装桌面环境")]),a._v(" "),v("p",[a._v("sudo pacman -S xfce4 xfce4-goodies")]),a._v(" "),v("h3",{attrs:{id:"安装字体"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装字体"}},[a._v("#")]),a._v(" 安装字体")]),a._v(" "),v("p",[a._v("sudo pacman -S ttf-dejavu wqy-bitmapfont wqy-microhei wqy-zenhei noto-fonts noto-fonts-emoji")]),a._v(" "),v("h3",{attrs:{id:"安装ligthdm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装ligthdm"}},[a._v("#")]),a._v(" 安装ligthdm")]),a._v(" "),v("p",[a._v("pacman -S lightdm lightdm-gtk-greeter")]),a._v(" "),v("p",[a._v("sudo pacman -S lightdm lightdm-gtk-greeter lightdm-gtk-greeter-settings\nsystemctl enable lightdm")]),a._v(" "),v("p",[a._v("systemctl enable lightdm.service")]),a._v(" "),v("p",[a._v("从图形界面进入到命令行界面")]),a._v(" "),v("p",[a._v("systemctl disable lightdm.service\n从命令行进入到图形界面")]),a._v(" "),v("p",[a._v("systemctl enable lightdm.service\n然后")]),a._v(" "),v("p",[a._v("systemctl start lightdm.service")]),a._v(" "),v("h3",{attrs:{id:"测试开启桌面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#测试开启桌面"}},[a._v("#")]),a._v(" 测试开启桌面")]),a._v(" "),v("p",[a._v("sudo systemctl start lightdm.service")]),a._v(" "),v("h3",{attrs:{id:"自动开启桌面"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#自动开启桌面"}},[a._v("#")]),a._v(" 自动开启桌面")]),a._v(" "),v("p",[a._v("systemctl enable lightdm.service")]),a._v(" "),v("h3",{attrs:{id:"安装声卡驱动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装声卡驱动"}},[a._v("#")]),a._v(" 安装声卡驱动")]),a._v(" "),v("p",[a._v("sudo pacman -S alsa-utils pulseaudio-alsa")]),a._v(" "),v("h3",{attrs:{id:"虚拟机显卡驱动"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机显卡驱动"}},[a._v("#")]),a._v(" 虚拟机显卡驱动")]),a._v(" "),v("p",[a._v("pcaman -S xf86-video-vesa")]),a._v(" "),v("h3",{attrs:{id:"安装软件商店"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装软件商店"}},[a._v("#")]),a._v(" 安装软件商店")]),a._v(" "),v("p",[a._v("sudo pacman -S pamac")]),a._v(" "),v("h3",{attrs:{id:"安装yay"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装yay"}},[a._v("#")]),a._v(" 安装yay")]),a._v(" "),v("p",[a._v("sudo pacman -S yay\nsudo pacman -S pcaman")]),a._v(" "),v("h3",{attrs:{id:"英文改中文"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#英文改中文"}},[a._v("#")]),a._v(" 英文改中文")]),a._v(" "),v("p",[a._v("sudo vim /etc/locale.conf\nLANG=en_US.UTF-8  改成 LANG=zh_CN.UTF-8")]),a._v(" "),v("h3",{attrs:{id:"按照官网教程安装vmware-tools"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#按照官网教程安装vmware-tools"}},[a._v("#")]),a._v(" 按照官网教程安装VMware Tools")]),a._v(" "),v("p",[a._v("https://wiki.archlinux.org/index.php/VMware/Install_Arch_Linux_as_a_guest")]),a._v(" "),v("p",[a._v("sudo pacman -S xf86-input-vmmouse xf86-video-vmware mesa")]),a._v(" "),v("p",[a._v("sudo pacman -S open-vm-tools gtkmm3")]),a._v(" "),v("p",[a._v("sudo systemctl start vmtoolsd.service")]),a._v(" "),v("p",[a._v("sudo systemctl enable vmtoolsd.service")]),a._v(" "),v("p",[a._v("sudo systemctl start vmware-vmblock-fuse.service")]),a._v(" "),v("p",[a._v("sudo systemctl enable vmware-vmblock-fuse.service")]),a._v(" "),v("p",[a._v("sudo pacman -S gtkmm gtk2")]),a._v(" "),v("p",[a._v("sudo vim /etc/mkinitcpio.conf\nMODULES=(）前面加# 下一行加上下面的代码\nMODULES=(vsock vmw_vsock_vmci_transport vmw_balloon vmw_vmci vmwgfx)")]),a._v(" "),v("h3",{attrs:{id:"xorg设置"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#xorg设置"}},[a._v("#")]),a._v(" Xorg设置")]),a._v(" "),v("p",[a._v("pacman -S xf86-input-vmmouse xf86-video-vmware mesa\nyay -S xf86-input-vmmouse xf86-video-vmware mesa")]),a._v(" "),v("p",[a._v("vim /etc/X11/Xwrapper.config")]),a._v(" "),v("p",[a._v("needs_root_rights=yes")]),a._v(" "),v("h3",{attrs:{id:"安装小企鹅"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装小企鹅"}},[a._v("#")]),a._v(" 安装小企鹅")]),a._v(" "),v("p",[a._v("sudo pacman -S fcitx fcitx-im fcitx-configtool")]),a._v(" "),v("p",[a._v("sudo pacman -S fcitx fcitx-im")]),a._v(" "),v("h3",{attrs:{id:"配置小企鹅输入法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#配置小企鹅输入法"}},[a._v("#")]),a._v(" 配置小企鹅输入法")]),a._v(" "),v("p",[a._v("sudo vim ~/.xprofile")]),a._v(" "),v("p",[a._v("在文件中加入如下几行配置：")]),a._v(" "),v("p",[a._v("#fcitx\nexport LC_ALL=zh_CN.UTF-8\nexport GTK_IM_MODULE=fcitx"),v("br"),a._v("\nexport QT_IM_MODULE=fcitx"),v("br"),a._v('\nexport XMODIFIERS="@im=fcitx"')]),a._v(" "),v("h3",{attrs:{id:"安装搜狗输入法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装搜狗输入法"}},[a._v("#")]),a._v(" 安装搜狗输入法")]),a._v(" "),v("p",[a._v("sudo pacman -S yay\nyay -S fcitx-sogoupinyin\nyay -S fcitx-qt4")]),a._v(" "),v("p",[a._v("从AUR下载安装包并安装\n打开https://aur.archlinux.org/\nhttps://aur.archlinux.org/packages/deepin.com.qq.im.light/\n解压\ntar -zxvf deepin.com.qq.im.light.tar.gz\n在解压后的目录输入\nmakepkg -s\n编译完成后会生成一个.pkg.tar.xz的文件,再用pacman -U执行本地安装\npacman -U deepin.com.qq.im.light-7.9.14308deepin8-4-x86_64.pkg.tar.zst")]),a._v(" "),v("p",[a._v("tar -zxvf  deepin-wine-wechat.tar.gz")]),a._v(" "),v("p",[a._v("pacman -U deepin.com.qq.im.light.tar.gz")]),a._v(" "),v("h3",{attrs:{id:"谷歌输入法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#谷歌输入法"}},[a._v("#")]),a._v(" 谷歌输入法")]),a._v(" "),v("p",[a._v("sudo pacman -S fcitx-googlepinyin")]),a._v(" "),v("h3",{attrs:{id:"常用软件安装"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常用软件安装"}},[a._v("#")]),a._v(" 常用软件安装")]),a._v(" "),v("p",[a._v("wps")]),a._v(" "),v("p",[a._v("https://linux.wps.cn/\nyay -S wps-office\n安装中文\nyay -S wps-office-mui-zh-cn")]),a._v(" "),v("p",[a._v("可以到软件商店设置里面开启AUR\n找到wps-office-mui-zh-cn 点击构建  耐心等待几分钟，安装后 新建一个文档\n右上角有个A字，点击，就可以选择中文，重启WPS 就是中文的了")]),a._v(" "),v("p",[a._v("yaourt -S deepin.com.qq.im")]),a._v(" "),v("p",[a._v("yaourt -S deepin-wine deepin-wine32")]),a._v(" "),v("p",[a._v("wps 依赖字体")]),a._v(" "),v("p",[a._v("sudo pacman -S ttf-wps-fonts")]),a._v(" "),v("p",[a._v("google-chrome\nsudo pacman -S google-chrome")]),a._v(" "),v("p",[a._v("Markdown编辑器\nsudo pacman -S typora")]),a._v(" "),v("p",[a._v("网易云音乐\nsudo pacman -S netease-cloud-music\nyaourt -S netease-cloud-music")]),a._v(" "),v("p",[a._v("https://www.bilibili.com/video/BV14J411i72o?from=search&seid=10908065740456618903\nhttps://github.com/xylzq/arch")]),a._v(" "),v("h3",{attrs:{id:"关于arch的一些实用软件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#关于arch的一些实用软件"}},[a._v("#")]),a._v(" 关于arch的一些实用软件")]),a._v(" "),v("p",[a._v("1.录屏软件")]),a._v(" "),v("p",[a._v("sudo pacman -S simplescreenrecorder\n2.显示按键软件")]),a._v(" "),v("p",[a._v("sudo pacman -S screenkey\n3.剪辑视频软件")]),a._v(" "),v("p",[a._v("sudo pacman -S kdenlive\n汉化\nsudo mv kdenlive.mo /usr/share/locale/zh_CN/LC_MESSAGES/")]),a._v(" "),v("p",[a._v("pan.baidu.com/s/1dFF8kp\n4.修图软件")]),a._v(" "),v("p",[a._v("sudo pacman -S gimp")]),a._v(" "),v("p",[a._v("安装坚果云\nsudo pacman -S nutstore")]),a._v(" "),v("p",[a._v("安装微信\nsudo pacman -S electronic-wechat")]),a._v(" "),v("p",[a._v("安装\nsudo pacman -S yaourt")]),a._v(" "),v("p",[a._v("网盘同步Rclone\nsudo pacman -S rclone")]),a._v(" "),v("p",[a._v("gitkraken -Git管理工具")]),a._v(" "),v("p",[a._v("sudo pacman -S gitkraken\nVscode:visual-studio-code-bin\nyay -S visual-studio-code-bin")]),a._v(" "),v("p",[a._v("Virtualbox\nsudo pacman -S virtualbox")]),a._v(" "),v("p",[a._v("aur qq\nhttps://aur.archlinux.org/packages/deepin.com.qq.im.light/")]),a._v(" "),v("p",[a._v("https://github.com/orangbus/tool")]),a._v(" "),v("p",[a._v("画图软件 KRITA")]),a._v(" "),v("p",[a._v("安装AppImage软件\n添加可执行权限\nchmod a+x "),v("em",[a._v(".AppImage\n执行它！\n./")]),a._v(".AppImage")]),a._v(" "),v("p",[a._v("chmod a+x Qv2ray.v2.7.0-pre1.linux-x64.AppImage\n./Qv2ray.v2.7.0-pre1.linux-x64.AppImage")]),a._v(" "),v("h3",{attrs:{id:"一个将deb包转换成pkg包的软件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一个将deb包转换成pkg包的软件"}},[a._v("#")]),a._v(" 一个将deb包转换成pkg包的软件")]),a._v(" "),v("p",[a._v("debtap配置安装\nsudo pacman -S pkgfile\ngit clone https://github.com/helixarch/debtap\ncd debtap\nsudo cp debtap /usr/local/bin\nsudo debtap -u")]),a._v(" "),v("p",[a._v("sudo vim /usr/bin/debtap")]),a._v(" "),v("p",[a._v("使用方法\nsudo debtap xxxx.deb")]),a._v(" "),v("p",[a._v("安装时会提示输入包名，以及license。包名随意，license就填GPL")]),a._v(" "),v("p",[a._v("安装转换好的本地包\nsudo pacman -U xxx.tar.xz")]),a._v(" "),v("p",[a._v("sudo debtap wps-office_11.1.0.9719_amd64.deb")]),a._v(" "),v("p",[a._v("sudo pacman -U wps-office-11.1.0.9719-1-x86_64.pkg.tar.zst")]),a._v(" "),v("p",[a._v("sudo debtap Tenvideo_universal_1.0.10_amd64.deb")]),a._v(" "),v("p",[a._v("sudo pacman -U tenvideo-universal-1.0.10-1-x86_64.pkg.tar.zst")]),a._v(" "),v("h3",{attrs:{id:"安装安卓模拟器xdroid"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#安装安卓模拟器xdroid"}},[a._v("#")]),a._v(" 安装安卓模拟器xDroid")]),a._v(" "),v("p",[a._v("https://www.linzhuotech.com/")]),a._v(" "),v("p",[a._v("系统更新\nsudo pacman -Syu")])])}),[],!1,null,null,null);t.default=e.exports}}]);