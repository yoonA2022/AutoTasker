import { useState } from "react";
import {
    SidebarGroup,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
    Tag,
    Clock,
    ImageDown,
    Mail,
    Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import excelImg from "@/assets/App-icons/excel.png";

interface Tool {
    id: string;
    icon: LucideIcon | string;
    iconColor?: string;
    iconBg?: string;
    name: string;
    usageCount: number;
    starred: boolean;
}

const defaultTools: Tool[] = [
    {
        id: "1",
        icon: excelImg,
        name: "Excel 数据处理",
        usageCount: 23,
        starred: false,
    },
    {
        id: "2",
        icon: Tag,
        iconColor: "text-amber-500",
        name: "文件批量重命名",
        usageCount: 18,
        starred: false,
    },
    {
        id: "3",
        icon: Clock,
        iconColor: "text-violet-500",
        name: "定时关机",
        usageCount: 15,
        starred: false,
    },
    {
        id: "4",
        icon: ImageDown,
        iconColor: "text-blue-500",
        name: "图片压缩",
        usageCount: 12,
        starred: false,
    },
    {
        id: "5",
        icon: Mail,
        iconColor: "text-sky-500",
        name: "发送邮件",
        usageCount: 9,
        starred: false,
    },
];

export function MyTools() {
    const [tools, setTools] = useState(defaultTools);

    function toggleStar(id: string) {
        setTools((prev) =>
            prev.map((t) =>
                t.id === id ? { ...t, starred: !t.starred } : t
            )
        );
    }

    return (
        <SidebarGroup>
            <div className="flex items-center justify-between px-2">
                <SidebarGroupLabel className="p-0">我的工具</SidebarGroupLabel>
                <button className="text-xs text-blue-500 hover:text-blue-600">
                    管理
                </button>
            </div>
            <div className="mt-1 flex flex-col">
                {tools.map((tool) => (
                    <div
                        key={tool.id}
                        className="flex items-center gap-3 rounded-md px-2 py-2.5 transition-colors hover:bg-sidebar-accent"
                    >
                        {/* 图标 */}
                        {typeof tool.icon === "string" ? (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
                                <img
                                    src={tool.icon}
                                    alt=""
                                    className="h-6 w-6 object-contain"
                                />
                            </div>
                        ) : (
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center">

                                <tool.icon
                                    className={`h-4.5 w-4.5 ${tool.iconColor ?? ""}`}
                                />
                            </div>
                        )}

                        {/* 名称 + 使用次数 */}
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium text-sidebar-foreground">
                                {tool.name}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                使用 {tool.usageCount} 次
                            </div>
                        </div>

                        {/* 收藏星星 */}
                        <button
                            onClick={() => toggleStar(tool.id)}
                            className="shrink-0 p-1 text-muted-foreground/50 transition-colors hover:text-amber-400"
                        >
                            <Star
                                className={`h-4 w-4 ${
                                    tool.starred
                                        ? "fill-amber-400 text-amber-400"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>
                ))}
            </div>
        </SidebarGroup>
    );
}
