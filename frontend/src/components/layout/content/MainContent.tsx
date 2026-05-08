// 主内容区域
import { useSidebar } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { PanelLeftIcon, PanelRightIcon } from "lucide-react";
import { OverviewPage } from "@/pages/OverviewPage";
import { SearchPage } from "@/pages/SearchPage";
import { SettingsPage } from "@/pages/SettingsPage";

const pages: Record<string, React.ComponentType> = {
    overview: OverviewPage,
    search: SearchPage,
    settings: SettingsPage,
};

interface MainContentProps {
    toggleLeftSidebar: () => void;
    activePage: string;
}

export function MainContent({ toggleLeftSidebar, activePage }: MainContentProps) {
    const { toggleSidebar: toggleRight } = useSidebar();
    const PageComponent = pages[activePage] ?? OverviewPage;
    return (
        <div className="flex flex-1 flex-col overflow-hidden">
            <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
                <Button variant="ghost" size="icon-sm" onClick={toggleLeftSidebar}>
                    <PanelLeftIcon />
                    <span className="sr-only">切换左侧边栏</span>
                </Button>
                <Separator orientation="vertical" className="mr-2 h-4" />
                <h1 className="text-sm font-medium">工作区</h1>
                <div className="ml-auto">
                    <Button variant="ghost" size="icon-sm" onClick={toggleRight}>
                        <PanelRightIcon />
                        <span className="sr-only">切换右侧工具栏</span>
                    </Button>
                </div>
            </header>
            <main className="flex-1 overflow-auto p-6">
                <PageComponent />
            </main>
        </div>
    );
}
