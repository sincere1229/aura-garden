// src/app/column/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import { COLUMNS } from "@/data/columns";

export const metadata: Metadata = {
  title: "コラム",
  description:
    "ソルフェジオ周波数やチャクラについて、月のヒーラー Serena がやさしく解説するコラムです。528Hz・741Hz・396Hzなどの意味や、チャクラとの関係をご紹介します。",
};

export default function ColumnListPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Column
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            周波数とチャクラの<br />やさしい教科書
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            ソルフェジオ周波数やチャクラについて、月のヒーラー Serena がゆっくりとご案内します。
          </p>
        </div>
      </section>

      {/* 記事一覧 */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {COLUMNS.map((c, i) => (
              <Reveal delay={i * 80} key={c.slug}>
                <Link
                  href={`/column/${c.slug}`}
                  className="glass-card flex h-full flex-col rounded-3xl p-6 transition-transform hover:scale-[1.02]"
                >
                  <div
                    className="drift flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, ${c.color}, #2e2a45 85%)`,
                      boxShadow: `0 0 24px ${c.glow}`,
                    }}
                  >
                    {c.hz && (
                      <span className="font-display text-xs font-medium text-white">
                        {c.hz}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg leading-snug text-plum-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-900/60">
                    {c.excerpt}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* チューナーへの導線 */}
          <Reveal>
            <div className="relative mx-auto mt-14 max-w-2xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-10 text-center text-white sm:px-12">
              <Starfield count={20} />
              <div className="relative">
                <h2 className="font-display text-xl leading-relaxed sm:text-2xl">
                  実際に音を聴いてみませんか？
                </h2>
                <p className="mt-2 text-sm text-white/85">月光ヒーリングチューナー</p>
                <Link
                  href="/frequency"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
                >
                  チューナーを開く
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
