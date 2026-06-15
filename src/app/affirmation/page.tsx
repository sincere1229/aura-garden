import type { Metadata } from "next";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import AffirmationCard from "@/components/AffirmationCard";

export const metadata: Metadata = {
  title: "癒しのアファメーション | 今日のメッセージ",
  description:
    "月のヒーラー Serena からの、癒しのアファメーション。ボタンを押すたびに、ランダムに今日のメッセージをお届けします。睡眠前や瞑想の時間にお使いください。",
};

export default function AffirmationPage() {
  return (
    <div className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24">
      <div className="absolute inset-0">
        <Starfield count={45} />
      </div>
      <div className="relative mx-auto max-w-3xl">
        <header className="text-center">
          <p className="moon-divider text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Affirmation
          </p>
          <h1 className="mt-4 font-display text-4xl text-plum-900 sm:text-5xl">
            癒しのアファメーション
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            Serena から、今日のあなたへのメッセージです。ボタンを押すと、新しい言葉が届きます。眠る前や、ひと息つきたいときにご利用ください。
          </p>
        </header>

        <Reveal delay={100} className="mt-12">
          <AffirmationCard />
        </Reveal>

        <Reveal delay={200}>
          <p className="mx-auto mt-12 max-w-md text-center text-xs leading-relaxed text-plum-900/40">
            ※ こちらのメッセージは医療的・専門的な助言の代わりにはなりません。心身の不調が続く場合は、専門機関へのご相談をおすすめします。
          </p>
        </Reveal>
      </div>
    </div>
  );
}
