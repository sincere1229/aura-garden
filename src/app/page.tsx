import LineConsultSection from "@/components/LineConsultSection";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import MoonMark from "@/components/MoonMark";
import SerenaFooterCard from "@/components/SerenaFooterCard";
import ReadingCTABanner from "@/components/ReadingCTABanner";
import SnsSection from "@/components/SnsSection";
import FreeGiftBanner from "@/components/FreeGiftBanner";
import CrystalGardenTeaser from "@/components/CrystalGardenTeaser";
import ComingSoonSection from "@/components/ComingSoonSection";
import { SNS } from "@/data/sns";


export const metadata: Metadata = {
  title: "Aura Garden | がんばるあなたへ贈る、心のオーラ無料診断",
  description:
    "Aura Garden は、月のヒーラー Serena とともに贈るヒーリング音楽ブランド。ヒーリング音楽・オーラ診断・アファメーションで、心を静かに整えます。",
};

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
            <h1 className="mt-6 font-display text-4xl leading-tight tracking-wide text-plum-900 sm:text-6xl whitespace-pre-line">
              「がんばる」を{"\n"}
              一度お休みして、{"\n"}
              あなたの心の声を{"\n"}
              聴く場所
            </h1>
            <p className="mt-6 text-base leading-relaxed text-plum-900/70 sm:text-lg">
              毎日まわりに気を遣いすぎて、ヘトヘトになっていませんか？
              月のヒーラー Serena が、今のあなたのオーラやチャクラの状態をやさしく紐解きます。
              まずは1分、あなたの心が求めている「癒やしの成分」を無料で診断してみましょう。
            </p>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
              <Link
                href="/diagnosis"
                className="inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-4 text-base font-bold tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                無料オーラ診断をはじめる <span aria-hidden="true">→</span>
              </Link>
              <a
                href={SNS.youtube.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-lavender-300 px-7 py-3.5 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current text-red-500">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
                </svg>
                YouTubeで聴く
              </a>
            </div>

            {/* ③ Instagram導線 */}
            <div className="mt-4 flex items-center justify-center gap-2 sm:justify-start">
              <a
                href={SNS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-plum-900/55 transition-colors hover:text-plum-900"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                Serena公式Instagram {SNS.instagram.handle}
              </a>
            </div>
          </div>

          <div className="order-1 w-64 sm:order-2 sm:w-[420px] sm:flex-1">
            <div className="drift relative mx-auto aspect-[367/334] w-full max-w-sm overflow-hidden rounded-[2rem] shadow-2xl shadow-lavender-deep/20 ring-1 ring-white/70 sm:max-w-none">
              <Image
                src="/images/serena/main_visual.png"
                alt="Aura Garden 公式キャラクター Serena のメインビジュアル"
                fill priority
                className="object-cover"
                sizes="(min-width: 640px) 420px, 256px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 🌙 LINE相談セクション（メイン） */}
      <LineConsultSection />

      {/* 🎁 無料プレゼント（LINE登録導線） */}
      <FreeGiftBanner />

      {/* 個別鑑定CTA（トップに1つ目） */}
      <ReadingCTABanner />

      {/* Our World */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="moon-divider text-xs uppercase tracking-[0.35em] text-lavender-deep">Our World</p>
            <h2 className="mt-6 font-display text-3xl leading-relaxed text-plum-900 sm:text-4xl">
              月光・ラベンダー・静寂——<br />心を緩めるための時間
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
              忙しい一日の終わりに、静かな月明かりのような音楽を。Aura Garden は睡眠・瞑想・リラックスのためのヒーリング音楽を制作し、YouTubeで配信しています。
              公式キャラクター Serena が見守る、安心できる癒しの庭へようこそ。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 音楽プレビュー */}
      <section className="bg-white/40 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
              <div>
                <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep sm:justify-start">
                  Healing Music
                </p>
                <h2 className="mt-4 font-display text-3xl text-plum-900 sm:text-4xl">ヒーリング音楽</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-plum-900/65">
                  睡眠・瞑想・作業のための音楽を、YouTubeで配信しています。
                </p>
              </div>
              <Link
                href="/music"
                className="inline-flex items-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white"
              >
                すべての動画を見る <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { title: "528Hz｜愛の周波数", desc: "心をやさしく整えたいときにおすすめです。" },
              { title: "852Hz｜直感の覚醒", desc: "静かに自分の内側と向き合いたいときにおすすめです。" },
              { title: "396Hz｜解放の周波数", desc: "重たい気持ちを手放したいときにおすすめです。" },
            ].map((item, i) => (
              <Reveal delay={i * 120} key={item.title}>
                <Link href="/music" className="glass-card flex h-full flex-col rounded-2xl p-6 transition-transform hover:scale-[1.02]">
                  <div className="mb-4 flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-lavender-200 to-aqua-200">
                    <svg viewBox="0 0 24 24" className="h-10 w-10 fill-current text-white/90"><path d="M8 5v14l11-7Z" /></svg>
                  </div>
                  <h3 className="font-display text-lg text-plum-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-plum-900/60">{item.desc}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 無料診断 */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
              Serena&apos;s Diagnosis
            </p>
            <h2 className="mt-6 font-display text-3xl text-plum-900 sm:text-4xl">無料診断を受けてみる</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
              オーラ・チャクラ・波動タイプ——3つの診断で、今のあなたの状態をそっと映し出します。
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/diagnosis"
                className="inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                診断をはじめる <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/frequency"
                className="inline-flex items-center gap-2 rounded-full border border-lavender-300 px-8 py-3.5 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
              >
                月光ヒーリングチューナー
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Crystal Garden導線（最終導線改善 修正③・トップページ中段） */}
      <CrystalGardenTeaser />

      {/* Serena紹介 */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 sm:flex-row">
          <Reveal className="order-2 w-56 flex-shrink-0 sm:order-1 sm:w-72">
            <div className="relative mx-auto aspect-[251/334] w-full overflow-hidden rounded-[2rem] shadow-xl shadow-lavender-deep/15 ring-1 ring-white/70">
              <Image src="/images/serena/portrait.png" alt="月のヒーラー Serena" fill className="object-cover" sizes="(min-width: 640px) 288px, 224px" />
            </div>
          </Reveal>
          <Reveal delay={100} className="order-1 max-w-xl text-center sm:order-2 sm:text-left">
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep sm:justify-start">Our Guide</p>
            <h2 className="mt-4 font-display text-3xl text-plum-900 sm:text-4xl">月のヒーラー Serena</h2>
            <p className="mt-4 text-sm leading-relaxed text-plum-900/65 sm:text-base whitespace-pre-line">
              シルバーラベンダーの髪とアクアブルーの瞳を持つ、Aura Gardenの案内人。{"\n"}
              月光や蓮の優しさをまとい、日々がんばりすぎて心が曇ってしまったあなたの隣にそっと寄り添います。{"\n"}
              誰にも言えない涙や不安を、静かな月明かりのような温かさで癒しの世界へと導きます。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Link href="/serena" className="inline-flex items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]">
                Serenaについてもっと知る <span aria-hidden="true">→</span>
              </Link>
              {/* ③ Serenaページ内のInstagramリンク */}
              <a
                href={SNS.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-lavender-300 px-5 py-3 text-sm font-medium text-plum-900 transition-colors hover:bg-white/60"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
                Instagramを見る
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ④ SNSフォローセクション */}
      <SnsSection />

      {/* アファメーションCTA */}
      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-[#a3d9e1] px-6 py-16 text-center text-white sm:px-12 sm:py-20">
          <Starfield count={30} />
          <div className="relative">
            <MoonMark className="mx-auto h-8 w-8 text-white/90" />
            <h2 className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">
              「あなたの光は、いつも誰かの希望になっています」
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-white/80">Serena からの、今日のメッセージをお届けします。</p>
            <Link href="/affirmation" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]">
              アファメーションを受け取る <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Serena導線 */}
      <SerenaFooterCard />

      {/* ⑦ 個別鑑定CTA（2つ目） */}
      <ReadingCTABanner />

      {/* 🌙 LINE相談セクション（コンパクト・再掲） */}
      <LineConsultSection compact />

      {/* Coming Soon（最終導線改善 修正⑤・トップ下部） */}
      <ComingSoonSection />
    </div>
  );
}
