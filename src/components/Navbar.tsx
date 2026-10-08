import { NavLink } from "react-router-dom";

const navs = [
    {
        id: "/",
        title: "~/home",
        path: "/",
        ready: true,
    },
    {
        id: "about",
        title: "~/about",
        path: "/about",
        ready: false,
    },
    {
        id: "resume",
        title: "~/resume",
        path: "/resume",
        ready: false,
    },
];

export default function Navbar() {
    return (
        <nav className="flex flex-wrap">
            {navs.map((nav) =>
                nav.ready ? (
                    <NavLink
                        key={nav.id}
                        to={nav.path}
                        className={({ isActive }) =>
                            `px-4 py-2.5 border-t-2 transition-colors ${
                                isActive
                                    ? "bg-background text-foreground border-primary"
                                    : "text-muted-foreground border-transparent hover:text-foreground"
                            }`
                        }
                    >
                        {nav.title}
                    </NavLink>
                ) : (
                    <span
                        key={nav.id}
                        title="Coming soon"
                        className="px-4 py-2.5 border-t-2 border-transparent text-ctp-overlay0 cursor-not-allowed"
                    >
                        {nav.title}
                    </span>
                )
            )}
        </nav>
    );
}
