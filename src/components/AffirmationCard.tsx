"use client";

import { useState } from "react";
import Image from "next/image";
import { affirmations } from "@/data/affirmations";

function pickRandom(exclude?: string): string {
  if (affirmations.length <= 1) return affirmations[0];
  let next = affirmations[Math.floor(Math.random() * affirmations.length)];
  while (next === exclude) {
    next = affirmations[Math.floor(Math.random() * affirmations.length)];
  }
  return next;
}

export default function AffirmationCard() {
  const [message, setMessage] = useState<string>(() => pickRandom());
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    setIsAnimating(true);
    window.setTimeout(() => {
      setMessage((prev) => pickRandom(prev));
      setIsAnimating(false);
    }, 220);
  };

  return (
    <div className="relative mx-auto max-w-xl">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#efe8fb] via-white to-[#dff1f5] p-8 text-center shadow-2xl shadow-lavender-deep/15 ring-1 ring-white/70 sm:p-12">
        {/* Glow orb */}
        <div
          aria-hidden="true"
          className="drift pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-lavender-300/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="drift pointer-events-none absolute bottom-[-3rem] right-[-2rem] h-32 w-32 rounded-full bg-aqua-200/50 blur-3xl"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative">
          <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full shadow-lg ring-2 ring-white/80 sm:h-28 sm:w-28">
            <Image
              src="/images/serena/icon.png"
              alt="Serena アイコン"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>

          <p className="mt-8 font-jp-display text-xs uppercase tracking-[0.35em] text-lavender-deep">
            今日のメッセージ
          </p>

          <p
            className={`mx-auto mt-6 min-h-[6.5rem] max-w-md font-display text-xl leading-relaxed text-plum-900 transition-opacity duration-200 sm:text-2xl ${
              isAnimating ? "opacity-0" : "opacity-100"
            }`}
            aria-live="polite"
          >
            {message}
          </p>

          <p className="mt-4 text-xs tracking-[0.25em] text-plum-900/40">
            — Serena —
          </p>

          <button
            type="button"
            onClick={handleNext}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03] active:scale-95"
          >
            次のメッセージを受け取る
          </button>
        </div>
      </div>
    </div>
  );
}
