// src/app/crystal/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import { CRYSTALS } from "@/data/crystals";

export default function CrystalGardenPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Crystal Garden
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            あなたに寄り添う<br />光の石たち
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            月のヒーラー Serena が、それぞれの石が持つメッセージをご案内します。
          </p>
        </div>
      </section>

      {/* 石一覧 */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CRYSTALS.map((c, i) => (
              <Reveal delay={i * 80} key={c.slug}>
                <Link
                  href={`/crystal/${c.slug}`}
                  className="glass-card flex h-full flex-col items-center rounded-3xl p-6 text-center transition-transform hover:scale-[1.03]"
                >
                  <div
                    className="drift flex h-20 w-20 items-center justify-center rounded-full"
                    style={{
                      background: `radial-gradient(circle at 35% 30%, ${c.color}, #2e2a45 85%)`,
                      boxShadow: `0 0 30px ${c.glow}`,
                    }}
                  />
                  <h3 className="mt-4 font-display text-lg text-plum-900">{c.name}</h3>
                  <p className="mt-1 text-xs text-plum-900/55">{c.shortTag}</p>
                  <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                    {c.keywords.map((k) => (
                      <span
                        key={k}
                        className="rounded-full bg-moon-100 px-2.5 py-0.5 text-[11px] text-plum-900/55"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* パワーストーン診断への導線 */}
          <Reveal>
            <div className="relative mx-auto mt-14 max-w-2xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-10 text-center text-white sm:px-12">
              <Starfield count={20} />
              <div className="relative">
                <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-full ring-2 ring-white/80">
                  <Image
                    src="/images/serena/icon.png"
                    alt="Serena"
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                </div>
                <h2 className="mt-4 font-display text-xl leading-relaxed sm:text-2xl">
                  あなたに本当に必要な石は？
                </h2>
                <p className="mt-2 text-sm text-white/85">
                  無料パワーストーン診断
                </p>
                <Link
                  href="/crystal-diagnosis"
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
                >
                  診断をはじめる
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
