// src/app/crystal-diagnosis/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import LineGateCard from "@/components/LineGateCard";
import {
  CRYSTAL_QUESTIONS,
  CRYSTAL_DIAGNOSIS_RESULTS,
  getCrystalBySlug,
  pickCrystalWinner,
  type CrystalQuestion,
} from "@/data/crystals";

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-lavender-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-lavender-400 to-aqua-300 transition-all duration-300 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      <span className="whitespace-nowrap text-xs text-plum-900/50">
        {current} / {total}
      </span>
    </div>
  );
}

export default function CrystalDiagnosisPage() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({
    moon: 0,
    rose: 0,
    amethyst: 0,
    citrine: 0,
    tiger: 0,
  });
  const total = CRYSTAL_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setScores({ moon: 0, rose: 0, amethyst: 0, citrine: 0, tiger: 0 });
  };

  const answer = (opt: CrystalQuestion["opts"][number]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(opt.w)) next[k] = (next[k] ?? 0) + v;
      return next;
    });
    setStep((s) => s + 1);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={30} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Crystal Diagnosis
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            パワーストーン診断
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            5つの質問から、今のあなたに寄り添う石を見つけます。
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-md">
          {step === -1 && (
            <Reveal>
              <div className="glass-card rounded-3xl p-8 text-center">
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/80">
                  <Image
                    src="/images/serena/icon.png"
                    alt="Serena"
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
                <h2 className="mt-5 font-display text-2xl text-plum-900">
                  あなたに必要な石を探しましょう
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-plum-900/65">
                  直感で答えてみてくださいね。
                </p>
                <p className="mt-4 text-xs text-plum-900/40">全{total}問・約1分</p>
                <button
                  onClick={() => setStep(0)}
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
                >
                  診断をはじめる
                  <span aria-hidden="true">→</span>
                </button>
              </div>
            </Reveal>
          )}

          {step >= 0 && step < total && (
            <Reveal>
              <div className="glass-card rounded-3xl p-8">
                <ProgressBar current={step + 1} total={total} />
                <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
                  {CRYSTAL_QUESTIONS[step].q}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {CRYSTAL_QUESTIONS[step].opts.map((o, i) => (
                    <button
                      key={i}
                      onClick={() => answer(o)}
                      className="rounded-2xl border border-lavender-200 bg-white/70 px-5 py-3.5 text-left text-sm leading-relaxed text-plum-900 transition-colors hover:border-lavender-400 hover:bg-white"
                    >
                      {o.t}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>
          )}

          {step >= total &&
            (() => {
              const winnerKey = pickCrystalWinner(scores);
              const result = CRYSTAL_DIAGNOSIS_RESULTS[winnerKey];
              const crystal = getCrystalBySlug(result.crystalSlug);
              if (!crystal) return null;
              return (
                <Reveal>
                  <div className="glass-card rounded-3xl p-8 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
                      あなたに寄り添う石は
                    </p>
                    <div
                      className="drift mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full"
                      style={{
                        background: `radial-gradient(circle at 35% 30%, ${crystal.color}, #2e2a45 85%)`,
                        boxShadow: `0 0 60px ${crystal.glow}`,
                      }}
                    />
                    <h2 className="mt-5 font-display text-2xl text-plum-900">
                      {result.type}
                    </h2>
                    <p className="mt-1 text-sm text-plum-900/50">{crystal.name}</p>

                    {/* 簡易説明のみ表示 */}
                    <p className="mt-5 text-sm leading-relaxed text-plum-900/75">
                      {result.shortDesc}
                    </p>

                    {/* 詳細はLINE限定 */}
                    <div className="mt-6 rounded-2xl border border-dashed border-lavender-300 bg-white/50 p-5 text-left">
                      <ul className="space-y-1.5">
                        <li className="flex items-center gap-2 text-sm text-plum-900/70">
                          <span className="text-lavender-deep">✓</span>
                          石の意味
                        </li>
                        <li className="flex items-center gap-2 text-sm text-plum-900/70">
                          <span className="text-lavender-deep">✓</span>
                          おすすめの行動
                        </li>
                        <li className="flex items-center gap-2 text-sm text-plum-900/70">
                          <span className="text-lavender-deep">✓</span>
                          相性の良いチャクラ
                        </li>
                        <li className="flex items-center gap-2 text-sm text-plum-900/70">
                          <span className="text-lavender-deep">✓</span>
                          Serenaからのメッセージ
                        </li>
                      </ul>
                      <p className="mt-3 text-center text-xs font-medium tracking-wide text-lavender-deep">
                        LINE限定公開
                      </p>
                    </div>

                    <div className="mt-5">
                      <LineGateCard
                        title="あなたの石について、もっと知る"
                        ctaLabel="LINE登録して詳細を見る"
                      />
                    </div>

                    <Link
                      href={`/crystal/${crystal.slug}`}
                      className="mt-5 inline-block text-sm text-plum-900/55 underline-offset-4 hover:underline"
                    >
                      {crystal.name}の基本情報を見る
                    </Link>
                    <br />
                    <button
                      onClick={reset}
                      className="mt-3 text-sm text-plum-900/50 underline-offset-4 hover:underline"
                    >
                      もう一度診断する
                    </button>
                  </div>
                </Reveal>
              );
            })()}
        </div>
      </section>
    </div>
  );
}
