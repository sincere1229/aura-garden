"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import {
  AURA_QUESTIONS,
  AURA_RESULTS,
  CHAKRAS,
  CHAKRA_QUESTIONS,
  CHAKRA_OPTS,
  CHAKRA_FREQ_MAP,
  WAVE_QUESTIONS,
  WAVE_RESULTS,
  SERENA_MESSAGES,
  FREQ_BY_KEY,
  YOUTUBE_URL,
  READING_PRODUCT_URL,
  pickWinner,
  type ChoiceQuestion,
} from "@/data/diagnosis";
import { ENTERTAINMENT_NOTE } from "@/data/frequency";
import DiagnosisLineBanner from "@/components/DiagnosisLineBanner";

/* ===================== 共通パーツ ===================== */

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

function SerenaMessage({ text }: { text: string }) {
  return (
    <div className="glass-card mt-6 flex gap-4 rounded-2xl p-5 text-left">
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
        <Image
          src="/images/serena/icon.png"
          alt="Serena"
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
          Serena より
        </p>
        <p className="mt-1 text-sm leading-relaxed text-plum-900/80">{text}</p>
      </div>
    </div>
  );
}

function FreqCard({ freqKey }: { freqKey: string }) {
  const f = FREQ_BY_KEY[freqKey];
  if (!f) return null;
  return (
    <div className="mt-4 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-aqua-200/40 p-4 text-left">
      <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
        おすすめの周波数
      </p>
      <p className="mt-1 font-display text-lg text-plum-900">{f.label}</p>
      <p className="mt-1 text-xs text-plum-900/50">
        Aura Garden のヒーリング音楽と合わせて聴いてみてくださいね。
      </p>
    </div>
  );
}

function YoutubeLink() {
  return (
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-lavender-deep">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
      </svg>
      対応するヒーリング音楽をYouTubeで聴く
    </a>
  );
}

function ReadingCTA() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 p-5 text-center text-white">
      <Starfield count={16} />
      <div className="relative">
        <p className="font-display text-lg leading-relaxed">
          もっと深く、あなただけの鑑定書を
        </p>
        <p className="mt-2 text-xs leading-relaxed text-white/85">
          Serena があなたの結果をもとに、詳しいオーラ・チャクラ鑑定書をお届けします。
        </p>
        <Link
          href={READING_PRODUCT_URL}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
        >
          詳しい鑑定書を見る
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function ShareSaveRow({
  shareText,
  saveKey,
  savePayload,
}: {
  shareText: string;
  saveKey: string;
  savePayload: Record<string, unknown>;
}) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    try {
      const list = JSON.parse(
        window.localStorage.getItem(`auragarden_${saveKey}`) || "[]"
      );
      list.unshift({ ...savePayload, savedAt: new Date().toLocaleString("ja-JP") });
      window.localStorage.setItem(
        `auragarden_${saveKey}`,
        JSON.stringify(list.slice(0, 20))
      );
    } catch {
      /* localStorage unavailable: ignore */
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch {
        /* user cancelled or unsupported: fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={handleShare}
        className="flex-1 rounded-full bg-lavender-deep px-4 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-[1.02]"
      >
        {copied ? "コピーしました ✓" : "結果をシェア"}
      </button>
      <button
        onClick={handleSave}
        className="flex-1 rounded-full border border-lavender-300 px-4 py-3 text-sm font-medium text-plum-900 transition-colors hover:bg-white/60"
      >
        {saved ? "保存しました ✓" : "結果を保存"}
      </button>
    </div>
  );
}

function ResultOrb({ color, glow, label }: { color: string; glow: string; label: string }) {
  return (
    <div
      className="drift mx-auto flex h-36 w-36 items-center justify-center rounded-full"
      style={{
        background: `radial-gradient(circle at 35% 30%, ${color}, #2e2a45 85%)`,
        boxShadow: `0 0 60px ${glow}`,
      }}
    >
      <span className="px-3 text-center font-display text-lg font-medium text-white drop-shadow">
        {label}
      </span>
    </div>
  );
}

function StartScreen({
  title,
  desc,
  count,
  onStart,
}: {
  title: string;
  desc: string;
  count: number;
  onStart: () => void;
}) {
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/80">
          <Image
            src="/images/serena/icon.png"
            alt="Serena"
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
        <h2 className="mt-5 font-display text-2xl text-plum-900">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-plum-900/65">{desc}</p>
        <p className="mt-4 text-xs text-plum-900/40">全{count}問・約2分</p>
        <button
          onClick={onStart}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
        >
          診断をはじめる
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </Reveal>
  );
}

/* ===================== 1. オーラ診断 ===================== */

function AuraDiagnosis() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({
    lavender: 0,
    green: 0,
    blue: 0,
    gold: 0,
    white: 0,
  });
  const total = AURA_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setScores({ lavender: 0, green: 0, blue: 0, gold: 0, white: 0 });
  };

  const answer = (opt: ChoiceQuestion["opts"][number]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(opt.w)) next[k] = (next[k] ?? 0) + v;
      return next;
    });
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="オーラ診断"
        desc="あなたを包む光の色を読み解きます。12の質問に答えて、今のあなたのオーラカラーを見てみましょう。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const winnerKey = pickWinner(scores);
    const r = AURA_RESULTS[winnerKey];
    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたのオーラカラーは
          </p>
          <div className="mt-5">
            <ResultOrb color={r.color} glow={r.glow} label={r.key} />
          </div>
          <h2 className="mt-5 font-display text-2xl" style={{ color: r.color }}>
            {r.name}
          </h2>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {r.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full bg-moon-100 px-3 py-1 text-xs text-plum-900/60"
              >
                {k}
              </span>
            ))}
          </div>
          <p className="mt-5 text-left text-sm leading-relaxed text-plum-900/75">
            {r.desc}
          </p>

          <SerenaMessage text={SERENA_MESSAGES.aura[winnerKey]} />
          <FreqCard freqKey={winnerKey} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden オーラ診断】私のオーラカラーは「${r.name}」でした✨ #AuraGarden #オーラ診断`}
            saveKey="aura"
            savePayload={{ type: "オーラ診断", result: r.name }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = AURA_QUESTIONS[step];
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {q.opts.map((o, i) => (
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
  );
}

/* ===================== 2. チャクラ診断 ===================== */

function ChakraDiagnosis() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const total = CHAKRA_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setAnswers([]);
  };

  const answer = (val: number) => {
    setAnswers((prev) => [...prev, val]);
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="チャクラ診断"
        desc="7つのエネルギーセンターの状態をチェックします。14の質問に、今の感覚で答えてみてください。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const chakraScores: Record<string, number[]> = {};
    CHAKRAS.forEach((c) => (chakraScores[c.id] = []));
    CHAKRA_QUESTIONS.forEach((q, i) => {
      const raw = answers[i] ?? 1;
      const val = q.reverse ? 2 - raw : raw;
      chakraScores[q.chakra].push(val);
    });

    const results = CHAKRAS.map((c) => {
      const arr = chakraScores[c.id];
      const sum = arr.reduce((a, b) => a + b, 0);
      const pct = Math.round((sum / (arr.length * 2)) * 100);
      return { ...c, pct };
    });

    const overall = Math.round(
      results.reduce((a, c) => a + c.pct, 0) / results.length
    );
    const lowest = results.reduce(
      (min, c) => (c.pct < min.pct ? c : min),
      results[0]
    );
    const msgTone = overall >= 70 ? "high" : overall >= 45 ? "mid" : "low";
    const freqKey = CHAKRA_FREQ_MAP[lowest.id];

    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたの7チャクラ診断結果
          </p>

          <div className="mt-6 flex flex-col gap-3 text-left">
            {results.map((c) => (
              <div key={c.id} className="rounded-2xl bg-white/60 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-plum-900">{c.name}</span>
                  <span className="text-plum-900/50">{c.pct}%</span>
                </div>
                <p className="mt-1 text-[11px] text-plum-900/45">{c.theme}</p>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-lavender-200">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${c.pct}%`, background: c.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-aqua-200/40 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
              総合バランス
            </p>
            <p className="mt-1 font-display text-4xl text-plum-900">{overall}%</p>
            <p className="mt-2 text-sm leading-relaxed text-plum-900/70">
              今、最もケアが必要なのは「{lowest.name}」（{lowest.theme}）です。
            </p>
          </div>

          <SerenaMessage text={SERENA_MESSAGES.chakra[msgTone]} />
          <FreqCard freqKey={freqKey} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden チャクラ診断】総合バランス${overall}%でした✨ いま大切にしたいのは「${lowest.name}」 #AuraGarden #チャクラ診断`}
            saveKey="chakra"
            savePayload={{
              type: "チャクラ診断",
              overall,
              lowest: lowest.name,
              results: results.map((r) => ({ name: r.name, pct: r.pct })),
            }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = CHAKRA_QUESTIONS[step];
  const chakra = CHAKRAS.find((c) => c.id === q.chakra)!;
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p
          className="mx-auto mb-3 inline-block rounded-full border px-4 py-1 text-center text-xs font-medium"
          style={{ color: chakra.color, borderColor: chakra.color }}
        >
          {chakra.name}
        </p>
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {CHAKRA_OPTS.map((o, i) => (
            <button
              key={i}
              onClick={() => answer(o.v)}
              className="rounded-2xl border border-lavender-200 bg-white/70 px-5 py-3.5 text-left text-sm leading-relaxed text-plum-900 transition-colors hover:border-lavender-400 hover:bg-white"
            >
              {o.t}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ===================== 3. 波動タイプ診断 ===================== */

function WaveTypeDiagnosis() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({
    moon: 0,
    passion: 0,
    guardian: 0,
    seeker: 0,
    master: 0,
  });
  const total = WAVE_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setScores({ moon: 0, passion: 0, guardian: 0, seeker: 0, master: 0 });
  };

  const answer = (opt: ChoiceQuestion["opts"][number]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(opt.w)) next[k] = (next[k] ?? 0) + v;
      return next;
    });
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="波動タイプ診断"
        desc="あなたの心が持つ波動のタイプを診断します。12の質問から、今のあなたに近いタイプを見つけます。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const winnerKey = pickWinner(scores);
    const r = WAVE_RESULTS[winnerKey];
    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたの波動タイプは
          </p>
          <div className="mt-5">
            <ResultOrb color={r.color} glow={r.glow} label={r.name} />
          </div>
          <h2 className="mt-5 font-display text-2xl" style={{ color: r.color }}>
            {r.name}
          </h2>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {r.keywords.map((k) => (
              <span
                key={k}
                className="rounded-full bg-moon-100 px-3 py-1 text-xs text-plum-900/60"
              >
                {k}
              </span>
            ))}
          </div>
          <p className="mt-5 text-left text-sm leading-relaxed text-plum-900/75">
            {r.desc}
          </p>

          <SerenaMessage text={SERENA_MESSAGES.wave[winnerKey]} />
          <FreqCard freqKey={winnerKey} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden 波動タイプ診断】私の波動タイプは「${r.name}」でした✨ #AuraGarden #波動タイプ診断`}
            saveKey="wave"
            savePayload={{ type: "波動タイプ診断", result: r.name }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = WAVE_QUESTIONS[step];
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {q.opts.map((o, i) => (
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
  );
}

/* ===================== ページ本体 ===================== */

const TABS = [
  { id: "aura", label: "オーラ診断" },
  { id: "chakra", label: "チャクラ診断" },
  { id: "wave", label: "波動タイプ診断" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function DiagnosisPage() {
  const [tab, setTab] = useState<TabId>("aura");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Serena&apos;s Diagnosis
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            セレナの診断ルーム
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            オーラ・チャクラ・波動タイプ——3つの無料診断で、今のあなたの状態をそっと映し出します。
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="glass-card mb-10 flex flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                  Serena&apos;s Frequency Garden
                </p>
                <h3 className="mt-2 font-display text-xl text-plum-900">
                  月光ヒーリングチューナー
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-900/65">
                  今の気分に合わせて周波数を選び、Serenaの月光ガーデンで心を整えるミニ体験です。
                </p>
              </div>
              <Link
                href="/frequency"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                チューナーを開く
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all ${
                  tab === t.id
                    ? "bg-lavender-deep text-white shadow-lg shadow-lavender-deep/20"
                    : "border border-lavender-300 text-plum-900 hover:bg-white/60"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "aura" && <AuraDiagnosis key="aura" />}
          {tab === "chakra" && <ChakraDiagnosis key="chakra" />}
          {tab === "wave" && <WaveTypeDiagnosis key="wave" />}

          <p className="mx-auto mt-10 max-w-md text-center text-xs leading-relaxed text-plum-900/40">
            {ENTERTAINMENT_NOTE}
          </p>
        </div>
      </section>
    </div>
  );
}
