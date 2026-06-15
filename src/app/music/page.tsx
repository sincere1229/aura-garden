import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "ヒーリング音楽 | YouTube動画一覧",
  description:
    "Aura Garden の YouTube ヒーリング音楽動画一覧。睡眠・瞑想・リラックスのための音楽を、月のヒーラー Serena とともにお届けします。",
};

const channelUrl = "https://www.youtube.com/@AuraGarden";

export default function MusicPage() {
  return (
    <div className="px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="text-center">
          <p className="moon-divider text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Healing Music
          </p>
          <h1 className="mt-4 font-display text-4xl text-plum-900 sm:text-5xl">
            ヒーリング音楽
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            睡眠・瞑想・リラックスのための音楽を、YouTubeで配信しています。月の光のように、心にやさしく寄り添う音色をお楽しみください。
          </p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, i) => (
            <Reveal delay={(i % 3) * 100} key={video.id}>
              <a
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-1"
              >
                <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-lavender-200 via-[#dcd2f0] to-aqua-200">
                  <span className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium tracking-wide text-lavender-deep">
                    {video.category}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-plum-900/60 px-2.5 py-1 text-xs font-medium text-white">
                    {video.duration}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/85 shadow-lg transition-transform group-hover:scale-110">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current text-lavender-deep">
                      <path d="M8 5v14l11-7Z" />
                    </svg>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="font-display text-lg leading-snug text-plum-900">
                    {video.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-plum-900/60">
                    {video.description}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-14 text-center">
            <a
              href={channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-lavender-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
              </svg>
              YouTubeチャンネルを見る
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
