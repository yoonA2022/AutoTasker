// 显示最近任务列表
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    FolderOpen,
    Mail,
    Terminal,
    MoreHorizontal,
    Pencil,
    Trash2,
    Copy,
    Play,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import folderOpenImg from "@/assets/App-icons/FolderOpen.png";
import excelImg from "@/assets/App-icons/excel.png";

interface Task {
    id: string;
    icon: LucideIcon | string;
    iconColor?: string;
    iconBg?: string;
    title: string;
    description: string;
    enabled: boolean;
    updatedAt: string;
}

const tasks: Task[] = [
    {
        id: "1",
        icon: folderOpenImg,
        title: "每日报表自动生成",
        description: "从数据源获取数据，生成并发送日报表",
        enabled: true,
        updatedAt: "今天 10:30",
    },
    {
        id: "2",
        icon: excelImg,
        iconColor: "text-green-600",
        title: "Excel 数据处理",
        description: "清洗并整理 Excel 数据，输出到指定目录",
        enabled: true,
        updatedAt: "今天 09:15",
    },
    {
        id: "3",
        icon: Mail,
        iconColor: "text-blue-500",
        title: "邮件自动回复",
        description: "对指定邮件进行自动回复",
        enabled: true,
        updatedAt: "昨天 18:20",
    },
    {
        id: "4",
        icon: FolderOpen,
        iconColor: "text-amber-500",
        title: "文件备份助手",
        description: "自动备份重要文件到指定目录",
        enabled: false,
        updatedAt: "昨天 16:45",
    },
    {
        id: "5",
        icon: Terminal,
        iconColor: "text-blue-500",
        title: "系统清理脚本",
        description: "清理临时文件和系统垃圾",
        enabled: true,
        updatedAt: "05-14 22:10",
    },
];

export function RecentTasks() {
    const [taskList, setTaskList] = useState(tasks);

    function handleToggle(id: string) {
        setTaskList((prev) =>
            prev.map((t) => (t.id === id ? { ...t, enabled: !t.enabled } : t))
        );
    }

    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-foreground">
                    最近任务
                </h3>
                <button className="text-sm text-blue-500 hover:text-blue-600">
                    全部任务 &gt;
                </button>
            </div>

            <Card className="gap-0 overflow-hidden border bg-card p-0">
                {/* 表头 */}
                <div className="grid grid-cols-[1fr_80px_120px_40px] items-center border-b px-5 py-3 text-xs text-muted-foreground">
                    <span>任务名称</span>
                    <span className="text-center">状态</span>
                    <span className="text-right">更新时间</span>
                    <span />
                </div>

                {/* 任务列表 */}
                {taskList.map((task, index) => (
                    <div
                        key={task.id}
                        className={`grid grid-cols-[1fr_80px_120px_40px] items-center px-5 py-4 transition-colors hover:bg-accent/50 ${
                            index < taskList.length - 1 ? "border-b" : ""
                        }`}
                    >
                        {/* 任务名称 */}
                        <div className="flex items-center gap-3">
                            {typeof task.icon === "string" ? (
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                                    <img
                                        src={task.icon}
                                        alt=""
                                        className="h-6 w-6 object-contain"
                                    />
                                </div>
                            ) : (
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center">
                                    <task.icon
                                        className={`h-5 w-5 ${task.iconColor ?? ""}`}
                                    />
                                </div>
                            )}
                            <div className="min-w-0">
                                <div className="text-sm font-semibold text-foreground">
                                    {task.title}
                                </div>
                                <div className="truncate text-xs text-muted-foreground">
                                    {task.description}
                                </div>
                            </div>
                        </div>

                        {/* 状态开关 */}
                        <div className="flex justify-center">
                            <Switch
                                checked={task.enabled}
                                onCheckedChange={() => handleToggle(task.id)}
                                className="data-checked:bg-blue-500"
                            />
                        </div>

                        {/* 更新时间 */}
                        <div className="text-right text-sm text-muted-foreground">
                            {task.updatedAt}
                        </div>

                        {/* 更多操作 */}
                        <div className="flex justify-end">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="h-8 w-8 text-muted-foreground"
                                    >
                                        <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuItem>
                                        <Play />
                                        运行
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Pencil />
                                        编辑
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Copy />
                                        复制
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="text-destructive">
                                        <Trash2 />
                                        删除
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
}
