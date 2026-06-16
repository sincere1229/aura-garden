import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Starfield from "@/components/Starfield";
import VideoCard from "@/components/VideoCard";
import LineBanner from "@/components/LineBanner";
import SerenaFooterCard from "@/components/SerenaFooterCard";
import ReadingCTABanner from "@/components/ReadingCTABanner";
import { HEALING_VIDEOS } from "@/data/videos";

export const metadata: Metadata = {
  title: "Healing Music | ヒーリング音楽",
  description:
    "Aura Garden のヒーリング音楽を聴く。睡眠・瞑想・リラックスのためのソルフェジオ周波数音楽を、月のヒーラー Serena がやさしくお届けします。",
};

export default function MusicPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Healing Music
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            ヒーリング音楽
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            睡眠・瞑想・リラックスのための音楽を、Serenaがお届けします。
            ソルフェジオ周波数をもとにした静かな音色で、心をやさしく整えてください。
          </p>
          <a
            href="https://www.youtube.com/@AuraGardenJP"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-lavender-deep px-7 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
            </svg>
            チャンネルで全動画を見る
          </a>
        </div>
      </section>

      {/* 動画グリッド */}
      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
              Latest Videos
            </p>
            <h2 className="mt-4 text-center font-display text-2xl text-plum-900 sm:text-3xl">
              Serenaのヒーリング音楽
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HEALING_VIDEOS.map((video, i) => (
              <Reveal delay={i * 60} key={video.youtubeId}>
                <VideoCard video={video} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LINE登録 */}
      <LineBanner />

      {/* Serena紹介 */}
      <SerenaFooterCard />

      {/* 個別鑑定CTA */}
      <ReadingCTABanner />
    </div>
  );
}
