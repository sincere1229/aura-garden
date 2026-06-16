"use client";

// src/components/VideoCard.tsx
// YouTube埋め込みカード（サムネイル表示→クリックでiframe再生）

import { useState } from "react";
import type { HealingVideo } from "@/data/videos";

export default function VideoCard({ video }: { video: HealingVideo }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <div className="glass-card flex flex-col overflow-hidden rounded-2xl">
      {/* 動画エリア */}
      <div className="relative aspect-video w-full overflow-hidden bg-plum-900/10">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 flex items-center justify-center"
            aria-label={`${video.title}を再生`}
          >
            {/* サムネイル */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={thumb}
              alt={video.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* オーバーレイ */}
            <div className="absolute inset-0 bg-plum-900/20 transition-colors group-hover:bg-plum-900/30" />
            {/* 再生ボタン */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-0.5 fill-lavender-deep">
                <path d="M8 5v14l11-7Z" />
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* テキスト */}
      <div className="flex flex-1 flex-col p-4">
        {video.hz && (
          <span className="mb-2 inline-block w-fit rounded-full bg-lavender-200 px-3 py-0.5 text-xs font-medium text-lavender-deep">
            {video.hz}Hz
          </span>
        )}
        <h3 className="font-display text-base text-plum-900 leading-snug">
          {video.title}
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-plum-900/55 flex-1">
          {video.desc}
        </p>
        <a
          href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 text-xs text-lavender-deep underline-offset-4 hover:underline"
        >
          YouTubeで開く →
        </a>
      </div>
    </div>
  );
}
