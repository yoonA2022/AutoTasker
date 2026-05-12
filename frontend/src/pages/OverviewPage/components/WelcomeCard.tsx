// 欢迎卡片
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Mail, Phone, MapPin } from "lucide-react";
import overviewBg from "@/assets/Overview/Overview.png";
import avatarImg from "@/assets/Avatar/Avatar.jpg";

export function WelcomeCard() {
    return (
        <Card className="relative min-h-48 justify-center overflow-hidden border-0 bg-linear-to-r from-blue-500 to-blue-400">
            <img
                src={overviewBg}
                alt=""
                className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right"
            />
            <CardContent className="relative z-10 space-y-4 p-6">
                <div className="flex items-center gap-4">
                    <Avatar className="size-14">
                        <AvatarImage src={avatarImg} alt="Jason" />
                        <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            你好，Jason
                        </h2>
                        <p className="mt-0.5 text-sm text-white/70">
                            使用自动化任务，让 Windows 为你高效工作
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
                    <div className="flex items-center gap-1.5">
                        <Mail className="size-3.5" />
                        <span>jason@auznn.com</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Phone className="size-3.5" />
                        <span>138****8888</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5" />
                        <span>中国，广东</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
