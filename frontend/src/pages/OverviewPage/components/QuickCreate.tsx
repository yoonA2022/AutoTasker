import { Card } from "@/components/ui/card";
import { PlusCircle, Disc, LayoutGrid, FolderOpen } from "lucide-react";

const actions = [
    {
        icon: PlusCircle,
        title: "新建任务",
        description: "从空白开始创建",
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        icon: Disc,
        title: "录制流程",
        description: "录制你的操作步骤",
        color: "text-blue-600",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        icon: LayoutGrid,
        title: "使用模板",
        description: "从模板创建任务",
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
    {
        icon: FolderOpen,
        title: "导入任务",
        description: "从文件导入任务",
        color: "text-blue-500",
        bg: "bg-blue-50 dark:bg-blue-500/10",
    },
];

export function QuickCreate() {
    return (
        <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">快速创建</h3>
            <div className="grid grid-cols-2 gap-3">
                {actions.map((action) => (
                    <Card
                        key={action.title}
                        className="cursor-pointer flex-row items-center gap-3 border bg-card px-5 py-4 transition-colors hover:bg-accent"
                    >
                        <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${action.bg}`}
                        >
                            <action.icon className={`h-5 w-5 ${action.color}`} />
                        </div>
                        <div className="min-w-0">
                            <div className="text-sm font-semibold text-foreground">
                                {action.title}
                            </div>
                            <div className="truncate text-xs text-muted-foreground">
                                {action.description}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
