# 跳转导航首页

这是一个简单而动态的网页首页，用于提供不同功能的跳转导航。用户可以通过此界面选择跳转到下载界面或视频教程（包括安卓教程和电脑教程）。

## 特点

- 响应式设计，适配手机和电脑
- 动态UI效果，包括粒子背景、过渡动画等
- 简洁美观的界面设计
- 易于部署和维护

## 项目结构

```
.
├── index.html           # 首页
├── download.html        # 下载页
├── tutorial-android.html  # 安卓教程页
├── tutorial-pc.html     # 电脑教程页
├── css/
│   └── style.css        # 样式文件
├── js/
│   └── script.js        # JavaScript脚本
└── README.md           # 项目文档
```

## 部署指南

### 使用GitHub Pages部署

1. 创建一个GitHub仓库
2. 上传所有项目文件到仓库
3. 前往仓库设置 (Settings)
4. 滚动到GitHub Pages部分
5. 在Source下选择main分支
6. 点击Save按钮
7. 等待几分钟，你的网站将会在显示的URL上线

### 本地测试

你可以在本地预览这个网站：

1. 克隆仓库到本地
```bash
git clone https://github.com/你的用户名/你的仓库名.git
```

2. 使用浏览器打开`index.html`文件，或使用本地服务器工具如Live Server运行

## 自定义

- 修改`style.css`文件可以自定义网站风格和颜色
- 在`index.html`中可以修改按钮文本和链接地址
- 替换视频教程页面中的占位符为实际视频嵌入代码

## 许可证

MIT许可证 