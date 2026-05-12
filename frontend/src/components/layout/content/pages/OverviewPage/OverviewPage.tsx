// 概览页面
import { WelcomeCard } from "./components/WelcomeCard";
import { QuickCreate } from "./components/QuickCreate";
import { RecentTasks } from "./components/RecentTasks";

export function OverviewPage() {
    return (
        <div className="space-y-6">
            <WelcomeCard />
            <QuickCreate />
            <RecentTasks />
        </div>
    );
}
