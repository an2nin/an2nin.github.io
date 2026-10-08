const techs = [
    {
        category: "frontend",
        options: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind"],
    },
    {
        category: "backend",
        options: ["Node.js", "Express"],
    },
    {
        category: "data",
        options: ["Supabase", "PostgreSQL", "MongoDB"],
    },
    {
        category: "tools",
        options: ["Docker", "Git", "Figma"],
    },
    {
        category: "languages",
        options: ["Python", "Java", "C"],
    },
];

export default function Technologies() {
    return (
        <div>
            <div className="text-path">stack/</div>
            <ul>
                {techs.map((tech, idx) => (
                    <li key={tech.category} className="flex gap-2">
                        <span aria-hidden className="shrink-0 text-ctp-overlay1">
                            {idx === techs.length - 1 ? "└──" : "├──"}
                        </span>
                        <span className="w-[10ch] shrink-0 text-key">
                            {tech.category}
                        </span>
                        <span className="min-w-0">{tech.options.join(", ")}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
