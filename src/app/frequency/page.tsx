"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import { FREQUENCIES, ENTERTAINMENT_NOTE } from "@/data/frequency";

export default function FrequencyPage() {
  const [sel, setSel] = useState(2); // 528Hz をデフォルトに
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<{
    ctx: AudioContext;
    osc: OscillatorNode;
    gain: GainNode;
  } | null>(null);

  const stop = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    try {
      a.gain.gain.setTargetAtTime(0, a.ctx.currentTime, 0.08);
      setTimeout(() => {
        try {
          a.osc.stop();
          a.ctx.close();
        } catch {
          /* already stopped */
        }
      }, 350);
    } catch {
      /* ignore */
    }
    audioRef.current = null;
    setPlaying(false);
  }, []);

  const start = useCallback(() => {
    stop();
    try {
      const AC =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext;
      const ctx = new AC();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = FREQUENCIES[sel].hz;
      gain.gain.value = 0;
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      // 音量は控えめに（最大 0.12）
      gain.gain.setTargetAtTime(0.12, ctx.currentTime, 0.3);
      audioRef.current = { ctx, osc, gain };
      setPlaying(true);
    } catch {
      /* AudioContext unavailable */
    }
  }, [sel, stop]);

  useEffect(() => () => stop(), [stop]);

  useEffect(() => {
    const a = audioRef.current;
    if (a && playing) {
      a.osc.frequency.setTargetAtTime(FREQUENCIES[sel].hz, a.ctx.currentTime, 0.1);
    }
  }, [sel, playing]);

  const f = FREQUENCIES[sel];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Serena&apos;s Frequency Garden
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            月光ヒーリングチューナー
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            今の気分に合わせて、あなたに寄り添う周波数を選んでみましょう。
          </p>
          <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-plum-900/45 sm:text-sm">
            このページでは、ソルフェジオ周波数をもとにしたシンプルなヒーリングトーンを体験できます。音量は小さめに設定し、心地よいと感じる範囲でお楽しみください。
          </p>
        </div>
      </section>

      {/* Tuner */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/80">
                <Image
                  src="/images/serena/icon.png"
                  alt="Serena"
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </div>

              <button
                onClick={playing ? stop : start}
                aria-label={playing ? "音を停止する" : "音を再生する"}
                className="drift mx-auto mt-6 flex h-40 w-40 items-center justify-center rounded-full transition-shadow"
                style={{
                  background: `radial-gradient(circle at 35% 30%, ${f.color}, #2e2a45 85%)`,
                  boxShadow: playing
                    ? `0 0 60px ${f.color}66`
                    : `0 0 24px ${f.color}33`,
                }}
              >
                <span className="px-3 text-center text-white drop-shadow">
                  <span className="block font-display text-3xl font-medium">
                    {f.hz}
                    <span className="text-base">Hz</span>
                  </span>
                  <span className="mt-1 block text-xs tracking-wide">
                    {f.name}の音色
                  </span>
                </span>
              </button>

              <p className="mt-4 text-sm text-plum-900/60">
                {playing ? "オーブをタップして停止します" : "オーブをタップして音を再生します"}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-plum-900/75">
                {f.desc}
              </p>

              <div className="mt-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-lavender-deep">
                  周波数を選ぶ
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {FREQUENCIES.map((fr, i) => (
                    <button
                      key={fr.hz}
                      onClick={() => setSel(i)}
                      className={`flex flex-col items-center rounded-2xl border px-3 py-2 text-xs transition-colors ${
                        i === sel
                          ? "border-lavender-400 bg-white text-plum-900"
                          : "border-lavender-200 bg-white/50 text-plum-900/60 hover:bg-white/80"
                      }`}
                    >
                      <span className="font-display text-sm">{fr.hz}Hz</span>
                      <span>{fr.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {f.youtubeUrl && (
                <a
                  href={f.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-lavender-deep">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
                  </svg>
                  {f.hz}Hzのヒーリング音楽をYouTubeで聴く
                </a>
              )}

              <Link
                href="/diagnosis"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                診断ページに戻る
              </Link>
            </div>
          </Reveal>

          <p className="mx-auto mt-8 max-w-md text-center text-xs leading-relaxed text-plum-900/40">
            {ENTERTAINMENT_NOTE}
          </p>
        </div>
      </section>
    </div>
  );
}
