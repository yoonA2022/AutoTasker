// 工具栏
import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Settings2 } from "lucide-react";
import { MyTools } from "./components/MyTools";
import { NeedHelp } from "./components/NeedHelp";

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
                <MyTools />
                <NeedHelp />
            </SidebarContent>
        </Sidebar>
    );
}
