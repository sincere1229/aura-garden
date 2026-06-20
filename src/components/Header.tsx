import Link from "next/link";
import MoonMark from "./MoonMark";

const links = [
  { href: "/", label: "Top" },
  { href: "/music", label: "Music" },
  { href: "/diagnosis", label: "Diagnosis" },
   { href: "/crystal", label: "Crystal" },
  { href: "/frequency", label: "Tuner" },
  { href: "/serena", label: "Serena" },
  { href: "/affirmation", label: "Affirmation" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-lavender-200/60 bg-moon-50/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <MoonMark className="h-6 w-6 text-lavender-deep transition-transform group-hover:-rotate-12" />
          <span className="font-display text-xl tracking-[0.18em] text-plum-900 sm:text-2xl">
            Aura Garden
          </span>
        </Link>
        <nav aria-label="メインナビゲーション">
          <ul className="flex items-center gap-3 text-sm tracking-wide text-plum-900/80 sm:gap-6 sm:text-base">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="relative transition-colors hover:text-lavender-deep"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
