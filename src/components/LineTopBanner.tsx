// src/components/LineTopBanner.tsx
// ヘッダー直下に表示する無料特典の上部バー（最終導線改善 修正①・最優先）
// 「LINE登録」ではなく「無料特典」を前面に出す設計に変更。
import Link from "next/link";
import { SNS } from "@/data/sns";

export default function LineTopBanner() {
  return (
    <div className="border-b border-lavender-200/60 bg-gradient-to-r from-moon-100 via-[#f3eefa] to-moon-100 px-4 py-3">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-5">
        <div className="flex flex-col items-center gap-1 sm:flex-row sm:gap-3">
          <p className="text-xs font-bold text-plum-900/85 sm:text-sm">
            🎁 LINE登録特典　月のヒーリングBOOK 無料プレゼント
          </p>
          <div className="hidden items-center gap-2 sm:flex">
            {["オーラを整える方法", "チャクラセルフケア", "月光浴ワーク", "Serenaからの特別メッセージ"].map(
              (p) => (
                <span key={p} className="text-[11px] text-plum-900/55">
                  ✓ {p}
                </span>
              )
            )}
          </div>
        </div>
        <Link
          href={SNS.line.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full px-5 py-1.5 text-xs font-bold text-white shadow-md transition-transform hover:scale-[1.03]"
          style={{ background: "#06C755" }}
        >
          🌙 無料で受け取る
        </Link>
      </div>
    </div>
  );
}
