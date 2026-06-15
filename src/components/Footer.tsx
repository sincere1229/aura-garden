import Link from "next/link";
import MoonMark from "./MoonMark";

export default function Footer() {
  return (
    <footer className="border-t border-lavender-200/60 bg-moon-50/60">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-2">
            <MoonMark className="h-5 w-5 text-lavender-deep" />
            <span className="font-display text-lg tracking-[0.2em] text-plum-900">
              Aura Garden
            </span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-plum-900/60">
            月のヒーラー Serena とともに、あなた本来の光を思い出す場所。
          </p>
          <nav aria-label="フッターナビゲーション">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-plum-900/70">
              <li><Link href="/" className="hover:text-lavender-deep">トップ</Link></li>
              <li><Link href="/music" className="hover:text-lavender-deep">ヒーリング動画</Link></li>
              <li><Link href="/serena" className="hover:text-lavender-deep">Serenaについて</Link></li>
              <li><Link href="/affirmation" className="hover:text-lavender-deep">アファメーション</Link></li>
            </ul>
          </nav>
          <p className="text-xs text-plum-900/40">
            © {new Date().getFullYear()} Aura Garden. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
