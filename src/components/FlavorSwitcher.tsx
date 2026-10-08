import { useState } from "react";

const flavors = [
    { id: "latte", label: "Latte", icon: "🌻" },
    { id: "frappe", label: "Frappé", icon: "🪴" },
    { id: "macchiato", label: "Macchiato", icon: "🌺" },
    { id: "mocha", label: "Mocha", icon: "🌿" },
];

export default function FlavorSwitcher() {
    const [current, setCurrent] = useState(
        () => document.documentElement.dataset.flavor ?? "mocha"
    );

    function choose(flavor: string) {
        document.documentElement.dataset.flavor = flavor;
        try {
            localStorage.setItem("flavor", flavor);
        } catch {
            // storage unavailable (private mode); the choice lasts for this visit
        }
        setCurrent(flavor);
    }

    return (
        <div role="group" aria-label="Color theme" className="flex gap-1 px-2">
            {flavors.map((flavor) => (
                <button
                    key={flavor.id}
                    type="button"
                    title={flavor.label}
                    aria-label={flavor.label}
                    aria-pressed={current === flavor.id}
                    onClick={() => choose(flavor.id)}
                    className={`h-8 w-8 rounded-md text-base leading-none transition ${
                        current === flavor.id
                            ? "bg-ctp-surface0"
                            : "opacity-50 grayscale hover:opacity-100 hover:grayscale-0"
                    }`}
                >
                    {flavor.icon}
                </button>
            ))}
        </div>
    );
}
