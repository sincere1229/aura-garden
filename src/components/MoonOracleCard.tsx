"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// cards.jsonから直接importせず、型定義だけ使う
import { MOON_CARDS, type MoonCard } from "@/data/moonOracle";

type Props = {
  cardNo?: number;
  seed?: number;
};

export default function MoonOracleCard({ cardNo, seed }: Props) {
  const [card, setCard] = useState<MoonCard | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let selected: MoonCard;
    if (cardNo) {
      selected = MOON_CARDS.find((c) => c.no === cardNo) ?? MOON_CARDS[0];
    } else if (seed !== undefined) {
      selected = MOON_CARDS[seed % MOON_CARDS.length];
    } else {
      selected = MOON_CARDS[Math.floor(Math.random() * MOON_CARDS.length)];
    }
    setCard(selected);
  }, [cardNo, seed]);

  if (!card) return null;

  return (
    <div className="mt-6 w-full">
      <div className="mb-4 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">Moon Oracle</p>
        <h3 className="mt-1 font-display text-xl text-plum-900">今日のMoon Card</h3>
        <p className="mt-1 text-xs text-plum-900/50">Serenaがあなたへ選んだ1枚</p>
      </div>

      <div className="mx-auto w-full max-w-xs">
        {!revealed ? (
          <button
            onClick={() => setRevealed(true)}
            className="w-full overflow-hidden rounded-2xl border-2 border-lavender-300 bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 shadow-xl transition-transform hover:scale-[1.02]"
            style={{ aspectRatio: "1/1" }}
            aria-label="カードをめくる"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-white">
              <div className="text-5xl">🌙</div>
              <p className="font-display text-xl tracking-widest">MOON CARD</p>
              <p className="text-sm text-white/70">タップしてカードを引く</p>
              <div className="mt-2 flex gap-2 text-yellow-300">
                <span>✦</span><span>✦</span><span>✦</span>
              </div>
            </div>
          </button>
        ) : (
          <div className="overflow-hidden rounded-2xl shadow-xl shadow-lavender-deep/20 ring-2 ring-lavender-300/60">
            <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
              <Image
                src={card.image}
                alt={`Moon Card No.${card.id} ${card.keyword}`}
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </div>
        )}
      </div>

      {revealed && (
        <div className="mt-4">
          <div className="mb-3 flex items-center justify-center">
            <div className="rounded-full bg-lavender-deep px-4 py-1 text-xs font-bold tracking-widest text-white">
              Moon Card  No.{card.id}
            </div>
          </div>
          <p className="text-center font-display text-2xl text-plum-900">
            {card.keyword}
            <span className="ml-2 text-sm font-normal text-plum-900/40">{card.keywordEn}</span>
          </p>
          <div className="mt-4 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-[#f0f4fb] p-4">
            <p className="text-center text-sm leading-relaxed text-plum-900/75">{card.message}</p>
          </div>
          <div className="mt-3 glass-card flex gap-3 rounded-2xl p-4 text-left">
            <div className="flex-shrink-0 text-xl">🌙</div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-lavender-deep mb-1">Serena より</p>
              <p className="text-xs leading-relaxed text-plum-900/75">{card.serenaNote}</p>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-plum-900/40">
            今日のキーワード「{card.keyword}」を心に留めながら過ごしてみてください。
          </p>
        </div>
      )}
    </div>
  );
}
