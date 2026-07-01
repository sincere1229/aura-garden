// src/components/FreeGiftBanner.tsx
// トップページ用「無料プレゼント」セクション（実装④）
// 月のヒーリングBOOKを訴求し、LINE登録に直結させる導線です。
import Link from "next/link";
import Starfield from "@/components/Starfield";
import { SNS } from "@/data/sns";

export default function FreeGiftBanner() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="relative mx-auto max-w-3xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 px-6 py-12 text-center text-white sm:px-12 sm:py-16">
        <Starfield count={24} />
        <div className="relative">
          <p className="text-xs uppercase tracking-[0.3em] text-white/80">
            🎁 LINE登録特典 // 数量限定
          </p>
          <h2 className="mt-4 font-display text-2xl leading-relaxed sm:text-3xl whitespace-pre-line">
            心を静かに整えるお守り電子書籍{"\n"}
            Serenaの『月のヒーリングBOOK』
          </h2>
          <ul className="mx-auto mt-6 max-w-md space-y-3 text-left text-sm leading-relaxed text-white/90">
            <li className="flex items-start gap-2">
              <span className="text-aqua-200">✓</span>
              <span><strong>オーラを整える方法：</strong> 疲れをリセットし、あなた本来の輝きを取り戻すセルフケア</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-200">✓</span>
              <span><strong>チャクラの基礎知識：</strong> 心と体のエネルギーバランスをセルフチェック</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-200">✓</span>
              <span><strong>月光浴ワーク：</strong> 静かな夜に満たされる、新月・満月の過ごし方</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-aqua-200">✓</span>
              <span><strong>Serenaからの特別メッセージ：</strong> 毎日がんばるあなたの心をそっと緩める言葉の薬</span>
            </li>
          </ul>
          <p className="mt-6 text-sm font-medium text-white/95 bg-white/10 inline-block px-4 py-1.5 rounded-full">
            今すぐLINEの友だち追加で無料プレゼント🌙
          </p>
          <div className="mt-5">
            <Link
              href={SNS.line.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" style={{ color: "#06C755" }} aria-hidden="true">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.105.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              無料で受け取る🌙
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
