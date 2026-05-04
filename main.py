# 程序入口
from tkinter import Image
from src.ui.hello_world import run


if __name__ == "__main__":
    print("AutoTasker 正在启动...")

    try:
        run()
    except KeyboardInterrupt:
        print("检测到手动中断，AutoTasker 正在退出...")
    finally:
        print("AutoTasker 已停止。")
