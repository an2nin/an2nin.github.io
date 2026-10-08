export function Prompt() {
    return (
        <span className="inline-flex select-none font-semibold">
            <span className="bg-primary px-2.5 text-primary-foreground">
                antonin
            </span>
            <span className="bg-ctp-surface0 px-2.5 text-path">~</span>
            <span className="w-3 bg-ctp-surface0 [clip-path:polygon(0_0,100%_50%,0_100%)]" />
        </span>
    );
}

export function Cursor() {
    return (
        <span
            aria-hidden
            className="inline-block h-[1.2em] w-0.5 bg-ctp-rosewater motion-safe:animate-blink"
        />
    );
}

export function Command({
    cmd,
    children,
}: {
    cmd: string;
    children: React.ReactNode;
}) {
    return (
        <section className="flex flex-col gap-3">
            <h2 className="flex flex-wrap items-center gap-2.5 font-normal">
                <Prompt />
                <span>{cmd}</span>
            </h2>
            <div>{children}</div>
        </section>
    );
}
