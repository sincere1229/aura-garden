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

          {/* 鑑定セクション コピー改善：無料診断は入り口、個別鑑定で何を読み解くか */}
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/85">
            無料診断は、現在の状態を知るための入り口です。個別鑑定では、
          </p>
          <ul className="mx-auto mt-3 max-w-sm space-y-1.5 text-left">
            {[
              "なぜ今その状態になっているのか",
              "本来のあなたの強み",
              "心を整えるために必要なこと",
              "これから意識したい流れ",
            ].map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-white/90">
                <span>✓</span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/85">
            を、Serenaがやさしく読み解きます。恋愛・仕事・人間関係・将来への不安など、あなただけのためのメッセージを鑑定書としてお届けします。
          </p>

          {/* 個別鑑定でお届けする内容（見出し変更） */}
          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-white/10 p-5 text-left">
            <p className="text-xs leading-relaxed text-white/80">
              個別鑑定でお届けする内容
            </p>
            <ul className="mt-2 space-y-1.5">
              {[
                "オーラの深層",
                "チャクラバランス",
                "心の状態",
                "今後の流れ",
                "相性の良いパワーストーン",
                "Serenaからの特別メッセージ",
              ].map((p) => (
                <li key={p} className="flex items-center gap-2 text-xs text-white/85">
                  <span>✓</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* オーダーメイド訴求（チェックリスト下・ボタン直前） */}
          <p className="mx-auto mt-4 max-w-md text-xs leading-relaxed text-white/75">
            🌙 一人ひとりの結果をもとに作成するため、完全オーダーメイドでお届けしています。
          </p>

          <a
            href={SNS.reading.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
          >
            ✨ {SNS.reading.label}
            <span aria-hidden="true">→</span>
          </a>

          {/* ボタン下の補足 */}
          <p className="mt-3 text-[11px] text-white/60">
            現在はココナラにて受付中です。PDF形式でお届けします。
          </p>
        </div>
      </div>
    </section>
  );
}
