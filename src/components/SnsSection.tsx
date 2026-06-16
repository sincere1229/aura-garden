// src/components/SnsSection.tsx
// トップページ下部のSNSフォローセクション（実装④）
// Instagram・LINE・YouTubeを横並びで表示

import Link from "next/link";
import { SNS } from "@/data/sns";

const SNS_ITEMS = [
  {
    href: SNS.instagram.url,
    label: "Instagram",
    handle: SNS.instagram.handle,
    desc: "Serenaの日常・癒しの言葉を発信中",
    isExternal: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
    color: "from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
    textColor: "text-white",
  },
  {
    href: SNS.line.url,
    label: "LINE公式",
    handle: SNS.line.id,
    desc: "毎日のメッセージ・限定コンテンツ配信中",
    isExternal: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    color: "from-[#06C755] to-[#06C755]",
    textColor: "text-white",
  },
  {
    href: SNS.youtube.url,
    label: "YouTube",
    handle: SNS.youtube.handle,
    desc: "ヒーリング音楽・周波数BGMを配信中",
    isExternal: true,
    icon: (
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
      </svg>
    ),
    color: "from-[#FF0000] to-[#cc0000]",
    textColor: "text-white",
  },
];

export default function SnsSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Follow Serena
          </p>
          <h2 className="mt-4 font-display text-2xl text-plum-900 sm:text-3xl">
            Serenaをフォローする
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-plum-900/60">
            各SNSで毎日のヒーリングメッセージや癒しの音楽を配信しています。
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {SNS_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.isExternal ? "_blank" : undefined}
              rel={item.isExternal ? "noopener noreferrer" : undefined}
              className="group glass-card flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-transform hover:scale-[1.02]"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} ${item.textColor} shadow-md`}>
                {item.icon}
              </div>
              <div>
                <p className="font-display text-lg text-plum-900">{item.label}</p>
                <p className="text-xs text-plum-900/45">{item.handle}</p>
              </div>
              <p className="text-xs leading-relaxed text-plum-900/60">{item.desc}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-xs font-medium text-lavender-deep group-hover:underline">
                フォローする <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
