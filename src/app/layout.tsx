import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineBanner from "@/components/LineBanner";
import LineTopBanner from "@/components/LineTopBanner";
import LineFloatingButton from "@/components/LineFloatingButton";

export const metadata: Metadata = {
  title: {
    default: "Aura Garden | 月のヒーリング音楽ブランド",
    template: "%s | Aura Garden",
  },
  description:
    "Aura Garden（オーラガーデン）は、月のヒーラー Serena とともに贈るヒーリング音楽ブランド。睡眠・瞑想・安心感のための音楽と癒しのアファメーションをお届けします。",
  keywords: ["Aura Garden", "ヒーリング音楽", "睡眠用BGM", "瞑想", "アファメーション", "Serena", "癒し"],
  openGraph: {
    title: "Aura Garden | 月のヒーリング音楽ブランド",
    description: "月のヒーラー Serena とともに、あなた本来の光を思い出す場所。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className="h-full no-js">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.remove('no-js')" }} />
      </head>
      <body className="min-h-full flex flex-col">
        {/* ① ヘッダー直下のLINE登録バー */}
        <LineTopBanner />
        <Header />
        <main className="flex-1">{children}</main>
        {/* フッター直前のLINE誘導バナー */}
        <LineBanner />
        <Footer />
        {/* ② 右下固定のLINEフローティングボタン */}
        <LineFloatingButton />
      </body>
    </html>
  );
}
