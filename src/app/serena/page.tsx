import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Serena | 月のヒーラー",
  description:
    "Aura Garden 公式キャラクター Serena（セレナ）のご紹介。シルバーラベンダーの髪とアクアブルーの瞳を持つ月のヒーラーが、月光・癒し・睡眠・ヒーリングの世界を案内します。",
};

const expressions = [
  { src: "/images/serena/exp_smile.png", alt: "微笑むSerena", label: "微笑み" },
  { src: "/images/serena/exp_gentle_smile.png", alt: "やさしく笑うSerena", label: "やさしい笑顔" },
  { src: "/images/serena/exp_eyes_closed.png", alt: "目を閉じるSerena", label: "目を閉じる" },
  { src: "/images/serena/exp_tilt.png", alt: "うなずくSerena", label: "うなずき" },
  { src: "/images/serena/exp_thinking.png", alt: "考えるSerena", label: "考える" },
];

export default function SerenaPage() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <header className="text-center">
          <p className="moon-divider text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Aura Garden Official Character
          </p>
          <h1 className="mt-4 font-display text-4xl text-plum-900 sm:text-5xl">
            Serena
          </h1>
          <p className="mt-2 font-jp-display text-lg tracking-[0.3em] text-lavender-deep">
            月のヒーラー
          </p>
        </header>

        {/* Full body + intro */}
        <div className="mt-14 flex flex-col items-center gap-12 sm:flex-row sm:items-stretch sm:gap-16">
          <Reveal className="w-56 flex-shrink-0 sm:w-72">
            <div className="relative mx-auto aspect-[240/334] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-lavender-deep/15 ring-1 ring-white/70">
              <Image
                src="/images/serena/fullbody.png"
                alt="月のヒーラー Serena の全身立ち絵"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 288px, 224px"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="max-w-xl text-center sm:text-left">
            <h2 className="font-display text-2xl text-plum-900 sm:text-3xl">
              月の光をまとう、静かなヒーラー
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-plum-900/65 sm:text-base">
              シルバーラベンダーの髪と、アクアブルーの瞳を持つ Serena
              は、Aura Garden の世界を案内する月のヒーラーです。月光・蓮・星空をモチーフにまとい、訪れる人の心をやさしく解きほぐします。
            </p>
            <p className="mt-4 text-sm leading-relaxed text-plum-900/65 sm:text-base">
              彼女のテーマは「月光・癒し・睡眠・ヒーリング」。眠りにつく前のひととき、瞑想の時間、そして一日の終わりに、静かに寄り添う存在です。
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: "ラベンダー", color: "#cbb6e8" },
                { label: "シルバー", color: "#d6d9e6" },
                { label: "ミントグリーン", color: "#bfe8da" },
                { label: "ホワイト", color: "#ffffff" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-2 text-xs text-plum-900/60">
                  <span
                    className="h-4 w-4 rounded-full border border-white/80 shadow-sm"
                    style={{ backgroundColor: c.color }}
                    aria-hidden="true"
                  />
                  {c.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Profile details */}
        <Reveal delay={150}>
          <section className="mt-20 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "イメージカラー",
                body: "ラベンダー・シルバー・ミントグリーン・ホワイト。月光に照らされた庭をイメージした、淡く優しい配色です。",
              },
              {
                title: "モチーフ",
                body: "月・光・オーラ・蓮・星空。静寂と再生を象徴するモチーフが、Serena の世界観を構成しています。",
              },
              {
                title: "世界観",
                body: "月光・癒し・睡眠・ヒーリング。Aura Garden が届けるすべての音楽とアファメーションの根底にあるテーマです。",
              },
            ].map((item) => (
              <div key={item.title} className="glass-card rounded-2xl p-6 text-center sm:text-left">
                <h3 className="font-display text-lg text-plum-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-plum-900/60">{item.body}</p>
              </div>
            ))}
          </section>
        </Reveal>

        {/* Expressions gallery */}
        <section className="mt-20">
          <Reveal>
            <h2 className="text-center font-display text-2xl text-plum-900 sm:text-3xl">
              さまざまな表情
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-5">
            {expressions.map((exp, i) => (
              <Reveal delay={i * 80} key={exp.label}>
                <div className="flex flex-col items-center gap-2">
                  <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-md shadow-lavender-deep/10 ring-1 ring-white/70">
                    <Image
                      src={exp.src}
                      alt={exp.alt}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                  </div>
                  <span className="text-xs text-plum-900/55">{exp.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Voice message */}
        <Reveal delay={100}>
          <section className="mt-20 rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-14 text-center text-white sm:px-12 sm:py-16">
            <p className="font-display text-xl leading-relaxed sm:text-2xl">
              「ここでは、何もかんばらなくていいんです。
              <br />
              ただ静かに、光を感じてください。」
            </p>
            <p className="mt-4 text-sm tracking-[0.2em] text-white/75">— Serena —</p>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
