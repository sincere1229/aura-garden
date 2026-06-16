// src/components/ReadingCTABanner.tsx
// トップページ・診断結果ページ・Serenaページ共通の個別鑑定導線
// 外部リンク(ココナラ/STORES/PAY.JP等)に対応

import Link from "next/link";
import Starfield from "@/components/Starfield";

// 確定したら差し替え。外部URLの場合はそのまま記入。
const READING_URL = "/reading";
const READING_IS_EXTERNAL = false;

export default function ReadingCTABanner() {
  const linkProps = READING_IS_EXTERNAL
    ? { href: READING_URL, target: "_blank", rel: "noopener noreferrer" }
    : { href: READING_URL };

  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
        <Starfield count={28} />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Serena&apos;s Reading
          </p>
          <h2 className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl">
            Serenaの個別鑑定を受ける
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            オーラ・チャクラ・波動タイプをもとに、今のあなたに必要なメッセージをSerenaがやさしくお届けします。
            恋愛・仕事・人間関係・これからの流れなど、あなた専用の鑑定書としてお受け取りいただけます。
          </p>
          <Link
            {...linkProps}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
          >
            Serenaの個別鑑定を受ける
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
