---
sidebar: auto
layout: post
title: Beyond Compare 破解
---



## MacOS

1.进入Beyond Compare应用程序MacOS目录下(`/Applications/Beyond Compare.app/Contents/MacOS`)
2.将主启动程序`BCompare`重命名为`BCompare.real`

```bash
mv BCompare BCompare.real
```

3.在同级目录下新建一个脚本文件命名为`BCompare`，文件内容往下看

```bash
touch BCompare
```

4.给新建的文件`BCompare`，授权文件执行权限

---

1.创建BCompare文件命令如下：

在这个脚本里面写如下代码，第一行是注明解释器，第二行是删除注册信息，第三行是启动真正的主程序。

```bash
#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.real $@
```

2.授权文件执行权限

```perl
chmod a+x /Applications/Beyond\ Compare.app/Contents/MacOS/BCompare
```

## windows

```latex
Beyond Compare 4 註冊碼
Licensed to:    ASIO Allsoftinone
Quantity:       1 user
Serial number:  1822-9597
License type:   Pro Edition for Windows

--- BEGIN LICENSE KEY ---

H1bJTd2SauPv5Garuaq0Ig43uqq5NJOEw94wxdZTpU-pFB9GmyPk677gJ
vC1Ro6sbAvKR4pVwtxdCfuoZDb6hJ5bVQKqlfihJfSYZt-xVrVU27+0Ja
hFbqTmYskatMTgPyjvv99CF2Te8ec+Ys2SPxyZAF0YwOCNOWmsyqN5y9t
q2Kw2pjoiDs5gIH-uw5U49JzOB6otS7kThBJE-H9A76u4uUvR8DKb+VcB
rWu5qSJGEnbsXNfJdq5L2D8QgRdV-sXHp2A-7j1X2n4WIISvU1V9koIyS
NisHFBTcWJS0sC5BTFwrtfLEE9lEwz2bxHQpWJiu12ZeKpi+7oUSqebX+

--- END LICENSE KEY -----
```

## 配置

![setting](https://github.com/zeroNav/cdn/blob/master/beyoncompare_config.jpg?raw=true)