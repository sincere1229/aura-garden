// src/lib/moonOracleUtils.ts
// Moon Oracle 各プラットフォーム用テキスト生成ユーティリティ
// LINE / Instagram / YouTube / PDF 共通で使用

import cardsData from "@/data/cards.json";

export type CardData = (typeof cardsData.cards)[0];

// ランダムカード取得
export function getRandomCard(): CardData {
  return cardsData.cards[Math.floor(Math.random() * cardsData.cards.length)];
}

// IDでカード取得
export function getCardById(id: number): CardData | undefined {
  return cardsData.cards.find((c) => c.id === id);
}

// キーワードでカード取得（LINE自動返信用）
export function getCardByKeyword(text: string): CardData | null {
  const lower = text.toLowerCase();
  for (const card of cardsData.cards) {
    if (card.lineKeywords.some((kw) => lower.includes(kw))) {
      return card;
    }
  }
  // キーワードなし → 「今日」「オラクル」「メッセージ」ならランダム
  if (["今日", "オラクル", "メッセージ", "カード"].some((kw) => text.includes(kw))) {
    return getRandomCard();
  }
  return null;
}

// ── ① LINE返信テキスト生成 ──────────────────────────
export function generateLineMessage(card: CardData): string {
  return `🌙 今日のMoon Oracle

Moon Card  No.${card.no}
✦ ${card.title}  ${card.english} ✦

${card.message}

— Serena より —
${card.serenaMessage}

──────────────
🔮 無料診断はこちら
aura-garden.vercel.app/diagnosis

✨ 個別鑑定はこちら
aura-garden.vercel.app/reading

Aura Garden 🌙`;
}

// ── ⑤ Instagram投稿文生成 ──────────────────────────
export function generateInstagramCaption(card: CardData): string {
  const hashtags = card.hashtags.join(" ");
  return `🌙 今日のMoon Oracle

Moon Card  No.${card.no}
✦ ${card.title} ✦

${card.message}

焦らず、
小さな一歩を大切に。

— Serena (Aura Garden) —
${card.serenaMessage}

✦ ✦ ✦

毎日のメッセージはLINEで受け取れます💌
プロフィールのリンクから登録してね🌙

${hashtags}`;
}

// ── YouTube Shorts 字幕データ生成 ──────────────────
export type ShortScene = {
  duration: number; // 秒
  text: string[];
  style: "intro" | "card" | "message" | "serena" | "outro";
};

export function generateShortsScenes(card: CardData): ShortScene[] {
  return [
    {
      duration: 2,
      style: "intro",
      text: ["🌙", "今日のMoon Oracle", "Aura Garden"],
    },
    {
      duration: 4,
      style: "card",
      text: [`Moon Card  No.${card.no}`, card.title, card.english],
    },
    {
      duration: 6,
      style: "message",
      text: card.message.split("。").filter(Boolean).map((s) => s + "。"),
    },
    {
      duration: 4,
      style: "serena",
      text: [
        "— Serena より —",
        ...card.serenaMessage.split("。").filter(Boolean).map((s) => s + "。"),
      ],
    },
    {
      duration: 3,
      style: "outro",
      text: [
        "Aura Garden",
        "🌙 今日のメッセージを受け取る",
        "LINE登録はプロフィールから",
      ],
    },
  ];
}

// ── 全カード一覧(管理用) ──────────────────────────
export function getAllCards(): CardData[] {
  return cardsData.cards;
}

export function getTotalCards(): number {
  return cardsData.totalCards;
}
