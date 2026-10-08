const links = [
    { label: "github", href: "https://github.com/an2nin" },
    { label: "email", href: "mailto:an2nin.dev@gmail.com" },
];

const askMeAbout = ["React", "TypeScript", "Next.js", "Gaming"];

const swatches = [
    "bg-ctp-red",
    "bg-ctp-peach",
    "bg-ctp-yellow",
    "bg-ctp-green",
    "bg-ctp-blue",
    "bg-ctp-mauve",
];

export default function WhoAmI() {
    return (
        <div className="flex flex-wrap items-start gap-7">
            <img
                src="images/avatar.png"
                alt="Antonin"
                className="h-28 w-28 sm:h-36 sm:w-36 shrink-0 rounded-lg bg-white [image-rendering:pixelated]"
            />
            <div className="flex min-w-0 flex-[1_1_320px] flex-col">
                <h1
                    aria-label="Antonin"
                    className="text-[28px] font-extrabold leading-tight"
                >
                    <span className="text-primary">antonin</span>
                    <span className="text-muted-foreground">@</span>
                    <span className="text-link">an2nin</span>
                </h1>
                <div aria-hidden className="text-ctp-surface2">
                    ──────────────────
                </div>
                <dl className="grid grid-cols-[auto_1fr] gap-x-4">
                    <dt className="font-semibold text-primary">role</dt>
                    <dd>Web Developer</dd>
                    <dt className="font-semibold text-primary">ask me</dt>
                    <dd>{askMeAbout.join(", ")}</dd>
                    <dt className="font-semibold text-primary">links</dt>
                    <dd className="flex flex-wrap gap-x-2">
                        {links.map((link, idx) => (
                            <span key={link.label}>
                                <a
                                    href={link.href}
                                    target={
                                        link.href.startsWith("http")
                                            ? "_blank"
                                            : undefined
                                    }
                                    rel="noreferrer"
                                    className="text-link underline decoration-1 underline-offset-4 hover:decoration-2"
                                >
                                    {link.label}
                                </a>
                                {idx < links.length - 1 && (
                                    <span className="text-muted-foreground"> ·</span>
                                )}
                            </span>
                        ))}
                    </dd>
                </dl>
                <div aria-hidden className="mt-3 flex">
                    {swatches.map((swatch) => (
                        <span key={swatch} className={`h-3.5 w-7 ${swatch}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}
