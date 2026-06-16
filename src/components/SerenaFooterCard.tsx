// src/components/SerenaFooterCard.tsx
// 各ページ下部に配置するSerena紹介→プロフィールページへの導線

import Image from "next/image";
import Link from "next/link";

export default function SerenaFooterCard() {
  return (
    <section className="px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="glass-card flex flex-col items-center gap-8 rounded-3xl px-6 py-10 text-center sm:flex-row sm:px-10 sm:text-left">
          <div className="relative h-28 w-28 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/80 shadow-lg shadow-lavender-deep/15">
            <Image
              src="/images/serena/icon.png"
              alt="月のヒーラー Serena"
              fill
              className="object-cover"
              sizes="112px"
            />
          </div>
          <div className="flex-1">
            <p className="text-xs uppercase tracking-[0.25em] text-lavender-deep">
              About Serena
            </p>
            <h3 className="mt-2 font-display text-2xl text-plum-900">
              Serenaについて
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-plum-900/65">
              Serenaは、訪れた人が自分本来の光を思い出すための案内役です。
              オーラ・チャクラ・波動などをテーマに、やさしいメッセージをお届けしています。
            </p>
            <Link
              href="/serena"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
            >
              Serenaプロフィールを見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
