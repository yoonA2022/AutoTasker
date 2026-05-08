// 工具栏
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Bell, History, Plus, Settings2, Sparkles } from "lucide-react";

export function RightToolbar() {
    return (
        <Sidebar side="right" collapsible="offcanvas">
            <SidebarHeader>
                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">工具</span>
                    <div className="flex items-center gap-1">
                        <AnimatedThemeToggler className="inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground [&_svg]:h-4 [&_svg]:w-4" />
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                            <Settings2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>快捷操作</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="flex flex-col gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                className="justify-start"
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                新建任务
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="justify-start"
                            >
                                <Sparkles className="mr-2 h-4 w-4" />
                                AI 助手
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                className="justify-start"
                            >
                                <Bell className="mr-2 h-4 w-4" />
                                通知
                            </Button>
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
                <SidebarSeparator />
                <SidebarGroup>
                    <SidebarGroupLabel>活动</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-2 rounded-md border bg-background p-2"
                                >
                                    <History className="mt-0.5 h-4 w-4 text-muted-foreground" />
                                    <div className="flex-1 text-xs">
                                        <div className="font-medium">
                                            项目 {i + 1}
                                        </div>
                                        <div className="text-muted-foreground">
                                            刚刚
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
