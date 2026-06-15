import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import MoonMark from "@/components/MoonMark";

export const metadata: Metadata = {
  title: "Aura Garden | あなた本来の光を思い出す場所",
  description:
    "Aura Garden は、月のヒーラー Serena とともに贈るヒーリング音楽ブランド。YouTubeのヒーリング音楽、癒しのアファメーションで、眠りと心を静かに整えます。",
};

const YOUTUBE_URL = "https://www.youtube.com/@AuraGarden";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24">
        <Starfield count={50} />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 sm:flex-row sm:gap-14">
          <div className="order-2 max-w-xl text-center sm:order-1 sm:flex-1 sm:text-left">
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep sm:justify-start">
              Moonlight Healing
            </p>
            <h1 className="mt-6 font-display text-4xl leading-tight tracking-wide text-plum-900 sm:text-6xl">
              あなた本来の
              <br />
              光を思い出す場所
            </h1>
            <p className="mt-6 text-base leading-relaxed text-plum-900/70 sm:text-lg">
              Aura Garden（オーラガーデン）は、月のヒーラー Serena
              とともに贈るヒーリング音楽ブランド。睡眠・瞑想・安心のひとときに、静かな波動をお届けします。
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-lavender-deep px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
                </svg>
                YouTubeで聴く
              </a>
              <Link
                href="/affirmation"
                className="inline-flex items-center gap-2 rounded-full border border-lavender-300 px-7 py-3.5 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
              >
                今日のアファメーションを見る
              </Link>
            </div>
          </div>
          <div className="order-1 w-64 sm:order-2 sm:w-[420px] sm:flex-1">
            <div className="drift relative mx-auto aspect-[367/334] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-lavender-deep/20 ring-1 ring-white/70 sm:max-w-none">
              <Image
                src="/images/serena/main_visual.png"
                alt="Aura Garden 公式キャラクター Serena のメインビジュアル"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 640px) 420px, 256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro / world */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="moon-divider text-xs uppercase tracking-[0.35em] text-lavender-deep">
              Our World
            </p>
            <h2 className="mt-6 font-display text-3xl leading-relaxed text-plum-900 sm:text-4xl">
              月光・ラベンダー・静寂——
              <br />
              心を緩めるための時間
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
              忙しい一日の終わりに、静かな月明かりのような音楽を。Aura
              Garden は睡眠・瞑想・リラックスのためのヒーリング音楽を制作し、YouTubeで配信しています。
              公式キャラクター Serena
              が見守る、安心できる癒しの庭へようこそ。
            </p>
          </Reveal>
        </div>
      </section>

      {/* Music preview */}
      <section className="bg-white/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep sm:justify-start">
                  Healing Music
                </p>
                <h2 className="mt-4 font-display text-3xl text-plum-900 sm:text-4xl">
                  ヒーリング音楽
                </h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-plum-900/65">
                  睡眠・瞑想・作業のための音楽を、YouTubeで配信しています。
                </p>
              </div>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white"
              >
                すべての動画を見る
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "深い眠りへの月光ピアノ",
                desc: "ゆっくりとしたピアノの旋律で、眠りへ誘います。",
              },
              {
                title: "瞑想のためのシンギングボウル",
                desc: "倍音が心の波を静め、瞑想に深く入るための音色。",
              },
              {
                title: "雨音とラベンダーの夜",
                desc: "やさしい雨音と弦の音色で、安心感に包まれる時間。",
              },
            ].map((item, i) => (
              <Reveal delay={i * 120} key={item.title}>
                <div className="glass-card flex h-full flex-col rounded-2xl p-6">
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-lavender-200 to-aqua-200">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 text-white/90 fill-current">
                      <path d="M8 5v14l11-7Z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-lg text-plum-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-900/60">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Serena intro */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:flex-row">
          <Reveal className="order-2 w-56 flex-shrink-0 sm:order-1 sm:w-72">
            <div className="relative mx-auto aspect-[251/334] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-lavender-deep/15 ring-1 ring-white/70">
              <Image
                src="/images/serena/portrait.png"
                alt="月のヒーラー Serena のポートレート"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 288px, 224px"
              />
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 max-w-xl text-center sm:order-2 sm:text-left">
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep sm:justify-start">
              Our Guide
            </p>
            <h2 className="mt-4 font-display text-3xl text-plum-900 sm:text-4xl">
              月のヒーラー Serena
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-plum-900/65 sm:text-base">
              シルバーラベンダーの髪と、アクアブルーの瞳を持つ Aura Garden
              の公式キャラクター。月光・蓮・星空をモチーフに、訪れる人をやさしく癒しの世界へ案内します。
            </p>
            <Link
              href="/serena"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
            >
              Serenaについてもっと知る
              <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Affirmation CTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-[#a3d9e1] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <Starfield count={30} />
          <div className="relative">
            <MoonMark className="mx-auto h-8 w-8 text-white/90" />
            <h2 className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
              「あなたの光は、いつも誰かの希望になっています」
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80">
              Serena からの、今日のメッセージをお届けします。
            </p>
            <Link
              href="/affirmation"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
            >
              アファメーションを受け取る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
