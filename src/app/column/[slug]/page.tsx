// src/app/column/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import {
  COLUMNS,
  CHAKRA_FREQUENCY_TABLE,
  getColumnBySlug,
  getRelatedColumns,
} from "@/data/columns";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return COLUMNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getColumnBySlug(slug);
  if (!article) {
    return { title: "Column | Aura Garden" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function ChakraTable() {
  return (
    <div className="mt-2 overflow-hidden rounded-2xl border border-lavender-200/60">
      {CHAKRA_FREQUENCY_TABLE.map((row, i) => (
        <div
          key={row.hz}
          className={`flex items-center gap-3 px-4 py-3 text-left ${
            i % 2 === 0 ? "bg-white/50" : "bg-moon-50/60"
          }`}
        >
          <span
            className="h-3 w-3 shrink-0 rounded-full"
            style={{ background: row.color }}
            aria-hidden="true"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-plum-900">{row.name}</p>
            <p className="mt-0.5 text-xs text-plum-900/55">{row.theme}</p>
          </div>
          <span className="font-display text-sm text-plum-900/70">{row.hz}Hz</span>
        </div>
      ))}
    </div>
  );
}

export default async function ColumnDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getColumnBySlug(slug);
  if (!article) notFound();

  const related = getRelatedColumns(article);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={30} />
        <div className="relative mx-auto max-w-md">
          <Link
            href="/column"
            className="text-xs text-plum-900/45 underline-offset-4 hover:underline"
          >
            ← Column に戻る
          </Link>
          <div
            className="drift mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full"
            style={{
              background: `radial-gradient(circle at 35% 30%, ${article.color}, #2e2a45 85%)`,
              boxShadow: `0 0 50px ${article.glow}`,
            }}
          >
            {article.hz && (
              <span className="font-display text-sm font-medium text-white">
                {article.hz}Hz
              </span>
            )}
          </div>
          <h1 className="mt-6 font-display text-2xl leading-snug tracking-wide text-plum-900 sm:text-3xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* 本文 */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-md">
          <Reveal>
            <div className="glass-card rounded-3xl p-7 text-left">
              {article.body.map((block, i) => {
                if (block.type === "p") {
                  return (
                    <p
                      key={i}
                      className="mt-4 text-sm leading-relaxed text-plum-900/75 first:mt-0"
                    >
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "h2") {
                  return (
                    <h2
                      key={i}
                      className="mt-6 font-display text-base tracking-wide text-lavender-deep first:mt-0"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === "list") {
                  return (
                    <ul key={i} className="mt-3 space-y-1.5">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-plum-900/75"
                        >
                          <span className="mt-0.5 text-lavender-deep">・</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "chakraTable") {
                  return <ChakraTable key={i} />;
                }
                return null;
              })}
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
                  {article.serenaMessage}
                </p>
              </div>
            </div>
          </Reveal>

          {/* チューナーへの導線 */}
          <Reveal delay={150}>
            <div className="relative mt-5 overflow-hidden rounded-2xl bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-7 text-center text-white">
              <p className="text-sm">実際に音を聴いてみませんか？</p>
              <Link
                href="/frequency"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
              >
                月光ヒーリングチューナーを開く
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          {/* 関連記事 */}
          {related.length > 0 && (
            <Reveal delay={200}>
              <div className="mt-10">
                <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                  関連コラム
                </p>
                <div className="mt-3 space-y-2.5">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/column/${r.slug}`}
                      className="glass-card flex items-center gap-3 rounded-2xl p-4 transition-transform hover:scale-[1.01]"
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ background: r.color }}
                        aria-hidden="true"
                      />
                      <span className="text-sm text-plum-900/80">{r.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>
    </div>
  );
}
