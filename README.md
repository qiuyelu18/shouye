# 简易导航页面

这是一个简单的导航页面，用于引导用户到下载页面或查看视频教程。

## 文件结构

```
.
├── index.html          # 首页
├── styles.css          # 主样式文件
├── script.js           # JavaScript脚本
├── download.html       # 下载页面
├── android-tutorial.html # 安卓教程页面
├── pc-tutorial.html    # 电脑教程页面
└── README.md           # 说明文件
```

## 使用GitHub Pages部署

1. 在GitHub上创建新仓库
2. 将所有文件上传到仓库
3. 进入仓库设置 (Settings)
4. 找到"Pages"选项
5. 在"Source"下选择"main"分支
6. 点击"保存"

几分钟后，您的网站将可通过`https://[你的用户名].github.io/[仓库名]`访问。

## 自定义

您可以根据需要修改以下文件：

- `index.html`: 更改首页内容和布局
- `styles.css`: 修改网站样式和主题颜色
- `download.html`: 更新下载链接
- `android-tutorial.html`和`pc-tutorial.html`: 添加实际的视频链接和教程内容

## 添加视频

要添加视频，请在各教程页面的`video-container`中插入YouTube或其他视频平台的嵌入代码。例如：

```html
<div class="video-container">
    <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
```

## 更新下载链接

在`download.html`中，更新下载按钮的链接：

```html
<button class="btn download-btn" onclick="window.location.href='你的下载链接'">下载安卓版(.apk)</button>
``` 