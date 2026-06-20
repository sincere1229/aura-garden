// src/data/diagnosis.ts
// Aura Garden 診断データ（オーラ診断 / チャクラ診断 / 波動タイプ診断）
// ※すべての説明文・メッセージは Serena の言葉づかいルールに合わせています。
//   - です・ます調で統一
//   - 断定しすぎない（「〜のようです」「〜してみましょう」「〜がおすすめです」）
//   - 医療的な効果効能は言わない

export const YOUTUBE_URL = "https://www.youtube.com/@AuraGarden";

// Serenaの個別鑑定への導線。確定したら差し替えてください。
// ココナラ / STORES / PayPal / PAY.JP のいずれかのURLに置き換え可能。
export const READING_PRODUCT_URL = "/reading";

export type FreqInfo = { hz: number; label: string };

export const FREQ_BY_KEY: Record<string, FreqInfo> = {
  lavender: { hz: 852, label: "852Hz｜直感" },
  green: { hz: 639, label: "639Hz｜調和" },
  blue: { hz: 741, label: "741Hz｜浄化" },
  gold: { hz: 528, label: "528Hz｜愛" },
  white: { hz: 963, label: "963Hz｜宇宙" },
  moon: { hz: 852, label: "852Hz｜直感" },
  passion: { hz: 528, label: "528Hz｜愛" },
  guardian: { hz: 396, label: "396Hz｜解放" },
  seeker: { hz: 963, label: "963Hz｜宇宙" },
  master: { hz: 741, label: "741Hz｜浄化" },
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
    desc: "今のあなたは、感性が静かに澄んでいるようです。直感やインスピレーションが、ふだんより届きやすくなっているのかもしれません。一人で過ごす時間を大切にしてみると、その感性がよりやさしく育っていきます。",
    keywords: ["スピリチュアル", "直感力", "芸術性"],
  },
  green: {
    name: "グリーンオーラ",
    color: "#8fcfb0",
    glow: "rgba(143,207,176,.5)",
    key: "調和",
    desc: "今のあなたは、まわりへの思いやりが自然とあふれているようです。誰かのために動くことが多いぶん、自然の中でゆったり過ごす時間が、あなた自身の波動を整えてくれそうです。",
    keywords: ["優しさ", "癒し", "成長"],
  },
  blue: {
    name: "ブルーオーラ",
    color: "#8fc1e8",
    glow: "rgba(143,193,232,.5)",
    key: "表現",
    desc: "今のあなたは、誠実な気持ちを言葉にしようとしているようです。思っていることをそっと言葉にしてみると、まわりとの関係がより心地よくひらけていくかもしれません。",
    keywords: ["コミュニケーション", "誠実", "知性"],
  },
  gold: {
    name: "ゴールドオーラ",
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    key: "豊かさ",
    desc: "今のあなたには、前へ進もうとするあたたかなエネルギーが流れているようです。迷っていることがあるなら、小さな一歩から始めてみるのがおすすめです。その一歩が、まわりにも温かい光を広げてくれそうです。",
    keywords: ["自信", "豊かさ", "リーダーシップ"],
  },
  white: {
    name: "ホワイトオーラ",
    color: "#f3eefc",
    glow: "rgba(243,238,252,.6)",
    key: "覚醒",
    desc: "今のあなたは、新しいステージへの入り口に立っているようです。少し心がざわつくように感じても、それは変化のはじまりのサイン。手放してもいいものに、そっと気づける時期かもしれません。",
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
    desc: "今のあなたは、静かで穏やかな波動をまとっているようです。人の心にそっと寄り添うことが得意で、月明かりのように控えめながらも、まわりを照らす存在になっているのかもしれません。",
    keywords: ["共感力", "癒し", "静けさ"],
  },
  passion: {
    name: "情熱クリエイター",
    color: "#f0924f",
    glow: "rgba(240,146,79,.5)",
    key: "passion",
    desc: "今のあなたは、内側から湧き上がる熱量と発想力に恵まれているようです。心が動いた瞬間に動き出せる力があり、その『やってみたい』という気持ちは、まわりにも良い影響を広げてくれそうです。",
    keywords: ["創造力", "情熱", "推進力"],
  },
  guardian: {
    name: "ナチュラルガーディアン",
    color: "#8fcfb0",
    glow: "rgba(143,207,176,.5)",
    key: "guardian",
    desc: "今のあなたは、安定感とやさしさを兼ね備えているようです。あなたがいるだけで、その場の空気がやわらぐことも多いはず。大切な人やものをそっと支える役割を担っているのかもしれません。",
    keywords: ["安定", "優しさ", "守護"],
  },
  seeker: {
    name: "スターシーカー",
    color: "#9a86d8",
    glow: "rgba(154,134,216,.5)",
    key: "seeker",
    desc: "今のあなたは、新しい知識や世界に心が惹かれているようです。答えがまだ見えなくても、その『探求している時間』そのものが、あなたを少しずつ成長させてくれているのかもしれません。",
    keywords: ["探求心", "知性", "冒険"],
  },
  master: {
    name: "ライトマスター",
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    key: "master",
    desc: "今のあなたは、これまでの経験を誰かに伝えたり、導いたりするフェーズに入っているようです。あなたが歩んできた道のりは、すでに誰かの道しるべになっているのかもしれません。",
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
// です・ます調・断定を避けた表現で統一しています。
export const SERENA_MESSAGES = {
  aura: {
    lavender: "こんにちは。あなたの繊細な感性は、とても大切なものです。一人の時間を、ゆったりと過ごしてみてくださいね。",
    green: "あなたのやさしさは、すでに誰かの心をふんわりと包んでいるようです。同じやさしさを、少しだけ自分にも向けてみましょう。",
    blue: "言葉にすることを、難しく考えなくて大丈夫です。あなたの想いは、きっとそのままで伝わっていきます。",
    gold: "あなたの中にある明るいエネルギーは、まわりにもそっと広がっていきます。自分のペースで、安心して進んでみてくださいね。",
    white: "今、あなたは新しい景色の入り口にいるようです。少し心がざわついても、それは自然な変化のサインかもしれません。",
  } as Record<string, string>,
  chakra: {
    high: "今のあなたは、心と身体のバランスが穏やかに整っているようです。このままのペースで、無理せず過ごしていきましょう。",
    mid: "あなたの中には、整っている部分と、これからゆっくり育っていく部分が両方あるようです。それは自然なことなので、安心してくださいね。",
    low: "少し頑張りすぎているのかもしれません。今日はいつもより少しだけ、自分を労わる時間を持ってみてくださいね。",
  } as Record<string, string>,
  wave: {
    moon: "あなたの静かな存在そのものが、誰かにとっての光になっているようです。焦らなくて大丈夫、あなたのペースで進んでいきましょう。",
    passion: "あなたの『やってみたい』という気持ちは、これからの何かを動かす種になりそうです。小さな一歩から、はじめてみてくださいね。",
    guardian: "あなたが大切にしているものは、あなたがいることで、きちんと支えられているようです。たまには自分のことも、その輪の中に入れてあげてくださいね。",
    seeker: "答えがまだ見えなくても、その探求の時間こそが、あなたを少しずつ成長させているようです。気になることがあれば、そっと近づいてみましょう。",
    master: "あなたが歩んできた道は、すでに誰かの道しるべになっているのかもしれません。これからは、その経験を少しずつ分けてあげてくださいね。",
  } as Record<string, string>,
};
/* ============ LINE限定詳細データ（導線改善用） ============ */
// HPでは teaser（3つの特徴）までしか見せず、詳細はLINE登録後に解放する設計です。

export type AuraLineDetail = {
  strength: string;       // オーラの強み
  howToBalance: string;   // オーラの整え方
  goodColor: string;      // 相性の良い色
  goodStone: string;      // 相性の良いパワーストーン
  serenaMessage: string;  // Serenaからのメッセージ（詳細版）
};

export const AURA_TEASER_POINTS: Record<string, string[]> = {
  lavender: ["共感力が高い", "癒しの力を持つ", "感情を受け取りやすい"],
  green: ["思いやりにあふれている", "自然と調和する力がある", "人を支える存在"],
  blue: ["誠実さが伝わりやすい", "言葉で表現する力がある", "信頼を築きやすい"],
  gold: ["前向きなエネルギーがある", "行動力がある", "周りを明るくする"],
  white: ["変化を受け入れる力がある", "純粋な感性を持つ", "新しい流れを引き寄せる"],
};

export const AURA_LINE_DETAILS: Record<string, AuraLineDetail> = {
  lavender: {
    strength: "繊細な感受性で、人の気持ちにそっと寄り添える力があります。芸術的な感性も豊かです。",
    howToBalance: "一人の静かな時間を意識的につくること。月光浴や瞑想が特に合っています。",
    goodColor: "紫・ラベンダー・銀",
    goodStone: "アメジスト・ムーンストーン",
    serenaMessage: "あなたの感性は、誰かを癒すための大切な力です。無理に強くならなくて大丈夫。そのままのあなたで十分なんですよ。",
  },
  green: {
    strength: "人を支える力と、自然と調和するエネルギーを持っています。場の空気をやわらげる存在です。",
    howToBalance: "自然の中で過ごす時間を増やすこと。植物や緑に触れることで波動が整いやすくなります。",
    goodColor: "グリーン・ピンク",
    goodStone: "ローズクォーツ・グリーンアベンチュリン",
    serenaMessage: "あなたが与えているやさしさは、ちゃんと届いています。たまには自分自身も、その輪の中に入れてあげてくださいね。",
  },
  blue: {
    strength: "誠実な言葉で人とつながる力。コミュニケーションを通じて信頼を築くのが得意です。",
    howToBalance: "喉のチャクラを意識し、声に出して気持ちを表現する時間をつくること。",
    goodColor: "ブルー・ターコイズ",
    goodStone: "ラピスラズリ・アクアマリン",
    serenaMessage: "あなたの言葉には、思っている以上の力があります。素直な気持ちを、これからも大切にしてくださいね。",
  },
  gold: {
    strength: "前へ進む推進力と、人を惹きつけるあたたかさを兼ね備えています。",
    howToBalance: "小さな目標を立てて、達成する喜びを積み重ねること。日光を浴びる時間も効果的です。",
    goodColor: "ゴールド・オレンジ",
    goodStone: "シトリン・タイガーアイ",
    serenaMessage: "あなたの一歩は、まわりにも温かい光を広げています。自信を持って、その道を進んでくださいね。",
  },
  white: {
    strength: "純粋な感性と、変化を受け入れる柔軟さを持っています。新しいステージへ導く力があります。",
    howToBalance: "手放したいものをそっとリストにしてみること。浄化のための白い光をイメージする瞑想もおすすめです。",
    goodColor: "ホワイト・シルバー",
    goodStone: "水晶・セレナイト",
    serenaMessage: "今のあなたは、新しい景色の入り口に立っています。焦らず、その変化をそっと受け止めてくださいね。",
  },
};

export type ChakraLineDetail = {
  detail: string;
  balanceMethod: string;
  recommendedHealing: string;
  serenaMessage: string;
};

// 最もケアが必要なチャクラ（lowest）に対するLINE限定詳細
export const CHAKRA_LINE_DETAILS: Record<string, ChakraLineDetail> = {
  root: {
    detail: "生活の基盤や安心感に関わるチャクラです。バランスが乱れると、漠然とした不安を感じやすくなります。",
    balanceMethod: "裸足で土や床に触れる、規則正しい生活リズムを意識するなど、地に足をつける行動が効果的です。",
    recommendedHealing: "396Hzの解放の周波数",
    serenaMessage: "まずは安心できる土台を、少しずつ整えていきましょう。あなたのペースで大丈夫ですよ。",
  },
  sacral: {
    detail: "感情や創造性に関わるチャクラです。乱れると感情を抑え込みやすくなります。",
    balanceMethod: "好きなことを純粋に楽しむ時間、創作活動や水に触れることが整えに役立ちます。",
    recommendedHealing: "528Hzの愛の周波数",
    serenaMessage: "感じたことを、もっと自由に表現してもいいんですよ。あなたの感情はとても大切なものです。",
  },
  solar: {
    detail: "自信や意志力に関わるチャクラです。乱れると自己肯定感が下がりやすくなります。",
    balanceMethod: "小さな成功体験を積み重ねること、姿勢を正して深く呼吸することが効果的です。",
    recommendedHealing: "528Hzの愛の周波数",
    serenaMessage: "あなたにはちゃんと『できる力』があります。一歩ずつ、自信を取り戻していきましょう。",
  },
  heart: {
    detail: "愛とつながりに関わるチャクラです。乱れると人を信じることに不安を感じやすくなります。",
    balanceMethod: "感謝の気持ちを言葉にすること、自分自身にもやさしさを向けることが大切です。",
    recommendedHealing: "639Hzの調和の周波数",
    serenaMessage: "あなたが誰かに向けているやさしさを、少しだけ自分にも向けてあげてくださいね。",
  },
  throat: {
    detail: "表現とコミュニケーションに関わるチャクラです。乱れると本音を飲み込みやすくなります。",
    balanceMethod: "声に出して気持ちを伝える練習、歌うことや日記をつけることが効果的です。",
    recommendedHealing: "741Hzの浄化の周波数",
    serenaMessage: "あなたの言葉を、もっと外に出してもいいんですよ。きっと誰かに届いています。",
  },
  third_eye: {
    detail: "直感と洞察力に関わるチャクラです。乱れると考えすぎて疲れやすくなります。",
    balanceMethod: "瞑想や静かな時間を持つこと、直感を信じて小さな選択をしてみることが効果的です。",
    recommendedHealing: "852Hzの直感の周波数",
    serenaMessage: "頭で考えすぎず、心の声にそっと耳を傾けてみてくださいね。",
  },
  crown: {
    detail: "精神性と宇宙とのつながりに関わるチャクラです。乱れると目的を見失いやすくなります。",
    balanceMethod: "静かに自分自身と向き合う時間、自然や星空とつながる瞑想が効果的です。",
    recommendedHealing: "963Hzの宇宙の周波数",
    serenaMessage: "答えはすぐに見つからなくても大丈夫。あなたの歩みには、ちゃんと意味がありますよ。",
  },
};

export type WaveLineDetail = {
  strength: string;
  howToBalance: string;
  goodColor: string;
  goodStone: string;
  serenaMessage: string;
};

export const WAVE_TEASER_POINTS: Record<string, string[]> = {
  moon: ["静かで穏やかな波動", "人に寄り添う共感力", "控えめだけど芯がある"],
  passion: ["内側から湧き上がる熱量", "発想力にあふれている", "行動に移すスピードが早い"],
  guardian: ["安定感とやさしさ", "大切なものを守る力", "そばにいるだけで安心される"],
  seeker: ["知的好奇心が強い", "新しい世界に惹かれる", "学び続ける探求心"],
  master: ["経験を伝える力", "導く存在になりやすい", "精神的な深さがある"],
};

export const WAVE_LINE_DETAILS: Record<string, WaveLineDetail> = {
  moon: {
    strength: "人の心にそっと寄り添う共感力。静かな存在感で、まわりを安心させます。",
    howToBalance: "夜の静かな時間を大切にすること。月光浴や瞑想が特に合っています。",
    goodColor: "シルバー・ラベンダー",
    goodStone: "ムーンストーン・アメジスト",
    serenaMessage: "あなたの静けさは、誰かにとっての安心になっています。焦らず、あなたのペースで進んでくださいね。",
  },
  passion: {
    strength: "心が動いた瞬間に行動できる推進力。創造的な発想で周りを巻き込む力があります。",
    howToBalance: "アイデアをメモする習慣、体を動かしてエネルギーを発散することが効果的です。",
    goodColor: "オレンジ・レッド",
    goodStone: "カーネリアン・サンストーン",
    serenaMessage: "あなたの『やってみたい』という気持ちを、これからも大切にしてくださいね。",
  },
  guardian: {
    strength: "安定感とやさしさで、大切な人やものをそっと支える力があります。",
    howToBalance: "自分自身をケアする時間も意識的につくること。頑張りすぎないことが大切です。",
    goodColor: "グリーン・ブラウン",
    goodStone: "グリーンアベンチュリン・スモーキークォーツ",
    serenaMessage: "あなたが支えているものは、あなたがいることでちゃんと守られています。たまには自分も労わってくださいね。",
  },
  seeker: {
    strength: "知的好奇心と洞察力。答えのない問いに向き合い続ける探求心があります。",
    howToBalance: "新しい本や情報に触れる時間、静かに思考を整理する時間をつくること。",
    goodColor: "パープル・ブルー",
    goodStone: "ラピスラズリ・フローライト",
    serenaMessage: "答えがまだ見えなくても、その探求の時間こそがあなたを成長させていますよ。",
  },
  master: {
    strength: "経験を分かち合い、人を導く力。精神的な深さで信頼を集めます。",
    howToBalance: "経験を言葉や形にして誰かに伝えること。教えることで自分も学びが深まります。",
    goodColor: "ゴールド・パープル",
    goodStone: "タイガーアイ・スギライト",
    serenaMessage: "あなたが歩んできた道は、すでに誰かの道しるべになっています。少しずつ分けてあげてくださいね。",
  },
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
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Starfield from "@/components/Starfield";
import Reveal from "@/components/Reveal";
import {
  AURA_QUESTIONS,
  AURA_RESULTS,
  AURA_TEASER_POINTS,
  AURA_LINE_DETAILS,
  CHAKRAS,
  CHAKRA_QUESTIONS,
  CHAKRA_OPTS,
  CHAKRA_FREQ_MAP,
  CHAKRA_LINE_DETAILS,
  WAVE_QUESTIONS,
  WAVE_RESULTS,
  WAVE_TEASER_POINTS,
  WAVE_LINE_DETAILS,
  SERENA_MESSAGES,
  FREQ_BY_KEY,
  YOUTUBE_URL,
  READING_PRODUCT_URL,
  pickWinner,
  type ChoiceQuestion,
} from "@/data/diagnosis";
import { ENTERTAINMENT_NOTE } from "@/data/frequency";
import DiagnosisLineBanner from "@/components/DiagnosisLineBanner";
import MoonOracleCard from "@/components/MoonOracleCard";

/* ===================== 共通パーツ ===================== */

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="mb-8 flex items-center gap-3">
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-lavender-200">
        <div
          className="h-full rounded-full bg-gradient-to-r from-lavender-400 to-aqua-300 transition-all duration-300 ease-out"
          style={{ width: `${(current / total) * 100}%` }}
        />
      </div>
      <span className="whitespace-nowrap text-xs text-plum-900/50">
        {current} / {total}
      </span>
    </div>
  );
}

function SerenaMessage({ text }: { text: string }) {
  return (
    <div className="glass-card mt-6 flex gap-4 rounded-2xl p-5 text-left">
      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-white/80">
        <Image
          src="/images/serena/icon.png"
          alt="Serena"
          fill
          className="object-cover"
          sizes="56px"
        />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
          Serena より
        </p>
        <p className="mt-1 text-sm leading-relaxed text-plum-900/80">{text}</p>
      </div>
    </div>
  );
}

function FreqCard({ freqKey }: { freqKey: string }) {
  const f = FREQ_BY_KEY[freqKey];
  if (!f) return null;
  return (
    <div className="mt-4 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-aqua-200/40 p-4 text-left">
      <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
        おすすめの周波数
      </p>
      <p className="mt-1 font-display text-lg text-plum-900">{f.label}</p>
      <p className="mt-1 text-xs text-plum-900/50">
        Aura Garden のヒーリング音楽と合わせて聴いてみてくださいね。
      </p>
    </div>
  );
}

function YoutubeLink() {
  return (
    <a
      href={YOUTUBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-lavender-300 px-6 py-3 text-sm font-medium tracking-wide text-plum-900 transition-colors hover:bg-white/60"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current text-lavender-deep">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.5v-7l6.1 3.5-6.1 3.5Z" />
      </svg>
      対応するヒーリング音楽をYouTubeで聴く
    </a>
  );
}

function ReadingCTA() {
  return (
    <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-to-br from-lavender-deep via-[#8a78b8] to-aqua-300 p-5 text-center text-white">
      <Starfield count={16} />
      <div className="relative">
        <p className="font-display text-lg leading-relaxed">
          もっと深く、あなただけの鑑定書を
        </p>
        <p className="mt-2 text-xs leading-relaxed text-white/85">
          Serena があなたの結果をもとに、詳しいオーラ・チャクラ鑑定書をお届けします。
        </p>
        <Link
          href={READING_PRODUCT_URL}
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-sm font-medium tracking-wide text-lavender-deep shadow-lg transition-transform hover:scale-[1.03]"
        >
          詳しい鑑定書を見る
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

function ShareSaveRow({
  shareText,
  saveKey,
  savePayload,
}: {
  shareText: string;
  saveKey: string;
  savePayload: Record<string, unknown>;
}) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSave = () => {
    try {
      const list = JSON.parse(
        window.localStorage.getItem(`auragarden_${saveKey}`) || "[]"
      );
      list.unshift({ ...savePayload, savedAt: new Date().toLocaleString("ja-JP") });
      window.localStorage.setItem(
        `auragarden_${saveKey}`,
        JSON.stringify(list.slice(0, 20))
      );
    } catch {
      /* localStorage unavailable: ignore */
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 2200);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ text: shareText });
        return;
      } catch {
        /* user cancelled or unsupported: fall through to copy */
      }
    }
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      /* clipboard unavailable: ignore */
    }
  };

  return (
    <div className="mt-4 flex gap-3">
      <button
        onClick={handleShare}
        className="flex-1 rounded-full bg-lavender-deep px-4 py-3 text-sm font-medium text-white shadow-md transition-transform hover:scale-[1.02]"
      >
        {copied ? "コピーしました ✓" : "結果をシェア"}
      </button>
      <button
        onClick={handleSave}
        className="flex-1 rounded-full border border-lavender-300 px-4 py-3 text-sm font-medium text-plum-900 transition-colors hover:bg-white/60"
      >
        {saved ? "保存しました ✓" : "結果を保存"}
      </button>
    </div>
  );
}

function ResultOrb({ color, glow, label }: { color: string; glow: string; label: string }) {
  return (
    <div
      className="drift mx-auto flex h-36 w-36 items-center justify-center rounded-full"
      style={{
        background: `radial-gradient(circle at 35% 30%, ${color}, #2e2a45 85%)`,
        boxShadow: `0 0 60px ${glow}`,
      }}
    >
      <span className="px-3 text-center font-display text-lg font-medium text-white drop-shadow">
        {label}
      </span>
    </div>
  );
}

function StartScreen({
  title,
  desc,
  count,
  onStart,
}: {
  title: string;
  desc: string;
  count: number;
  onStart: () => void;
}) {
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
        <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/80">
          <Image
            src="/images/serena/icon.png"
            alt="Serena"
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>
        <h2 className="mt-5 font-display text-2xl text-plum-900">{title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-plum-900/65">{desc}</p>
        <p className="mt-4 text-xs text-plum-900/40">全{count}問・約2分</p>
        <button
          onClick={onStart}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-lavender-deep px-8 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
        >
          診断をはじめる
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </Reveal>
  );
}

/* ===================== LINE限定詳細 ティザーブロック（共通） ===================== */
// 指示書の「もっと詳しく知りたいですか？」セクション。
// オーラ・チャクラ・波動それぞれの詳細項目ラベルだけ渡せば共通レイアウトで出せるようにする。

function LineGateTeaser({
  points,
}: {
  points: string[]; // 例: ["オーラの強み", "オーラの整え方", "相性の良い色", "相性の良いパワーストーン", "Serenaからのメッセージ"]
}) {
  return (
    <div className="mt-6 rounded-2xl border border-dashed border-lavender-300 bg-white/50 p-5 text-left">
      <p className="text-center text-sm font-medium text-plum-900/80">
        もっと詳しく知りたいですか？
      </p>
      <ul className="mt-3 space-y-1.5">
        {points.map((p) => (
          <li key={p} className="flex items-center gap-2 text-sm text-plum-900/70">
            <span className="text-lavender-deep">✓</span>
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-3 text-center text-xs font-medium tracking-wide text-lavender-deep">
        LINE限定公開
      </p>
    </div>
  );
}

/* ===================== 1. オーラ診断 ===================== */

function AuraDiagnosis() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({
    lavender: 0,
    green: 0,
    blue: 0,
    gold: 0,
    white: 0,
  });
  const total = AURA_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setScores({ lavender: 0, green: 0, blue: 0, gold: 0, white: 0 });
  };

  const answer = (opt: ChoiceQuestion["opts"][number]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(opt.w)) next[k] = (next[k] ?? 0) + v;
      return next;
    });
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="オーラ診断"
        desc="あなたを包む光の色を読み解きます。12の質問に答えて、今のあなたのオーラカラーを見てみましょう。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const winnerKey = pickWinner(scores);
    const r = AURA_RESULTS[winnerKey];
    const teaserPoints = AURA_TEASER_POINTS[winnerKey] ?? [];
    void AURA_LINE_DETAILS; // LINE登録後ページ等で利用予定（将来拡張用に参照を残す）
    // スコア合計をseedにして診断ごとに固定されたカードを選ぶ
    const oracleSeed = Object.values(scores).reduce((a, b) => a + b, 0);
    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたのオーラカラーは
          </p>
          <div className="mt-5">
            <ResultOrb color={r.color} glow={r.glow} label={r.key} />
          </div>
          <h2 className="mt-5 font-display text-2xl" style={{ color: r.color }}>
            🌙 {r.name}でした
          </h2>

          {/* 特徴（ティザー：3つのみ表示） */}
          <ul className="mt-5 space-y-1.5 text-left">
            {teaserPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-plum-900/75">
                <span className="text-lavender-deep">・</span>
                {p}
              </li>
            ))}
          </ul>

          {/* LINE限定詳細ゲート */}
          <LineGateTeaser
            points={[
              "オーラの強み",
              "オーラの整え方",
              "相性の良い色",
              "相性の良いパワーストーン",
              "Serenaからのメッセージ",
            ]}
          />

          <SerenaMessage text={SERENA_MESSAGES.aura[winnerKey]} />
          <FreqCard freqKey={winnerKey} />
          {/* ★ Moon Oracle カード */}
          <MoonOracleCard seed={oracleSeed} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden オーラ診断】私のオーラカラーは「${r.name}」でした✨ #AuraGarden #オーラ診断`}
            saveKey="aura"
            savePayload={{ type: "オーラ診断", result: r.name }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = AURA_QUESTIONS[step];
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {q.opts.map((o, i) => (
            <button
              key={i}
              onClick={() => answer(o)}
              className="rounded-2xl border border-lavender-200 bg-white/70 px-5 py-3.5 text-left text-sm leading-relaxed text-plum-900 transition-colors hover:border-lavender-400 hover:bg-white"
            >
              {o.t}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ===================== 2. チャクラ診断 ===================== */

function ChakraDiagnosis() {
  const [step, setStep] = useState(-1);
  const [answers, setAnswers] = useState<number[]>([]);
  const total = CHAKRA_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setAnswers([]);
  };

  const answer = (val: number) => {
    setAnswers((prev) => [...prev, val]);
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="チャクラ診断"
        desc="7つのエネルギーセンターの状態をチェックします。14の質問に、今の感覚で答えてみてください。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const chakraScores: Record<string, number[]> = {};
    CHAKRAS.forEach((c) => (chakraScores[c.id] = []));
    CHAKRA_QUESTIONS.forEach((q, i) => {
      const raw = answers[i] ?? 1;
      const val = q.reverse ? 2 - raw : raw;
      chakraScores[q.chakra].push(val);
    });

    const results = CHAKRAS.map((c) => {
      const arr = chakraScores[c.id];
      const sum = arr.reduce((a, b) => a + b, 0);
      const pct = Math.round((sum / (arr.length * 2)) * 100);
      return { ...c, pct };
    });

    const overall = Math.round(
      results.reduce((a, c) => a + c.pct, 0) / results.length
    );
    const lowest = results.reduce(
      (min, c) => (c.pct < min.pct ? c : min),
      results[0]
    );
    const msgTone = overall >= 70 ? "high" : overall >= 45 ? "mid" : "low";
    const freqKey = CHAKRA_FREQ_MAP[lowest.id];
    void CHAKRA_LINE_DETAILS; // 将来のLINE登録後ページ等で利用予定

    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたの7チャクラ診断結果
          </p>

          {/* 最も優勢/ケアが必要なチャクラのみハイライト表示（指示書の表示例に合わせる） */}
          <div className="mt-6 text-left">
            <p className="font-display text-xl" style={{ color: lowest.color }}>
              {lowest.icon} {lowest.name}
            </p>
            <p className="mt-1 text-xs text-plum-900/45">{lowest.theme}</p>
          </div>

          {/* 全チャクラのバランスはここまで表示（ティザー） */}
          <div className="mt-4 flex flex-col gap-3 text-left">
            {results.map((c) => (
              <div key={c.id} className="rounded-2xl bg-white/60 p-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-plum-900">{c.name}</span>
                  <span className="text-plum-900/50">{c.pct}%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-lavender-200">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{ width: `${c.pct}%`, background: c.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-lavender-200 bg-gradient-to-br from-moon-100 to-aqua-200/40 p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
              総合バランス
            </p>
            <p className="mt-1 font-display text-4xl text-plum-900">{overall}%</p>
            <p className="mt-2 text-sm leading-relaxed text-plum-900/70">
              今、最もケアが必要なのは「{lowest.name}」（{lowest.theme}）です。
            </p>
          </div>

          {/* LINE限定詳細ゲート */}
          <LineGateTeaser
            points={[
              "チャクラ詳細解説",
              "バランス調整方法",
              "おすすめヒーリング",
              "Serenaからのメッセージ",
            ]}
          />

          <SerenaMessage text={SERENA_MESSAGES.chakra[msgTone]} />
          <FreqCard freqKey={freqKey} />
          {/* ★ Moon Oracle カード */}
          <MoonOracleCard seed={overall} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden チャクラ診断】総合バランス${overall}%でした✨ いま大切にしたいのは「${lowest.name}」 #AuraGarden #チャクラ診断`}
            saveKey="chakra"
            savePayload={{
              type: "チャクラ診断",
              overall,
              lowest: lowest.name,
              results: results.map((r) => ({ name: r.name, pct: r.pct })),
            }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = CHAKRA_QUESTIONS[step];
  const chakra = CHAKRAS.find((c) => c.id === q.chakra)!;
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p
          className="mx-auto mb-3 inline-block rounded-full border px-4 py-1 text-center text-xs font-medium"
          style={{ color: chakra.color, borderColor: chakra.color }}
        >
          {chakra.name}
        </p>
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {CHAKRA_OPTS.map((o, i) => (
            <button
              key={i}
              onClick={() => answer(o.v)}
              className="rounded-2xl border border-lavender-200 bg-white/70 px-5 py-3.5 text-left text-sm leading-relaxed text-plum-900 transition-colors hover:border-lavender-400 hover:bg-white"
            >
              {o.t}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ===================== 3. 波動タイプ診断 ===================== */

function WaveTypeDiagnosis() {
  const [step, setStep] = useState(-1);
  const [scores, setScores] = useState<Record<string, number>>({
    moon: 0,
    passion: 0,
    guardian: 0,
    seeker: 0,
    master: 0,
  });
  const total = WAVE_QUESTIONS.length;

  const reset = () => {
    setStep(-1);
    setScores({ moon: 0, passion: 0, guardian: 0, seeker: 0, master: 0 });
  };

  const answer = (opt: ChoiceQuestion["opts"][number]) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [k, v] of Object.entries(opt.w)) next[k] = (next[k] ?? 0) + v;
      return next;
    });
    setStep((s) => s + 1);
  };

  if (step === -1) {
    return (
      <StartScreen
        title="波動タイプ診断"
        desc="あなたの心が持つ波動のタイプを診断します。12の質問から、今のあなたに近いタイプを見つけます。"
        count={total}
        onStart={() => setStep(0)}
      />
    );
  }

  if (step >= total) {
    const winnerKey = pickWinner(scores);
    const r = WAVE_RESULTS[winnerKey];
    const teaserPoints = WAVE_TEASER_POINTS[winnerKey] ?? [];
    void WAVE_LINE_DETAILS; // 将来のLINE登録後ページ等で利用予定
    return (
      <Reveal>
        <div className="glass-card mx-auto max-w-md rounded-3xl p-8 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-lavender-deep">
            あなたの波動タイプは
          </p>
          <div className="mt-5">
            <ResultOrb color={r.color} glow={r.glow} label={r.name} />
          </div>
          <h2 className="mt-5 font-display text-2xl" style={{ color: r.color }}>
            {r.name}
          </h2>

          {/* 特徴（ティザー：3つのみ表示） */}
          <ul className="mt-5 space-y-1.5 text-left">
            {teaserPoints.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-plum-900/75">
                <span className="text-lavender-deep">・</span>
                {p}
              </li>
            ))}
          </ul>

          {/* LINE限定詳細ゲート */}
          <LineGateTeaser
            points={[
              "波動タイプの詳細解説",
              "おすすめの過ごし方",
              "相性の良い色・パワーストーン",
              "Serenaからのメッセージ",
            ]}
          />

          <SerenaMessage text={SERENA_MESSAGES.wave[winnerKey]} />
          <FreqCard freqKey={winnerKey} />
          {/* ★ Moon Oracle カード */}
          <MoonOracleCard seed={Object.values(scores).reduce((a, b) => a + b, 0)} />
          <YoutubeLink />
          <ReadingCTA />
          <ShareSaveRow
            shareText={`【Aura Garden 波動タイプ診断】私の波動タイプは「${r.name}」でした✨ #AuraGarden #波動タイプ診断`}
            saveKey="wave"
            savePayload={{ type: "波動タイプ診断", result: r.name }}
          />
          <DiagnosisLineBanner />
          <button
            onClick={reset}
            className="mt-5 text-sm text-plum-900/50 underline-offset-4 hover:underline"
          >
            もう一度診断する
          </button>
        </div>
      </Reveal>
    );
  }

  const q = WAVE_QUESTIONS[step];
  return (
    <Reveal>
      <div className="glass-card mx-auto max-w-md rounded-3xl p-8">
        <ProgressBar current={step + 1} total={total} />
        <p className="min-h-[3.5rem] text-center font-display text-lg leading-relaxed text-plum-900">
          {q.q}
        </p>
        <div className="mt-6 flex flex-col gap-3">
          {q.opts.map((o, i) => (
            <button
              key={i}
              onClick={() => answer(o)}
              className="rounded-2xl border border-lavender-200 bg-white/70 px-5 py-3.5 text-left text-sm leading-relaxed text-plum-900 transition-colors hover:border-lavender-400 hover:bg-white"
            >
              {o.t}
            </button>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

/* ===================== ページ本体 ===================== */

const TABS = [
  { id: "aura", label: "オーラ診断" },
  { id: "chakra", label: "チャクラ診断" },
  { id: "wave", label: "波動タイプ診断" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function DiagnosisPage() {
  const [tab, setTab] = useState<TabId>("aura");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#e9e3f7] via-[#f3eefa] to-[#faf8fd] px-5 pb-14 pt-16 text-center sm:px-8 sm:pb-20 sm:pt-24">
        <Starfield count={40} />
        <div className="relative mx-auto max-w-2xl">
          <p className="moon-divider justify-center text-xs uppercase tracking-[0.35em] text-lavender-deep">
            Serena&apos;s Diagnosis
          </p>
          <h1 className="mt-6 font-display text-3xl leading-tight tracking-wide text-plum-900 sm:text-5xl">
            セレナの診断ルーム
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-plum-900/65 sm:text-base">
            オーラ・チャクラ・波動タイプ——3つの無料診断で、今のあなたの状態をそっと映し出します。
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-2xl">
          <Reveal>
            <div className="glass-card mb-10 flex flex-col items-center gap-4 rounded-3xl p-6 text-center sm:flex-row sm:text-left">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-lavender-deep">
                  Serena&apos;s Frequency Garden
                </p>
                <h3 className="mt-2 font-display text-xl text-plum-900">
                  月光ヒーリングチューナー
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-plum-900/65">
                  今の気分に合わせて周波数を選び、Serenaの月光ガーデンで心を整えるミニ体験です。
                </p>
              </div>
              <Link
                href="/frequency"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-lavender-deep px-6 py-3 text-sm font-medium tracking-wide text-white shadow-lg shadow-lavender-deep/20 transition-transform hover:scale-[1.03]"
              >
                チューナーを開く
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-all ${
                  tab === t.id
                    ? "bg-lavender-deep text-white shadow-lg shadow-lavender-deep/20"
                    : "border border-lavender-300 text-plum-900 hover:bg-white/60"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {tab === "aura" && <AuraDiagnosis key="aura" />}
          {tab === "chakra" && <ChakraDiagnosis key="chakra" />}
          {tab === "wave" && <WaveTypeDiagnosis key="wave" />}

          <p className="mx-auto mt-10 max-w-md text-center text-xs leading-relaxed text-plum-900/40">
            {ENTERTAINMENT_NOTE}
          </p>
        </div>
      </section>
    </div>
  );
}
// ============================================================
// ↓↓↓ この内容を src/data/diagnosis.ts の「一番下」に
//     そのまま追加（コピペ）してください ↓↓↓
//     （既存のコードは一切変更不要。末尾に追記するだけです）
// ============================================================

/* ============ LINE限定詳細データ（導線改善用） ============ */
// HPでは teaser（3つの特徴）までしか見せず、詳細はLINE登録後に解放する設計です。

export type AuraLineDetail = {
  strength: string;       // オーラの強み
  howToBalance: string;   // オーラの整え方
  goodColor: string;      // 相性の良い色
  goodStone: string;      // 相性の良いパワーストーン
  serenaMessage: string;  // Serenaからのメッセージ（詳細版）
};

export const AURA_TEASER_POINTS: Record<string, string[]> = {
  lavender: ["共感力が高い", "癒しの力を持つ", "感情を受け取りやすい"],
  green: ["思いやりにあふれている", "自然と調和する力がある", "人を支える存在"],
  blue: ["誠実さが伝わりやすい", "言葉で表現する力がある", "信頼を築きやすい"],
  gold: ["前向きなエネルギーがある", "行動力がある", "周りを明るくする"],
  white: ["変化を受け入れる力がある", "純粋な感性を持つ", "新しい流れを引き寄せる"],
};

export const AURA_LINE_DETAILS: Record<string, AuraLineDetail> = {
  lavender: {
    strength: "繊細な感受性で、人の気持ちにそっと寄り添える力があります。芸術的な感性も豊かです。",
    howToBalance: "一人の静かな時間を意識的につくること。月光浴や瞑想が特に合っています。",
    goodColor: "紫・ラベンダー・銀",
    goodStone: "アメジスト・ムーンストーン",
    serenaMessage: "あなたの感性は、誰かを癒すための大切な力です。無理に強くならなくて大丈夫。そのままのあなたで十分なんですよ。",
  },
  green: {
    strength: "人を支える力と、自然と調和するエネルギーを持っています。場の空気をやわらげる存在です。",
    howToBalance: "自然の中で過ごす時間を増やすこと。植物や緑に触れることで波動が整いやすくなります。",
    goodColor: "グリーン・ピンク",
    goodStone: "ローズクォーツ・グリーンアベンチュリン",
    serenaMessage: "あなたが与えているやさしさは、ちゃんと届いています。たまには自分自身も、その輪の中に入れてあげてくださいね。",
  },
  blue: {
    strength: "誠実な言葉で人とつながる力。コミュニケーションを通じて信頼を築くのが得意です。",
    howToBalance: "喉のチャクラを意識し、声に出して気持ちを表現する時間をつくること。",
    goodColor: "ブルー・ターコイズ",
    goodStone: "ラピスラズリ・アクアマリン",
    serenaMessage: "あなたの言葉には、思っている以上の力があります。素直な気持ちを、これからも大切にしてくださいね。",
  },
  gold: {
    strength: "前へ進む推進力と、人を惹きつけるあたたかさを兼ね備えています。",
    howToBalance: "小さな目標を立てて、達成する喜びを積み重ねること。日光を浴びる時間も効果的です。",
    goodColor: "ゴールド・オレンジ",
    goodStone: "シトリン・タイガーアイ",
    serenaMessage: "あなたの一歩は、まわりにも温かい光を広げています。自信を持って、その道を進んでくださいね。",
  },
  white: {
    strength: "純粋な感性と、変化を受け入れる柔軟さを持っています。新しいステージへ導く力があります。",
    howToBalance: "手放したいものをそっとリストにしてみること。浄化のための白い光をイメージする瞑想もおすすめです。",
    goodColor: "ホワイト・シルバー",
    goodStone: "水晶・セレナイト",
    serenaMessage: "今のあなたは、新しい景色の入り口に立っています。焦らず、その変化をそっと受け止めてくださいね。",
  },
};

export type ChakraLineDetail = {
  detail: string;
  balanceMethod: string;
  recommendedHealing: string;
  serenaMessage: string;
};

// 最もケアが必要なチャクラ（lowest）に対するLINE限定詳細
export const CHAKRA_LINE_DETAILS: Record<string, ChakraLineDetail> = {
  root: {
    detail: "生活の基盤や安心感に関わるチャクラです。バランスが乱れると、漠然とした不安を感じやすくなります。",
    balanceMethod: "裸足で土や床に触れる、規則正しい生活リズムを意識するなど、地に足をつける行動が効果的です。",
    recommendedHealing: "396Hzの解放の周波数",
    serenaMessage: "まずは安心できる土台を、少しずつ整えていきましょう。あなたのペースで大丈夫ですよ。",
  },
  sacral: {
    detail: "感情や創造性に関わるチャクラです。乱れると感情を抑え込みやすくなります。",
    balanceMethod: "好きなことを純粋に楽しむ時間、創作活動や水に触れることが整えに役立ちます。",
    recommendedHealing: "528Hzの愛の周波数",
    serenaMessage: "感じたことを、もっと自由に表現してもいいんですよ。あなたの感情はとても大切なものです。",
  },
  solar: {
    detail: "自信や意志力に関わるチャクラです。乱れると自己肯定感が下がりやすくなります。",
    balanceMethod: "小さな成功体験を積み重ねること、姿勢を正して深く呼吸することが効果的です。",
    recommendedHealing: "528Hzの愛の周波数",
    serenaMessage: "あなたにはちゃんと『できる力』があります。一歩ずつ、自信を取り戻していきましょう。",
  },
  heart: {
    detail: "愛とつながりに関わるチャクラです。乱れると人を信じることに不安を感じやすくなります。",
    balanceMethod: "感謝の気持ちを言葉にすること、自分自身にもやさしさを向けることが大切です。",
    recommendedHealing: "639Hzの調和の周波数",
    serenaMessage: "あなたが誰かに向けているやさしさを、少しだけ自分にも向けてあげてくださいね。",
  },
  throat: {
    detail: "表現とコミュニケーションに関わるチャクラです。乱れると本音を飲み込みやすくなります。",
    balanceMethod: "声に出して気持ちを伝える練習、歌うことや日記をつけることが効果的です。",
    recommendedHealing: "741Hzの浄化の周波数",
    serenaMessage: "あなたの言葉を、もっと外に出してもいいんですよ。きっと誰かに届いています。",
  },
  third_eye: {
    detail: "直感と洞察力に関わるチャクラです。乱れると考えすぎて疲れやすくなります。",
    balanceMethod: "瞑想や静かな時間を持つこと、直感を信じて小さな選択をしてみることが効果的です。",
    recommendedHealing: "852Hzの直感の周波数",
    serenaMessage: "頭で考えすぎず、心の声にそっと耳を傾けてみてくださいね。",
  },
  crown: {
    detail: "精神性と宇宙とのつながりに関わるチャクラです。乱れると目的を見失いやすくなります。",
    balanceMethod: "静かに自分自身と向き合う時間、自然や星空とつながる瞑想が効果的です。",
    recommendedHealing: "963Hzの宇宙の周波数",
    serenaMessage: "答えはすぐに見つからなくても大丈夫。あなたの歩みには、ちゃんと意味がありますよ。",
  },
};

export type WaveLineDetail = {
  strength: string;
  howToBalance: string;
  goodColor: string;
  goodStone: string;
  serenaMessage: string;
};

export const WAVE_TEASER_POINTS: Record<string, string[]> = {
  moon: ["静かで穏やかな波動", "人に寄り添う共感力", "控えめだけど芯がある"],
  passion: ["内側から湧き上がる熱量", "発想力にあふれている", "行動に移すスピードが早い"],
  guardian: ["安定感とやさしさ", "大切なものを守る力", "そばにいるだけで安心される"],
  seeker: ["知的好奇心が強い", "新しい世界に惹かれる", "学び続ける探求心"],
  master: ["経験を伝える力", "導く存在になりやすい", "精神的な深さがある"],
};

export const WAVE_LINE_DETAILS: Record<string, WaveLineDetail> = {
  moon: {
    strength: "人の心にそっと寄り添う共感力。静かな存在感で、まわりを安心させます。",
    howToBalance: "夜の静かな時間を大切にすること。月光浴や瞑想が特に合っています。",
    goodColor: "シルバー・ラベンダー",
    goodStone: "ムーンストーン・アメジスト",
    serenaMessage: "あなたの静けさは、誰かにとっての安心になっています。焦らず、あなたのペースで進んでくださいね。",
  },
  passion: {
    strength: "心が動いた瞬間に行動できる推進力。創造的な発想で周りを巻き込む力があります。",
    howToBalance: "アイデアをメモする習慣、体を動かしてエネルギーを発散することが効果的です。",
    goodColor: "オレンジ・レッド",
    goodStone: "カーネリアン・サンストーン",
    serenaMessage: "あなたの『やってみたい』という気持ちを、これからも大切にしてくださいね。",
  },
  guardian: {
    strength: "安定感とやさしさで、大切な人やものをそっと支える力があります。",
    howToBalance: "自分自身をケアする時間も意識的につくること。頑張りすぎないことが大切です。",
    goodColor: "グリーン・ブラウン",
    goodStone: "グリーンアベンチュリン・スモーキークォーツ",
    serenaMessage: "あなたが支えているものは、あなたがいることでちゃんと守られています。たまには自分も労わってくださいね。",
  },
  seeker: {
    strength: "知的好奇心と洞察力。答えのない問いに向き合い続ける探求心があります。",
    howToBalance: "新しい本や情報に触れる時間、静かに思考を整理する時間をつくること。",
    goodColor: "パープル・ブルー",
    goodStone: "ラピスラズリ・フローライト",
    serenaMessage: "答えがまだ見えなくても、その探求の時間こそがあなたを成長させていますよ。",
  },
  master: {
    strength: "経験を分かち合い、人を導く力。精神的な深さで信頼を集めます。",
    howToBalance: "経験を言葉や形にして誰かに伝えること。教えることで自分も学びが深まります。",
    goodColor: "ゴールド・パープル",
    goodStone: "タイガーアイ・スギライト",
    serenaMessage: "あなたが歩んできた道は、すでに誰かの道しるべになっています。少しずつ分けてあげてくださいね。",
  },
};

// ============================================================
// ↑↑↑ ここまでを diagnosis.ts の末尾に追加してください ↑↑↑
// ============================================================
