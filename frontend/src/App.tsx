import { useState } from "react";
import { SidebarInset, SidebarProvider, useSidebar } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppSidebar } from "@/components/layout/sidebar/AppSidebar";
import { MainContent } from "@/components/layout/content/MainContent";
import { RightToolbar } from "@/components/layout/toolbar/RightToolbar";

function AppLayout({ activePage }: { activePage: string }) {
    const { toggleSidebar: toggleLeft } = useSidebar();
    return (
        <SidebarInset>
            <SidebarProvider defaultOpen={true} keyboardShortcut={false}>
                <MainContent toggleLeftSidebar={toggleLeft} activePage={activePage} />
                <RightToolbar />
            </SidebarProvider>
        </SidebarInset>
    );
}

function App() {
    const [activePage, setActivePage] = useState("overview");
    return (
        <TooltipProvider>
            <SidebarProvider>
                <AppSidebar activePage={activePage} onNavigate={setActivePage} />
                <AppLayout activePage={activePage} />
            </SidebarProvider>
        </TooltipProvider>
    );
}

export default App;
