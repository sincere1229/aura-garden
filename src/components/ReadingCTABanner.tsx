// src/components/ReadingCTABanner.tsx
import Starfield from "@/components/Starfield";
import { SNS } from "@/data/sns";

export default function ReadingCTABanner() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
        <Starfield count={28} />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Serena&apos;s Reading
          </p>
          <h2 className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl">
            Serenaから、あなたへ
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            オーラ・チャクラ・波動タイプをもとに、今のあなたに必要なメッセージをSerenaがやさしくお届けします。
            恋愛・仕事・人間関係・これからの流れなど、あなた専用の鑑定書としてお受け取りいただけます。
          </p>
          <a
            href={SNS.reading.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
          >
            ✨ {SNS.reading.label}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
