// src/components/LineBanner.tsx
// 全ページ共通 LINE登録導線コンポーネント（最終導線改善 修正④）
// layout.tsx の <main> の直前か直後に配置、またはページ末尾に個別配置
import Link from "next/link";
import { SNS } from "@/data/sns";

export default function LineBanner() {
  return (
    <section className="px-5 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-2xl">
        <div className="glass-card flex flex-col items-center gap-5 rounded-3xl px-6 py-8 text-center sm:flex-row sm:text-left">
          {/* 月アイコン */}
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-lavender-300 to-aqua-200 text-2xl shadow-md">
            🌙
          </div>
          <div className="flex-1">
            <p className="font-display text-lg text-plum-900">
              月のヒーリングBOOK配布中
            </p>
            <ul className="mt-2 space-y-1">
              {["オーラ詳細解説", "Serenaメッセージ", "限定ヒーリングコンテンツ", "今後の無料診断特典"].map(
                (p) => (
                  <li key={p} className="flex items-center justify-center gap-1.5 text-xs text-plum-900/65 sm:justify-start">
                    <span className="text-lavender-deep">✓</span>
                    {p}
                  </li>
                )
              )}
            </ul>
          </div>
          <Link
            href={SNS.line.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg transition-transform hover:scale-[1.03]"
            style={{ background: "#06C755" }}
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            🌙 無料で受け取る
          </Link>
        </div>
      </div>
    </section>
  );
}
