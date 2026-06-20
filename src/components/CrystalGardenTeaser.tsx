// src/components/CrystalGardenTeaser.tsx
// トップページ中段に表示する Crystal Garden への導線セクション（最終導線改善 修正③）
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CrystalGardenTeaser() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Crystal Garden
          </p>
          <h2 className="mt-6 font-display text-3xl text-plum-900 sm:text-4xl">
            あなたに寄り添う光の石たち
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            オーラやチャクラに対応したパワーストーンをご紹介しています。
            あなたに必要な石との出会いをお楽しみください。
          </p>
          <div className="mt-8">
            <Link
              href="/crystal"
              className="inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3.5 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
            >
              パワーストーンを見る
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
