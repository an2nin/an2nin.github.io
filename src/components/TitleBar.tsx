import FlavorSwitcher from "./FlavorSwitcher";
import Navbar from "./Navbar";

export default function TitleBar() {
    return (
        <header className="flex flex-wrap items-center border-b border-border bg-ctp-mantle">
            <Navbar />
            <div className="ml-auto">
                <FlavorSwitcher />
            </div>
        </header>
    );
}
