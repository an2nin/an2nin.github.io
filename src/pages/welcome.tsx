import KnowMore from "@/components/KnowMore";
import Projects from "@/components/Projects";
import { Command, Cursor, Prompt } from "@/components/Prompt";
import ShortBio from "@/components/ShortBio";
import Technologies from "@/components/Technologies";
import WhoAmI from "@/components/WhoAmI";

export default function Welcome() {
    return (
        <main className="flex flex-col gap-7 p-5 sm:p-7">
            <Command cmd="fetch">
                <WhoAmI />
            </Command>
            <Command cmd="cat about.md">
                <ShortBio />
            </Command>
            <Command cmd="tree stack/">
                <Technologies />
            </Command>
            <Command cmd="ls projects/">
                <Projects />
            </Command>
            <Command cmd="cat README.md">
                <KnowMore />
            </Command>
            <div className="flex items-center gap-2.5">
                <Prompt /> <Cursor />
            </div>
        </main>
    );
}
