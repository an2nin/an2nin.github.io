const projects = [
    {
        slug: "trackmypulls",
        title: "TrackMyPulls",
        url: "https://trackmypulls.com",
        image: "https://trackmypulls.com/trackmypulls.png",
        tagline: "Every pull. Every pity. Every 5★ flex.",
        description:
            "Free gacha pull tracker used by thousands of players. Import your history to see pity, 5★ luck and banner stats, all stored privately in your browser.",
        tags: ["Wuthering Waves", "Arknights: Endfield", "Zenless Zone Zero"],
    },
];

export default function Projects() {
    return (
        <ul className="flex flex-col gap-3">
            {projects.map((project) => (
                <li
                    key={project.slug}
                    className="grid overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary sm:grid-cols-[2fr_3fr]"
                >
                    <a href={project.url} target="_blank" rel="noreferrer">
                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="h-full w-full object-cover"
                        />
                    </a>
                    <div className="flex flex-col gap-2 px-4 py-3.5">
                        <div className="font-semibold text-title">
                            {project.slug}/
                        </div>
                        <div className="italic">{project.tagline}</div>
                        <p className="text-sm text-muted-foreground">
                            {project.description}
                        </p>
                        <ul className="flex flex-wrap gap-1.5 text-[13px]">
                            {project.tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="rounded bg-ctp-surface0 px-2"
                                >
                                    {tag}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noreferrer"
                            className="self-start text-link underline decoration-1 underline-offset-4 hover:decoration-2"
                        >
                            visit {project.url.replace("https://", "")} ↗
                        </a>
                    </div>
                </li>
            ))}
        </ul>
    );
}
