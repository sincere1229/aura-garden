// src/data/crystals.ts
// Crystal Garden（パワーストーン図鑑）データ
// です・ます調、断定しすぎない表現で統一。医療的効果効能は記載しない。

export type Crystal = {
  slug: string;
  name: string;
  nameEn: string;
  shortTag: string; // 一覧カードのキャッチコピー（例: 癒しと直感）
  color: string;
  glow: string;
  keywords: string[]; // 3つ
  chakraId: string; // CHAKRASのidと対応（src/data/diagnosis.tsのCHAKRAS参照）
  chakraName: string;
  recommendedFor: string[]; // こんな方におすすめ
  serenaMessage: string;
};

export const CRYSTALS: Crystal[] = [
  {
    slug: "amethyst",
    name: "アメジスト",
    nameEn: "Amethyst",
    shortTag: "癒しと直感",
    color: "#9a86d8",
    glow: "rgba(154,134,216,.5)",
    keywords: ["癒し", "直感", "安眠"],
    chakraId: "third_eye",
    chakraName: "第6チャクラ（サードアイ）",
    recommendedFor: ["不安が多い", "心を落ち着けたい", "自分を見つめたい"],
    serenaMessage:
      "アメジストは、ざわついた心をそっと静めてくれる石と言われています。眠る前にそばに置いてみると、安らかな夜を過ごせるかもしれません。",
  },
  {
    slug: "rose-quartz",
    name: "ローズクォーツ",
    nameEn: "Rose Quartz",
    shortTag: "愛と自己受容",
    color: "#e8a8c0",
    glow: "rgba(232,168,192,.5)",
    keywords: ["愛", "自己受容", "やさしさ"],
    chakraId: "heart",
    chakraName: "第4チャクラ（ハート）",
    recommendedFor: ["自分に厳しくなりがち", "人間関係に疲れている", "やさしさを取り戻したい"],
    serenaMessage:
      "ローズクォーツは、自分自身をやさしく包み込んでくれる石と言われています。今日は少しだけ、自分にやさしくしてあげてくださいね。",
  },
  {
    slug: "citrine",
    name: "シトリン",
    nameEn: "Citrine",
    shortTag: "豊かさと行動力",
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    keywords: ["豊かさ", "行動力", "自信"],
    chakraId: "solar",
    chakraName: "第3チャクラ（ソーラープレクサス）",
    recommendedFor: ["新しい一歩を踏み出したい", "自信を持ちたい", "前向きになりたい"],
    serenaMessage:
      "シトリンは、太陽のようなあたたかいエネルギーを持つ石と言われています。迷っているなら、小さな一歩から始めてみましょう。",
  },
  {
    slug: "lapis-lazuli",
    name: "ラピスラズリ",
    nameEn: "Lapis Lazuli",
    shortTag: "真実と洞察",
    color: "#3f5fae",
    glow: "rgba(63,95,174,.5)",
    keywords: ["真実", "洞察", "コミュニケーション"],
    chakraId: "throat",
    chakraName: "第5チャクラ（スロート）",
    recommendedFor: ["本音を伝えたい", "物事の本質を見極めたい", "言葉に自信を持ちたい"],
    serenaMessage:
      "ラピスラズリは、古くから『真実を映す石』として大切にされてきました。あなたの言葉に、もっと自信を持ってくださいね。",
  },
  {
    slug: "moonstone",
    name: "ムーンストーン",
    nameEn: "Moonstone",
    shortTag: "月と感受性",
    color: "#c3b6ea",
    glow: "rgba(195,182,234,.5)",
    keywords: ["月", "感受性", "新しい始まり"],
    chakraId: "crown",
    chakraName: "第7チャクラ（クラウン）",
    recommendedFor: ["感情の波を感じやすい", "新しいことを始めたい", "直感を大切にしたい"],
    serenaMessage:
      "ムーンストーンは、月の満ち欠けのように心を整えてくれる石と言われています。あなたの感受性は、とても大切な力ですよ。",
  },
  {
    slug: "aquamarine",
    name: "アクアマリン",
    nameEn: "Aquamarine",
    shortTag: "浄化と調和",
    color: "#8fc1e8",
    glow: "rgba(143,193,232,.5)",
    keywords: ["浄化", "調和", "落ち着き"],
    chakraId: "throat",
    chakraName: "第5チャクラ（スロート）",
    recommendedFor: ["心をリセットしたい", "人間関係を穏やかにしたい", "緊張をほぐしたい"],
    serenaMessage:
      "アクアマリンは、海のように澄んだ波動を持つ石と言われています。深呼吸をするように、心をゆるめてみてくださいね。",
  },
  {
    slug: "tiger-eye",
    name: "タイガーアイ",
    nameEn: "Tiger Eye",
    shortTag: "勇気と決断",
    color: "#c08a3e",
    glow: "rgba(192,138,62,.5)",
    keywords: ["勇気", "決断力", "集中力"],
    chakraId: "solar",
    chakraName: "第3チャクラ（ソーラープレクサス）",
    recommendedFor: ["決断を先延ばしにしがち", "勇気が欲しい", "集中力を高めたい"],
    serenaMessage:
      "タイガーアイは、迷いを断ち切る力を授けてくれる石と言われています。あなたの中には、もう答えがあるのかもしれません。",
  },
  {
    slug: "clear-quartz",
    name: "水晶",
    nameEn: "Clear Quartz",
    shortTag: "浄化と増幅",
    color: "#f3eefc",
    glow: "rgba(243,238,252,.6)",
    keywords: ["浄化", "増幅", "万能"],
    chakraId: "crown",
    chakraName: "第7チャクラ（クラウン）",
    recommendedFor: ["気持ちをリセットしたい", "他の石と一緒に使いたい", "迷っている"],
    serenaMessage:
      "水晶は、あらゆる願いやエネルギーを澄んだ形に整えてくれる石と言われています。まずはこの一つから、始めてみるのもおすすめです。",
  },
];

export function getCrystalBySlug(slug: string): Crystal | undefined {
  return CRYSTALS.find((c) => c.slug === slug);
}

/* ============ パワーストーン診断（/crystal-diagnosis） ============ */

export type CrystalDiagnosisResult = {
  type: string; // 例: "Moon Stone Type"
  crystalSlug: string;
  shortDesc: string; // 結果画面のティザー（簡易説明のみ）
};

export const CRYSTAL_DIAGNOSIS_RESULTS: Record<string, CrystalDiagnosisResult> = {
  moon: {
    type: "Moon Stone Type",
    crystalSlug: "moonstone",
    shortDesc: "感受性が豊かで、直感を大切にするタイプのようです。",
  },
  rose: {
    type: "Rose Quartz Type",
    crystalSlug: "rose-quartz",
    shortDesc: "やさしさにあふれ、人とのつながりを大切にするタイプのようです。",
  },
  amethyst: {
    type: "Amethyst Type",
    crystalSlug: "amethyst",
    shortDesc: "静かな時間の中で、自分自身と向き合うタイプのようです。",
  },
  citrine: {
    type: "Citrine Type",
    crystalSlug: "citrine",
    shortDesc: "前向きなエネルギーで、行動することが得意なタイプのようです。",
  },
  tiger: {
    type: "Tiger Eye Type",
    crystalSlug: "tiger-eye",
    shortDesc: "芯の強さを持ち、決断力があるタイプのようです。",
  },
};

export type CrystalQuestion = {
  q: string;
  opts: { t: string; w: Record<string, number> }[];
};

export const CRYSTAL_QUESTIONS: CrystalQuestion[] = [
  {
    q: "心が疲れたとき、どう過ごしたい？",
    opts: [
      { t: "静かな場所で一人になりたい", w: { amethyst: 2, moon: 1 } },
      { t: "誰かにそばにいてほしい", w: { rose: 2 } },
      { t: "気分転換に外へ出たい", w: { citrine: 2, tiger: 1 } },
    ],
  },
  {
    q: "直感と論理、どちらを信じやすい？",
    opts: [
      { t: "直感を信じる", w: { moon: 2, amethyst: 1 } },
      { t: "両方バランスよく", w: { rose: 1, citrine: 1 } },
      { t: "論理的に考える", w: { tiger: 2 } },
    ],
  },
  {
    q: "新しいことを始めるときの気持ちは？",
    opts: [
      { t: "ワクワクする", w: { citrine: 2 } },
      { t: "じっくり考えてから動く", w: { tiger: 1, amethyst: 1 } },
      { t: "直感で決める", w: { moon: 2 } },
    ],
  },
  {
    q: "人間関係で大切にしていることは？",
    opts: [
      { t: "思いやり・やさしさ", w: { rose: 2 } },
      { t: "本音で話せること", w: { tiger: 1, citrine: 1 } },
      { t: "お互いのペースを尊重すること", w: { amethyst: 1, moon: 1 } },
    ],
  },
  {
    q: "今、一番欲しいものは？",
    opts: [
      { t: "心の安らぎ", w: { amethyst: 2, moon: 1 } },
      { t: "前に進む勇気", w: { tiger: 2, citrine: 1 } },
      { t: "あたたかいつながり", w: { rose: 2 } },
    ],
  },
];

export function pickCrystalWinner(scores: Record<string, number>): string {
  let best = "";
  let bestScore = -Infinity;
  for (const [k, v] of Object.entries(scores)) {
    if (v > bestScore) {
      best = k;
      bestScore = v;
    }
  }
  return best;
}
