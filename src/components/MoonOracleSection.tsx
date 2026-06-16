"use client";

// src/components/MoonOracleSection.tsx
// ② Aura Garden TOPページ用 Moon Oracle セクション
// 「もう一枚引く」ボタンでランダム再表示

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import cards from "@/data/cards.json";
import type { MoonCard } from "@/data/moonOracle";

function getRandomCard(): MoonCard {
  const c = cards.cards[Math.floor(Math.random() * cards.cards.length)];
  return {
    no: c.id,
    id: c.no,
    keyword: c.title,
    keywordEn: c.english,
    image: c.image,
    message: c.message,
    serenaNote: c.serenaMessage,
  };
}

export default function MoonOracleSection() {
  const [card, setCard] = useState<MoonCard>(() => getRandomCard());
  const [drawing, setDrawing] = useState(false);

  const drawNew = useCallback(() => {
    setDrawing(true);
    setTimeout(() => {
      setCard(getRandomCard());
      setDrawing(false);
    }, 380);
  }, []);

  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-10 text-center">
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
              Moon Oracle
            </p>
            <h2 className="mt-4 font-display text-3xl text-plum-900 sm:text-4xl">
              🌙 今日のMoon Oracle
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-plum-900/60">
              Serenaがあなたへ、今日のメッセージカードを選びました。
            </p>
          </div>
        </Reveal>

        <div className={`transition-all duration-380 ${drawing ? "scale-95 opacity-0" : "opacity-100 scale-100"}`}>
          <div className="glass-card mx-auto max-w-xl overflow-hidden rounded-3xl">
            {/* カード画像 */}
            <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden">
              <Image
                src={card.image}
                alt={`Moon Card No.${card.id} ${card.keyword}`}
                fill
                className="object-cover transition-all duration-500"
                sizes="320px"
                priority
              />
            </div>

            {/* カード情報 */}
            <div className="p-6 text-center">
              {/* No.バッジ */}
              <div className="mb-3 inline-block rounded-full bg-lavender-deep px-4 py-1 text-xs font-bold tracking-widest text-white">
                Moon Card  No.{card.id}
              </div>

              {/* キーワード */}
              <h3 className="font-display text-3xl text-plum-900">
                {card.keyword}
              </h3>
              <p className="mt-1 text-sm tracking-widest text-plum-900/40">
                {card.keywordEn}
              </p>

              {/* メッセージ */}
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-plum-900/75">
                {card.message}
              </p>

              {/* Serenaメッセージ */}
              <div className="mt-4 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-[#f0f4fb] p-4 text-left">
                <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-lavender-deep">
                  🌙 Serena より
                </p>
                <p className="text-xs leading-relaxed text-plum-900/70">
                  {card.serenaNote}
                </p>
              </div>

              {/* ボタン群 */}
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                {/* もう一枚引く */}
                <button
                  onClick={drawNew}
                  disabled={drawing}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium text-plum-900 transition-all hover:bg-white/60 disabled:opacity-50"
                >
                  🌙 もう一枚引く
                </button>
                {/* LINE登録 */}
                <Link
                  href="https://lin.ee/XHDFrA8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md transition-transform hover:scale-[1.03]"
                  style={{ background: "#06C755" }}
                >
                  毎日のカードをLINEで受け取る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
