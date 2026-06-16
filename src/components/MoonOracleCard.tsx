// src/data/moonOracle.ts
// Moon Oracle カードデータ
// 将来36枚まで増設可能な構造
// 追加方法: MOON_CARDS配列に追記するだけ
// 画像: /public/images/moon-cards/card_XX_name.png に配置

export type MoonCard = {
  no: number;           // カード番号 (1〜36)
  id: string;           // "01", "02" ... (ゼロパディング)
  keyword: string;      // 日本語キーワード
  keywordEn: string;    // 英語キーワード
  image: string;        // /images/moon-cards/card_XX_name.png
  message: string;      // Serenaからのメッセージ (カード画像に記載の文章)
  serenaNote: string;   // Serenaからの追加ひとこと (PDF用・より深いメッセージ)
};

export const MOON_CARDS: MoonCard[] = [
  {
    no: 1, id: "01",
    keyword: "光", keywordEn: "Light",
    image: "/images/moon-cards/card_01_light.png",
    message: "あなたの中の光が未来を照らしています。自分を信じて一歩を踏み出しましょう。",
    serenaNote: "どんなに暗い夜も、あなたの内側には消えない光があります。その光を信じて、今日も一歩だけ前に進んでみてください。",
  },
  {
    no: 2, id: "02",
    keyword: "希望", keywordEn: "Hope",
    image: "/images/moon-cards/card_02_hope.png",
    message: "希望の光は必ずあなたの道をやさしく照らしてくれます。信じて進んでいきましょう。",
    serenaNote: "希望は、遠くにあるのではなく、今この瞬間のあなたの心の中にあります。小さな「きっと大丈夫」が、あなたを前に進める力になります。",
  },
  {
    no: 3, id: "03",
    keyword: "調和", keywordEn: "Harmony",
    image: "/images/moon-cards/card_03_harmony.png",
    message: "心と体、周りとの調和があなたを穏やかに導いてくれます。バランスを大切に。",
    serenaNote: "今のあなたには、調和のエネルギーが流れています。無理せず、自分のペースで周りと穏やかにつながることを大切にしてみてください。",
  },
  {
    no: 4, id: "04",
    keyword: "花", keywordEn: "Flower",
    image: "/images/moon-cards/card_04_flower.png",
    message: "あなたの中に、咲こうとしている何かがあります。その芽を、信じて育ててください。",
    serenaNote: "花は急いで咲こうとしません。あなたの中にある可能性も、今ゆっくりと育ちはじめています。焦らず、その芽を大切にしてあげてくださいね。",
  },
  {
    no: 5, id: "05",
    keyword: "信頼", keywordEn: "Trust",
    image: "/images/moon-cards/card_05_trust.png",
    message: "流れに身をゆだねてみましょう。すべては、必要なタイミングでうまくいきます。",
    serenaNote: "今は思い通りにいかないように感じても、それは必要な流れです。自分と宇宙の流れを信頼して、少し肩の力を抜いてみてください。",
  },
  {
    no: 6, id: "06",
    keyword: "変化", keywordEn: "Change",
    image: "/images/moon-cards/card_06_change.png",
    message: "変化は、新しいステージへの扉を開きます。恐れずに、前へ進みましょう。",
    serenaNote: "変化を怖いと感じるのは自然なことです。でも、変化の先には必ず新しい景色が待っています。一歩踏み出す勇気を、Serenaが応援しています。",
  },
  {
    no: 7, id: "07",
    keyword: "静寂", keywordEn: "Silence",
    image: "/images/moon-cards/card_07_silence.png",
    message: "静かな時間の中に大切なメッセージが隠されています。心を静かにして聴いてみて。",
    serenaNote: "今日は、静かな時間をつくってみてください。ノイズを手放して、心の奥から届く声に耳を傾けると、大切な気づきが降りてきます。",
  },
  {
    no: 8, id: "08",
    keyword: "夢", keywordEn: "Dream",
    image: "/images/moon-cards/card_08_dream.png",
    message: "夢は遠くにあるのではなく、あなたの心の中にすでに宿っています。信じて、叶えていきましょう。",
    serenaNote: "あなたが「いつか」と思っている夢は、もうあなたの中に存在しています。その夢を信じてあげることが、現実へと近づく第一歩です。",
  },
  {
    no: 9, id: "09",
    keyword: "勇気", keywordEn: "Courage",
    image: "/images/moon-cards/card_09_courage.png",
    message: "小さな勇気の積み重ねが、あなたを大きく成長させます。自分を信じて一歩を。",
    serenaNote: "大きな勇気は必要ありません。今日、ほんの少し「やってみよう」と思えたこと。その小さな一歩が、あなたを確実に前に進めていきます。",
  },
  {
    no: 10, id: "10",
    keyword: "感謝", keywordEn: "Gratitude",
    image: "/images/moon-cards/card_10_gratitude.png",
    message: "「ありがとう」の気持ちは幸せの循環を生み出します。感謝の心を大切に。",
    serenaNote: "感謝は、受け取るものではなく、あなたの中から生まれるものです。今日、小さな「ありがとう」を一つ声に出してみてください。それが幸せの波を広げていきます。",
  },
  {
    no: 11, id: "11",
    keyword: "成長", keywordEn: "Growth",
    image: "/images/moon-cards/card_11_growth.png",
    message: "今日の小さな努力が未来の大きな実りにつながっていきます。",
    serenaNote: "今日のあなたは、昨日のあなたより少し成長しています。気づかないほど小さな変化でも、それは確かな成長です。自分の歩みを信じてあげてくださいね。",
  },
  {
    no: 12, id: "12",
    keyword: "癒し", keywordEn: "Healing",
    image: "/images/moon-cards/card_12_healing.png",
    message: "あなたがここにいるだけで、誰かの心がほんの少し軽くなっています。",
    serenaNote: "あなたの存在そのものが、誰かにとっての癒しです。完璧でなくていい。ただここにいてくれるだけで、十分なのです。今日はゆっくり、自分を労わってください。",
  },
  // ── 将来追加用テンプレート(No.13〜36) ──────────────────────
  // {
  //   no: 13, id: "13",
  //   keyword: "XXX", keywordEn: "XXX",
  //   image: "/images/moon-cards/card_13_xxx.png",
  //   message: "カードに書かれたメッセージ",
  //   serenaNote: "PDF用の追加メッセージ",
  // },
];

// カード総数(将来36枚まで対応)
export const TOTAL_CARDS = MOON_CARDS.length;
export const MAX_CARDS = 36;

// ランダム1枚取得
export function getRandomCard(seed?: number): MoonCard {
  if (seed !== undefined) {
    // 再現性のある選択(PDF生成時などに使用)
    const idx = seed % MOON_CARDS.length;
    return MOON_CARDS[idx];
  }
  return MOON_CARDS[Math.floor(Math.random() * MOON_CARDS.length)];
}

// カード番号で取得
export function getCardByNo(no: number): MoonCard | undefined {
  return MOON_CARDS.find((c) => c.no === no);
}

// 診断タイプ別におすすめカードを返す(将来的に活用可能)
export function getCardForDiagnosis(
  type: "aura" | "chakra" | "wave",
  resultKey: string
): MoonCard {
  // 現在はランダム。将来的に診断結果とカードを紐付ける場合はここを拡張
  return getRandomCard();
}
