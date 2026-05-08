import { Card, CardContent } from "@/components/ui/card";
import { Crosshair, Play, Clock, RefreshCw } from "lucide-react";
import overviewBg from "@/assets/Overview/Overview.png";

const stats = [
    { label: "我的任务", value: 12, icon: Crosshair, color: "text-blue-500" },
    { label: "已启用", value: 8, icon: Play, color: "text-emerald-500" },
    { label: "计划任务", value: 24, icon: Clock, color: "text-blue-600" },
    { label: "已执行（本月）", value: 136, icon: RefreshCw, color: "text-amber-500" },
];

export function WelcomeCard() {
    return (
        <Card className="relative overflow-hidden border-0 bg-linear-to-r from-blue-500 to-blue-400">
            <img
                src={overviewBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
            />
            <CardContent className="relative z-10 flex flex-col gap-4 p-6 pb-5">
                <div className="space-y-1">
                    <h2 className="text-2xl font-bold text-white">
                        👋 你好，Jason
                    </h2>
                    <p className="text-sm text-white/80">
                        使用自动化任务，让 Windows 为你高效工作
                    </p>
                </div>
                <div className="grid grid-cols-4 gap-3">
                    {stats.map((stat) => (
                        <Card
                            key={stat.label}
                            className="flex-row items-center gap-3 border border-white/20 bg-white/60 px-4 py-3 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10"
                        >
                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/50 dark:bg-white/15">
                                <stat.icon className={`h-4 w-4 ${stat.color}`} />
                            </div>
                            <div className="min-w-0">
                                <div className="text-xl font-bold text-foreground dark:text-white">
                                    {stat.value}
                                </div>
                                <div className="truncate text-xs text-muted-foreground dark:text-white/60">
                                    {stat.label}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
