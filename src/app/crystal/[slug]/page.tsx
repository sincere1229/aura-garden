// src/app/crystal/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import LineGateCard from "@/components/LineGateCard";
import { CRYSTALS, getCrystalBySlug } from "@/data/crystals";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return CRYSTALS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);
  if (!crystal) {
    return { title: "Crystal Garden | Aura Garden" };
  }
  return {
    title: `${crystal.name}の意味と特徴 | Crystal Garden`,
    description: `${crystal.name}（${crystal.nameEn}）が持つ意味やメッセージを、月のヒーラー Serena がご案内します。${crystal.keywords.join("・")}のキーワードを持つパワーストーンです。`,
  };
}

export default async function CrystalDetailPage({ params }: Props) {
  const { slug } = await params;
  const crystal = getCrystalBySlug(slug);
  if (!crystal) notFound();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={30} />
        <div className="relative mx-auto max-w-md">
          <Link
            href="/crystal"
            className="text-xs text-plum-900/45 underline-offset-4 hover:underline"
          >
            ← Crystal Garden に戻る
          </Link>
          <div
            className="drift mx-auto mt-6 flex h-32 w-32 items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle at 35% 30%, ${crystal.color}, #2e2a45 85%)`,
              boxShadow: `0 0 60px ${crystal.glow}`,
            }}
          />
          <h1 className="mt-6 font-display text-3xl tracking-wide text-plum-900 sm:text-4xl">
            {crystal.name}
          </h1>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-plum-900/40">
            {crystal.nameEn}
          </p>
        </div>
      </section>

      {/* 詳細情報 */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-md">
          <Reveal>
            <div className="glass-card rounded-3xl p-7 text-left">
              <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                キーワード
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {crystal.keywords.map((k) => (
                  <span
                    key={k}
                    className="rounded-full bg-moon-100 px-3 py-1 text-xs text-plum-900/60"
                  >
                    {k}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-lavender-deep">
                対応チャクラ
              </p>
              <p className="mt-2 text-sm text-plum-900/75">{crystal.chakraName}</p>

              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-lavender-deep">
                こんな方におすすめ
              </p>
              <ul className="mt-2 space-y-1.5">
                {crystal.recommendedFor.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-sm text-plum-900/75">
                    <span className="mt-0.5 text-lavender-deep">・</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Serenaからのメッセージ */}
          <Reveal delay={100}>
            <div className="glass-card mt-5 flex gap-4 rounded-2xl p-5 text-left">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                  Serena より
                </p>
                <p className="mt-1 text-sm leading-relaxed text-plum-900/80">
                  {crystal.serenaMessage}
                </p>
              </div>
            </div>
          </Reveal>

          {/* LINE導線 */}
          <Reveal delay={150}>
            <LineGateCard
              title="あなたに本当に必要な石は？"
              subtitle="無料パワーストーン診断"
              note="LINE限定公開"
              ctaHref="/crystal-diagnosis"
              ctaLabel="無料診断をはじめる"
              ctaIsInternalLink
            />
          </Reveal>

          {/* おすすめブレスレット（準備中・将来のEC導線） */}
          <Reveal delay={200}>
            <div className="mt-5 rounded-2xl border border-dashed border-lavender-300 bg-white/40 p-5 text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                おすすめブレスレット
              </p>
              <p className="mt-2 text-sm text-plum-900/55">
                {crystal.name}を使ったブレスレットは、現在準備中です。
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
