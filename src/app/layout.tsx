import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LineBanner from "@/components/LineBanner";

export const metadata: Metadata = {
  title: {
    default: "Aura Garden | 月のヒーリング音楽ブランド",
    template: "%s | Aura Garden",
  },
  description:
    "Aura Garden（オーラガーデン）は、月のヒーラー Serena とともに贈るヒーリング音楽ブランド。睡眠・瞑想・安心感のための音楽と癒しのアファメーションをお届けします。",
  keywords: [
    "Aura Garden",
    "ヒーリング音楽",
    "睡眠用BGM",
    "瞑想",
    "アファメーション",
    "Serena",
    "癒し",
  ],
  openGraph: {
    title: "Aura Garden | 月のヒーリング音楽ブランド",
    description:
      "月のヒーラー Serena とともに、あなた本来の光を思い出す場所。睡眠・瞑想のためのヒーリング音楽とアファメーション。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full no-js">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.remove('no-js')",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        {/* LINE導線：全ページ共通 */}
        <LineBanner />
        <Footer />
      </body>
    </html>
  );
}
