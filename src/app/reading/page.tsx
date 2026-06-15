import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serenaの個別鑑定",
  description:
    "オーラ・チャクラ・波動タイプをもとに、Serenaがあなた専用の鑑定書をお届けします。",
};

export default function ReadingPage() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 py-20 text-center sm:px-8 sm:py-28">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <Reveal>
            <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/80">
              <Image
                src="/images/serena/icon.png"
                alt="Serena"
                fill
                className="object-cover"
                sizes="112px"
              />
            </div>
            <p className="moon-divider justify-center mt-6 text-xs uppercase tracking-[0.35em] text-lavender-deep">
              Serena&apos;s Reading
            </p>
            <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
              Serenaの個別鑑定
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
              オーラ・チャクラ・波動タイプをもとに、今のあなたに必要なメッセージをSerenaがやさしくお届けします。
              恋愛・仕事・人間関係・これからの流れなど、あなた専用の鑑定書としてお受け取りいただけます。
            </p>

            <div className="glass-card mx-auto mt-10 max-w-md rounded-3xl p-8">
              <p className="font-display text-xl text-plum-900">準備中です</p>
              <p className="mt-3 text-sm leading-relaxed text-plum-900/65">
                現在、個別鑑定の受付ページを準備しています。公開まで、まずは無料診断でご自身の今の状態をチェックしてみてくださいね。
              </p>
              <Link
                href="/diagnosis"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                無料診断をやってみる
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
