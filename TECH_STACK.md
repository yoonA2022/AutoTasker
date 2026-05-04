# ⚡ 自动化工具 — 技术栈介绍

## 项目概述

本项目是一款基于 Python 的 **Windows 桌面自动化工具**，支持通过图形界面和全局热键触发键盘快捷键自动化任务，并可打包为独立 EXE 文件分发。

---

## 技术栈总览

| 用途 | 技术 | 版本要求 |
|------|------|---------|
| 开发语言 | Python | 3.14.4 + |
| GUI 界面 | CustomTkinter | 5.2.2 |
| 键盘控制 | keyboard | 0.13.5 |
| 打包工具 | PyInstaller | 6.20.0 |

---


**主要特性：**
- ✅ 支持亮色 / 暗色 / 系统自适应主题
- ✅ 内置多种现代风格组件（按钮、滑块、输入框等）
- ✅ 跨平台（Windows / macOS / Linux）
- ✅ 与原生 tkinter 完全兼容


---

### ⌨️ keyboard

- **安装**：`pip install keyboard`
- **用途**：全局键盘监听与快捷键模拟

`keyboard` 是一个轻量级的键盘控制库，可以在**全局范围内**（不依赖窗口焦点）监听和触发键盘事件，非常适合自动化工具场景。

**主要特性：**
- ✅ 全局热键注册（软件在后台也能响应）
- ✅ 模拟任意按键和组合键
- ✅ 监听键盘输入事件
- ✅ 支持 Windows / Linux

> ⚠️ **注意**：在 Windows 上运行需要**管理员权限**，打包后的 EXE 建议勾选"以管理员身份运行"。


### 📦 PyInstaller

- **官网**：https://pyinstaller.org
- **安装**：`pip install pyinstaller`
- **用途**：将 Python 项目打包为独立 EXE

PyInstaller 可以将整个 Python 环境和依赖打包进一个单独的 `.exe` 文件，用户无需安装 Python 即可直接运行。

**常用打包命令：**

```bash
# 单文件打包（推荐分发）
pyinstaller --onefile --windowed --name "AutoTool" main.py

# 带图标打包
pyinstaller --onefile --windowed --icon=icon.ico --name "AutoTool" main.py
```

| 参数 | 说明 |
|------|------|
| `--onefile` | 打包为单个 EXE 文件 |
| `--windowed` | 隐藏控制台黑窗口 |
| `--name` | 指定输出文件名 |
| `--icon` | 指定程序图标 |

---

## 快速开始

```bash
# 1. 克隆 / 创建项目目录
mkdir my-automation-tool && cd my-automation-tool

# 2. 创建虚拟环境
python -m venv venv
venv\Scripts\activate   # Windows

# 3. 安装依赖
pip install -r requirements.txt

# 4. 运行项目
python main.py

# 5. 打包为 EXE
pyinstaller --onefile --windowed --name "AutoTool" main.py
```

---

## 注意事项

1. **管理员权限**：`keyboard` 库在 Windows 上需要管理员权限才能监听全局热键。
2. **杀毒软件**：PyInstaller 打包的 EXE 可能被误报，可提交白名单或使用代码签名证书。
3. **多线程**：自动化任务运行在子线程中，避免阻塞 GUI 主线程。

---

*文档时间：2026年5月*