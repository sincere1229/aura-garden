// src/components/ReadingCTABanner.tsx
// ③ HP導線修正：「Serena個別鑑定を申し込む」に統一
//    将来的にここの READING_URL をココナラURLに差し替えるだけでOK
// ④ デザイン方針：「診断結果」ではなく「Serenaから届く手紙」体験を優先

import Link from "next/link";
import Starfield from "@/components/Starfield";
import { SNS } from "@/data/sns";

// ── 将来ここをココナラURLに差し替えてください ──
// 例: "https://coconala.com/services/XXXXXXX"
const READING_URL = SNS.reading.url;
const READING_IS_EXTERNAL = READING_URL.startsWith("http");

export default function ReadingCTABanner() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
        <Starfield count={28} />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Serena&apos;s Reading
          </p>
          {/* ④ 「手紙」体験：タイトルをSerenaからの語りかけに変更 */}
          <h2 className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl">
            Serenaから、あなたへ
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            オーラ・チャクラ・波動タイプをもとに、
            今のあなたに必要なメッセージをSerenaがやさしくお届けします。
            <br className="hidden sm:block" />
            恋愛・仕事・人間関係・これからの流れなど、
            あなた専用の鑑定書としてお受け取りいただけます。
          </p>
          {/* ③ ボタン文言を「Serena個別鑑定を申し込む」に統一 */}
          {READING_IS_EXTERNAL ? (
            <a
              href={READING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
            >
              ✨ Serena個別鑑定を申し込む
              <span aria-hidden="true">→</span>
            </a>
          ) : (
            <Link
              href={READING_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
            >
              ✨ Serena個別鑑定を申し込む
              <span aria-hidden="true">→</span>
            </Link>
          )}
          <p className="mt-3 text-xs text-white/50">
            現在準備中です。LINEよりお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}
