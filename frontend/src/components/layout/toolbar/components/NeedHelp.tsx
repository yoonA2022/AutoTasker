import {
    SidebarGroup,
    SidebarGroupLabel,
} from "@/components/ui/sidebar";
import {
    BookOpen,
    MessageCircleQuestion,
    FileText,
    ExternalLink,
} from "lucide-react";

const helpLinks = [
    {
        icon: BookOpen,
        title: "使用文档",
        description: "查看详细的使用指南",
    },
    {
        icon: MessageCircleQuestion,
        title: "常见问题",
        description: "查找常见问题的解答",
    },
    {
        icon: FileText,
        title: "更新日志",
        description: "了解最新版本的变化",
    },
];

export function NeedHelp() {
    return (
        <SidebarGroup>
            <SidebarGroupLabel className="px-2">需要帮助</SidebarGroupLabel>
            <div className="mt-1 flex flex-col">
                {helpLinks.map((item) => (
                    <button
                        key={item.title}
                        className="flex items-center gap-3 rounded-md px-2 py-2.5 text-left transition-colors hover:bg-sidebar-accent"
                    >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                            <item.icon className="h-4.5 w-4.5 text-muted-foreground" />
                        </div>
                        <div className="min-w-0 flex-1">
                            <div className="truncate text-sm font-medium text-sidebar-foreground">
                                {item.title}
                            </div>
                            <div className="text-xs text-muted-foreground">
                                {item.description}
                            </div>
                        </div>
                        <ExternalLink className="h-3.5 w-3.5 shrink-0 text-muted-foreground/50" />
                    </button>
                ))}
            </div>
        </SidebarGroup>
    );
}
