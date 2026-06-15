// src/data/diagnosis.ts
// Aura Garden 診断データ（オーラ診断 / チャクラ診断 / 波動タイプ診断）

export const YOUTUBE_URL = "https://www.youtube.com/@AuraGarden";
export const READING_PRODUCT_URL = "/serena"; // 診断書（鑑定）販売ページへの導線。確定したら変更してください

export type FreqInfo = { hz: number; label: string };

export const FREQ_BY_KEY: Record<string, FreqInfo> = {
  lavender: { hz: 852, label: "852Hz｜直感の覚醒" },
  green: { hz: 639, label: "639Hz｜調和とつながり" },
  blue: { hz: 741, label: "741Hz｜浄化と表現" },
  gold: { hz: 528, label: "528Hz｜愛と再生" },
  white: { hz: 963, label: "963Hz｜高次元との接続" },
  moon: { hz: 852, label: "852Hz｜直感の覚醒" },
  passion: { hz: 528, label: "528Hz｜愛と創造" },
  guardian: { hz: 396, label: "396Hz｜安定と解放" },
  seeker: { hz: 963, label: "963Hz｜探求と覚醒" },
  master: { hz: 741, label: "741Hz｜浄化と表現" },
};

/* ============ 1. オーラ診断 ============ */
export type AuraResult = {
  name: string;
  color: string;
  glow: string;
  key: string;
  desc: string;
  keywords: string[];
};

export const AURA_RESULTS: Record<string, AuraResult> = {
  lavender: {
    name: "ラベンダーオーラ",
    color: "#b9a6e0",
    glow: "rgba(185,166,224,.5)",
    key: "直感",
    desc: "繊細で霊感豊か。直感とインスピレーションに導かれて生きるタイプです。一人の時間が、あなたの感性を磨く大切な栄養になります。",
    keywords: ["スピリチュアル", "直感力", "芸術性"],
  },
  green: {
    name: "グリーンオーラ",
    color: "#8fcfb0",
    glow: "rgba(143,207,176,.5)",
    key: "調和",
    desc: "穏やかで思いやり深く、人とのつながりを大切にするタイプ。自然やリラックスできる空間が、あなたの波動を整えてくれます。",
    keywords: ["優しさ", "癒し", "成長"],
  },
  blue: {
    name: "ブルーオーラ",
    color: "#8fc1e8",
    glow: "rgba(143,193,232,.5)",
    key: "表現",
    desc: "誠実でコミュニケーションが得意なタイプ。思っていることを言葉にすることで、運気がよりひらけていきます。",
    keywords: ["コミュニケーション", "誠実", "知性"],
  },
  gold: {
    name: "ゴールドオーラ",
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    key: "豊かさ",
    desc: "リーダーシップと自信に満ちたタイプ。あなたの存在そのものが周囲を明るくし、豊かさを引き寄せます。",
    keywords: ["自信", "豊かさ", "リーダーシップ"],
  },
  white: {
    name: "ホワイトオーラ",
    color: "#f3eefc",
    glow: "rgba(243,238,252,.6)",
    key: "覚醒",
    desc: "とても純粋で高い波動を持つタイプ。今まさに新しいステージへ向かう転換期にいます。古いものを手放す勇気が鍵になります。",
    keywords: ["純粋", "覚醒", "リセット"],
  },
};

export type ChoiceQuestion = {
  q: string;
  opts: { t: string; w: Record<string, number> }[];
};

export const AURA_QUESTIONS: ChoiceQuestion[] = [
  { q: "ふと一人になりたいと思うことが多い", opts: [
    { t: "とてもよくある", w: { lavender: 2, white: 1 } },
    { t: "時々ある", w: { lavender: 1, blue: 1 } },
    { t: "あまりない", w: { gold: 1, green: 1 } },
  ]},
  { q: "自然の中にいると元気が回復する", opts: [
    { t: "はい、とても", w: { green: 2 } },
    { t: "まあそう思う", w: { green: 1, lavender: 1 } },
    { t: "特に感じない", w: { gold: 1, blue: 1 } },
  ]},
  { q: "人前で話すのは", opts: [
    { t: "得意・好き", w: { blue: 2, gold: 1 } },
    { t: "場合によっては平気", w: { blue: 1, green: 1 } },
    { t: "正直苦手", w: { lavender: 1, white: 1 } },
  ]},
  { q: "目標を立てたら、達成への意欲が強い", opts: [
    { t: "強くある", w: { gold: 2, blue: 1 } },
    { t: "ある程度ある", w: { gold: 1, green: 1 } },
    { t: "あまりこだわらない", w: { lavender: 1, white: 1 } },
  ]},
  { q: "最近、変化や転機の予感がする", opts: [
    { t: "強く感じる", w: { white: 2, lavender: 1 } },
    { t: "少し感じる", w: { white: 1, blue: 1 } },
    { t: "特にない", w: { green: 1, gold: 1 } },
  ]},
  { q: "夢や直感で物事を決めることがある", opts: [
    { t: "よくある", w: { lavender: 2, white: 1 } },
    { t: "時々ある", w: { lavender: 1, green: 1 } },
    { t: "ほとんどない", w: { gold: 1, blue: 1 } },
  ]},
  { q: "誰かが困っていると放っておけない", opts: [
    { t: "すぐ手を貸す", w: { green: 2, gold: 1 } },
    { t: "様子をみて手助けする", w: { green: 1, blue: 1 } },
    { t: "まず自分のことを優先する", w: { gold: 1, white: 1 } },
  ]},
  { q: "新しいことを始めるとき", opts: [
    { t: "ワクワクが先に来る", w: { gold: 2, white: 1 } },
    { t: "じっくり考えてから動く", w: { blue: 1, green: 1 } },
    { t: "感覚で『これだ』と決める", w: { lavender: 2 } },
  ]},
  { q: "色や音、香りなど感覚的なものに敏感", opts: [
    { t: "とても敏感", w: { lavender: 2, white: 1 } },
    { t: "そこそこ", w: { lavender: 1, blue: 1 } },
    { t: "あまり気にしない", w: { gold: 1, green: 1 } },
  ]},
  { q: "今の自分に満足度を聞かれたら", opts: [
    { t: "とても満足", w: { gold: 2, green: 1 } },
    { t: "まあまあ満足", w: { green: 1, blue: 1 } },
    { t: "変わりたい気持ちが強い", w: { white: 2, lavender: 1 } },
  ]},
  { q: "睡眠中に印象的な夢をよく見る", opts: [
    { t: "よく見る", w: { lavender: 2, white: 1 } },
    { t: "ときどき", w: { lavender: 1, green: 1 } },
    { t: "ほとんど見ない", w: { gold: 1, blue: 1 } },
  ]},
  { q: "周りからどんな人だと言われる？", opts: [
    { t: "ムードメーカー・明るい", w: { gold: 2, blue: 1 } },
    { t: "癒し系・優しい", w: { green: 2, lavender: 1 } },
    { t: "ミステリアス・芸術的", w: { white: 2, lavender: 1 } },
  ]},
];

/* ============ 2. チャクラ診断 ============ */
export type ChakraInfo = {
  id: string;
  name: string;
  sub: string;
  color: string;
  icon: string;
  theme: string;
};

export const CHAKRAS: ChakraInfo[] = [
  { id: "root", name: "ルートチャクラ", sub: "第1・base", color: "#e0707c", icon: "●", theme: "安心・安全・グラウンディング" },
  { id: "sacral", name: "セイクラルチャクラ", sub: "第2・仙骨", color: "#f0924f", icon: "●", theme: "感情・創造性・喜び" },
  { id: "solar", name: "ソーラープレクサス", sub: "第3・太陽神経叢", color: "#e8c468", icon: "●", theme: "自信・意志力・行動力" },
  { id: "heart", name: "ハートチャクラ", sub: "第4・心臓", color: "#8fcfb0", icon: "●", theme: "愛・つながり・調和" },
  { id: "throat", name: "スロートチャクラ", sub: "第5・喉", color: "#8fc1e8", icon: "●", theme: "表現・コミュニケーション" },
  { id: "third_eye", name: "サードアイチャクラ", sub: "第6・眉間", color: "#9a86d8", icon: "●", theme: "直感・洞察力" },
  { id: "crown", name: "クラウンチャクラ", sub: "第7・頭頂", color: "#cbb6e8", icon: "●", theme: "精神性・宇宙とのつながり" },
];

export type ChakraQuestion = { chakra: string; q: string; reverse: boolean };

// 各チャクラにつき2問 = 14問。0=不調 / 1=普通 / 2=良好（reverseは反転）
export const CHAKRA_QUESTIONS: ChakraQuestion[] = [
  { chakra: "root", q: "最近、地に足がついていない感覚がある", reverse: true },
  { chakra: "root", q: "生活の基盤（住まい・お金・健康）に安心感がある", reverse: false },
  { chakra: "sacral", q: "趣味や創作活動を楽しむ余裕がある", reverse: false },
  { chakra: "sacral", q: "感情をうまく表現できずに溜め込みやすい", reverse: true },
  { chakra: "solar", q: "「私はできる」という自信を感じている", reverse: false },
  { chakra: "solar", q: "決断を先延ばしにしてしまうことが多い", reverse: true },
  { chakra: "heart", q: "周りの人への感謝の気持ちが自然と湧く", reverse: false },
  { chakra: "heart", q: "人を信じることに不安を感じやすい", reverse: true },
  { chakra: "throat", q: "本音を言葉にして伝えることができている", reverse: false },
  { chakra: "throat", q: "言いたいことを飲み込んでしまうことが多い", reverse: true },
  { chakra: "third_eye", q: "ふとした直感やひらめきを信じられる", reverse: false },
  { chakra: "third_eye", q: "考えすぎて頭がいっぱいになりやすい", reverse: true },
  { chakra: "crown", q: "毎日の中に「何か大きな意味」を感じる瞬間がある", reverse: false },
  { chakra: "crown", q: "目的や意味を見失っている感覚がある", reverse: true },
];

export const CHAKRA_OPTS = [
  { t: "そう思わない", v: 0 },
  { t: "どちらでもない", v: 1 },
  { t: "そう思う", v: 2 },
];

// チャクラごとの推奨周波数マップ
export const CHAKRA_FREQ_MAP: Record<string, string> = {
  root: "guardian",
  sacral: "passion",
  solar: "gold",
  heart: "green",
  throat: "blue",
  third_eye: "lavender",
  crown: "white",
};

/* ============ 3. 波動タイプ診断 ============ */
export type WaveResult = {
  name: string;
  color: string;
  glow: string;
  key: string;
  desc: string;
  keywords: string[];
};

export const WAVE_RESULTS: Record<string, WaveResult> = {
  moon: {
    name: "月光ヒーラー",
    color: "#c3b6ea",
    glow: "rgba(195,182,234,.5)",
    key: "moon",
    desc: "静かで穏やかな波動の持ち主。人の心に寄り添い、そっと癒すことが得意です。月明かりのように、控えめながらも確かな光であなたは周りを照らしています。",
    keywords: ["共感力", "癒し", "静けさ"],
  },
  passion: {
    name: "情熱クリエイター",
    color: "#f0924f",
    glow: "rgba(240,146,79,.5)",
    key: "passion",
    desc: "熱量と発想力に溢れたタイプ。心が動いた瞬間に行動できる強さがあります。今のあなたの『やりたい』という気持ちは、誰かを動かす力になります。",
    keywords: ["創造力", "情熱", "推進力"],
  },
  guardian: {
    name: "ナチュラルガーディアン",
    color: "#8fcfb0",
    glow: "rgba(143,207,176,.5)",
    key: "guardian",
    desc: "安定感と優しさを兼ね備えたタイプ。あなたがいるだけで、その場の空気が和らぎます。地に足をつけながら、大切な人やものを守る役割を担っています。",
    keywords: ["安定", "優しさ", "守護"],
  },
  seeker: {
    name: "スターシーカー",
    color: "#9a86d8",
    glow: "rgba(154,134,216,.5)",
    key: "seeker",
    desc: "探求心が強く、新しい知識や世界に惹かれるタイプ。今のあなたは『答えを探す旅』の途中にいます。その探求自体が、あなたの成長そのものです。",
    keywords: ["探求心", "知性", "冒険"],
  },
  master: {
    name: "ライトマスター",
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    key: "master",
    desc: "高い精神性とリーダーシップを併せ持つタイプ。多くの経験を経て、今は『人に伝える・導く』フェーズに入っています。その光を惜しまず分け与えてください。",
    keywords: ["リーダーシップ", "精神性", "伝達"],
  },
};

export const WAVE_QUESTIONS: ChoiceQuestion[] = [
  { q: "休日の理想の過ごし方は？", opts: [
    { t: "静かな場所でゆったり過ごす", w: { moon: 2, guardian: 1 } },
    { t: "新しいことに挑戦する", w: { passion: 2, seeker: 1 } },
    { t: "大切な人とのんびり", w: { guardian: 2, master: 1 } },
    { t: "本や情報に触れて学ぶ", w: { seeker: 2, master: 1 } },
  ]},
  { q: "気持ちが落ち込んだとき", opts: [
    { t: "一人で静かに過ごす", w: { moon: 2 } },
    { t: "体を動かして気分転換", w: { passion: 2 } },
    { t: "家族やペットと過ごす", w: { guardian: 2 } },
    { t: "本や言葉から答えを探す", w: { seeker: 1, master: 1 } },
  ]},
  { q: "人から相談されることが多い", opts: [
    { t: "とても多い・じっくり聞く", w: { moon: 2, master: 1 } },
    { t: "アドバイスを即実行型で返す", w: { passion: 1, guardian: 1 } },
    { t: "一緒に解決策を考える", w: { guardian: 2, seeker: 1 } },
    { t: "深い視点で気づきを与える", w: { master: 2, seeker: 1 } },
  ]},
  { q: "夜、星空を見たときに浮かぶ気持ちは？", opts: [
    { t: "落ち着く、安心する", w: { moon: 2, guardian: 1 } },
    { t: "ワクワクする、何か始まる気がする", w: { passion: 2, seeker: 1 } },
    { t: "宇宙や未知のことを考える", w: { seeker: 2, master: 1 } },
    { t: "感謝の気持ちが湧く", w: { master: 1, moon: 1 } },
  ]},
  { q: "仕事やタスクへの向き方は？", opts: [
    { t: "じっくりコツコツ進める", w: { moon: 1, guardian: 2 } },
    { t: "とりあえず動きながら考える", w: { passion: 2 } },
    { t: "全体を分析して効率よく", w: { seeker: 1, master: 2 } },
    { t: "人の役に立つかを基準にする", w: { guardian: 1, moon: 1 } },
  ]},
  { q: "あなたの長所だと感じるのは？", opts: [
    { t: "聞き上手・共感力", w: { moon: 2 } },
    { t: "発想力・行動力", w: { passion: 2 } },
    { t: "面倒見の良さ・安定感", w: { guardian: 2 } },
    { t: "好奇心・洞察力", w: { seeker: 2, master: 1 } },
  ]},
  { q: "理想のライフスタイルは？", opts: [
    { t: "穏やかで自分のペースを保てる暮らし", w: { moon: 2 } },
    { t: "常に新しいことが起こる刺激的な暮らし", w: { passion: 2 } },
    { t: "家族や仲間と支え合う暮らし", w: { guardian: 2 } },
    { t: "学び続け、知見を人に伝える暮らし", w: { master: 2, seeker: 1 } },
  ]},
  { q: "最近よく考えるテーマは？", opts: [
    { t: "心の安定・休息", w: { moon: 2 } },
    { t: "新しい挑戦・夢の実現", w: { passion: 2 } },
    { t: "大切な人や場所を守ること", w: { guardian: 2 } },
    { t: "人生の意味や使命", w: { master: 2, seeker: 1 } },
  ]},
  { q: "占いやスピリチュアルなものへの興味は？", opts: [
    { t: "好き、深く知りたい", w: { moon: 1, seeker: 2 } },
    { t: "面白そうなら試したい", w: { passion: 1, seeker: 1 } },
    { t: "あまり詳しくないが気になる", w: { guardian: 1, moon: 1 } },
    { t: "自分なりの考えを持っている", w: { master: 2 } },
  ]},
  { q: "今のあなたの心の状態に近いのは？", opts: [
    { t: "穏やかで安定している", w: { moon: 2, guardian: 1 } },
    { t: "やる気と勢いがある", w: { passion: 2 } },
    { t: "誰かのために動きたい気持ち", w: { guardian: 2, master: 1 } },
    { t: "新しい知識・経験を求めている", w: { seeker: 2 } },
  ]},
  { q: "好きな時間帯は？", opts: [
    { t: "夜、月が出ている時間", w: { moon: 2 } },
    { t: "朝、エネルギーに満ちた時間", w: { passion: 2 } },
    { t: "夕方、家族が集まる時間", w: { guardian: 2 } },
    { t: "明け方や深夜、静かに思考できる時間", w: { seeker: 1, master: 2 } },
  ]},
  { q: "周囲の人にどう見られたい？", opts: [
    { t: "心が落ち着く存在", w: { moon: 2 } },
    { t: "刺激や元気を与える存在", w: { passion: 2 } },
    { t: "頼れる・安心できる存在", w: { guardian: 2 } },
    { t: "頼られる・導いてくれる存在", w: { master: 2, seeker: 1 } },
  ]},
];

/* ============ Serenaからのメッセージ ============ */
export const SERENA_MESSAGES = {
  aura: {
    lavender: "こんにちは。あなたの繊細な感受性は、誰にも代えられないギフトです。静かな時間を大切に、その光をゆっくり育てていってくださいね。",
    green: "あなたの優しさは、すでに多くの人を癒しています。同じくらいの優しさを、どうか自分自身にも向けてあげてください。",
    blue: "言葉にすることを怖がらなくて大丈夫。あなたの誠実な想いは、ちゃんと相手に届きます。今日はひとつ、伝えたかったことを伝えてみて。",
    gold: "あなたの中にある豊かさのエネルギーは、周りの人にも循環していきます。自信を持って、その光を分け与えてあげてください。",
    white: "今、あなたは大きな変化の入り口に立っています。少し怖く感じても、その先には新しい景色が待っていますよ。",
  } as Record<string, string>,
  chakra: {
    high: "今のあなたは、心と身体のバランスがとても整っています。この穏やかな波動を保ちながら、無理せず歩んでいきましょう。",
    mid: "あなたの中には、すでに整っている部分とこれから育っていく部分があります。それは自然なことなので、安心してくださいね。",
    low: "少し頑張りすぎているのかもしれません。今日はいつもより少しだけ、自分を労わる時間をつくってあげてください。",
  } as Record<string, string>,
  wave: {
    moon: "静かなあなたの存在そのものが、誰かにとっての光になっています。焦らなくて大丈夫、あなたのペースで進んでいきましょう。",
    passion: "あなたの『やってみたい』という気持ちは、これからの未来を動かす種です。思い切って一歩、踏み出してみてくださいね。",
    guardian: "あなたが大切にしているものは、あなた自身がいることでちゃんと守られています。たまには自分のことも、その輪の中に入れてあげて。",
    seeker: "答えはまだ見えなくても、その探求の過程こそが、あなたを成長させています。気になることがあれば、迷わず近づいてみてください。",
    master: "あなたが今まで歩んできた道は、すでに誰かの道しるべになっています。これからは、その光を惜しまず人に分けてあげてくださいね。",
  } as Record<string, string>,
};

/* ============ ユーティリティ ============ */
export function pickWinner(scores: Record<string, number>): string {
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
