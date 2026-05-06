# 🛠 AutoTasker

这是一个基于 Electron + React + Vite + HeroUI + TypeScript 的桌面应用程序。

## 🧱 项目结构

```

AutoTasker/
├── assets/                    # 静态资源，如图标
│   └── icons/
├── frontend/                 # React + Vite 前端代码
│   ├── src/
│   ├── package.json
├── main.js                   # Electron 主进程入口
├── preload.js                # Electron preload 脚本
└── package.json              # 根目录配置和打包项

````

---

## 🧪 前端开发

进入项目后，你可以先运行前端开发服务器：

```bash
cd frontend
npm install
npm run dev
````

访问：

```
http://localhost:5173/
```

---

## 📦 启动 Electron 开发模式

根目录已经配置好了相关脚本，你只需运行：

```bash
npm install
npm start
```

这条命令会：

* 启动 Vite 前端开发服务器
* 等待 [http://localhost:5173](http://localhost:5173) 准备完毕
* 启动 Electron 并打开窗口

---

## 📈 生产环境打包

项目使用 **electron-builder** 打包 Windows 可执行程序。执行：

```bash
npm run build
```

构建过程会：

1. 进入 `AutoTasker/` 并运行 `npm run build` 编译 React 代码
2. 使用 `electron-builder` 将整个项目打包成安装程序

构建完成后生成的安装器可在：

```
dist/your-installer.exe
```


## 📄 许可

MIT License

---

## ⚡ 关于

本项目基于现代前端和 Electron 开发流程，可作为你开发复杂桌面应用的基础框架。欢迎按照此模板扩展业务功能。
