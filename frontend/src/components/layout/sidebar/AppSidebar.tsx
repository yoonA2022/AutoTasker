// 应用侧边栏
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
    Search,
    Settings,
    LayoutDashboard,
    Box,
} from "lucide-react";
import appLogo from "@/assets/icons/app.png";

const items = [
    { id: "overview", title: "概览", icon: LayoutDashboard },
    { id: "toolbox", title: "工具箱", icon: Box },
    { id: "search", title: "搜索", icon: Search },
    { id: "settings", title: "设置", icon: Settings },
];

interface AppSidebarProps {
    activePage: string;
    onNavigate: (pageId: string) => void;
}

export function AppSidebar({ activePage, onNavigate }: AppSidebarProps) {
    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:gap-0 group-data-[collapsible=icon]:justify-center">
                    <img
                        src={appLogo}
                        alt="AutoTasker"
                        className="h-8 w-8 shrink-0 rounded-md"
                    />
                    <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-semibold">AutoTasker</span>
                        <span className="text-xs text-muted-foreground">自动化 - 简化您的工作</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>导航</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.id}>
                                    <SidebarMenuButton
                                        isActive={activePage === item.id}
                                        onClick={() => onNavigate(item.id)}
                                        tooltip={item.title}
                                    >
                                        <item.icon />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
