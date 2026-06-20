// src/components/ComingSoonSection.tsx
// トップページ下部に表示する「今後実装予定」セクション（最終導線改善 修正⑤）
import Reveal from "@/components/Reveal";

const COMING_SOON_ITEMS = [
  "🌙 パワーストーン診断",
  "🌙 月タイプ診断",
  "🌙 ブレスレットコレクション",
];

export default function ComingSoonSection() {
  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-plum-900/40">
            Coming Soon
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            {COMING_SOON_ITEMS.map((item) => (
              <span
                key={item}
                className="rounded-full border border-dashed border-lavender-300 bg-white/40 px-5 py-2 text-sm text-plum-900/60"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-xs text-plum-900/40">
            これから順次公開予定です。
          </p>
        </Reveal>
      </div>
    </section>
  );
}
