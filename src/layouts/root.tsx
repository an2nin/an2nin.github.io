import TitleBar from "@/components/TitleBar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
    return (
        <div className="min-h-screen bg-ctp-crust px-4 py-8 sm:py-14 text-[15px] leading-relaxed text-foreground">
            <div className="mx-auto w-full max-w-[860px] overflow-hidden rounded-xl border border-border bg-background shadow-2xl shadow-ctp-crust">
                <TitleBar />
                <Outlet />
                <footer className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-t border-border bg-ctp-mantle px-4 py-1.5 text-[13px] text-muted-foreground">
                    <span>zsh</span>
                    <span>Last Updated - October 2026</span>
                </footer>
            </div>
        </div>
    );
}
