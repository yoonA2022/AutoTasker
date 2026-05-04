import customtkinter as ctk


class HelloWorldWindow(ctk.CTk):
    def __init__(self):
        super().__init__()

        # 窗口基本设置
        self.title("你好世界")
        self.geometry("400x300")
        self.resizable(False, False)

        # 设置主题
        ctk.set_appearance_mode("system")
        ctk.set_default_color_theme("blue")

        # 标签
        self.label = ctk.CTkLabel(
            self,
            text="你好，世界！",
            font=ctk.CTkFont(size=28, weight="bold"),
        )
        self.label.pack(expand=True)

        # 按钮
        self.button = ctk.CTkButton(
            self,
            text="点击我",
            command=self.on_button_click,
        )
        self.button.pack(pady=20)

    def on_button_click(self):
        self.label.configure(text="欢迎使用自动化工具！")


def run():
    app = HelloWorldWindow()
    app.mainloop()
