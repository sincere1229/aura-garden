// src/data/columns.ts
// Aura Garden コラム記事データ
// です・ます調、断定しすぎない表現で統一。医療的効果効能は記載しない。

export type ColumnBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "chakraTable" };

export type ColumnArticle = {
  slug: string;
  title: string; // ページタイトル・一覧カード見出し
  category: "frequency" | "guide";
  hz?: number; // 単体周波数記事のみ
  color: string;
  glow: string;
  excerpt: string; // 一覧カードの説明文
  body: ColumnBlock[];
  serenaMessage: string;
  relatedSlugs: string[]; // 関連記事
};

/* ============ 7チャクラ × 周波数 対応表（共通データ） ============ */
export const CHAKRA_FREQUENCY_TABLE = [
  {
    hz: 396,
    name: "第1チャクラ（ルート）",
    theme: "安心・安全・グラウンディング",
    color: "#e8a3ae",
  },
  {
    hz: 417,
    name: "第2チャクラ（セイクラル）",
    theme: "感情・創造性・喜び",
    color: "#f0b48a",
  },
  {
    hz: 528,
    name: "第3チャクラ（ソーラープレクサス）",
    theme: "自信・意志力・行動力",
    color: "#e8c468",
  },
  {
    hz: 639,
    name: "第4チャクラ（ハート）",
    theme: "愛・つながり・調和",
    color: "#8fcfb0",
  },
  {
    hz: 741,
    name: "第5チャクラ（スロート）",
    theme: "表現・コミュニケーション",
    color: "#8fc1e8",
  },
  {
    hz: 852,
    name: "第6チャクラ（サードアイ）",
    theme: "直感・洞察力",
    color: "#b9a6e0",
  },
  {
    hz: 963,
    name: "第7チャクラ（クラウン）",
    theme: "精神性・宇宙とのつながり",
    color: "#cbb6e8",
  },
] as const;

/* ============ コラム記事一覧 ============ */
export const COLUMNS: ColumnArticle[] = [
  {
    slug: "528hz",
    title: "528Hzとは？「愛の周波数」と呼ばれる音の意味",
    category: "frequency",
    hz: 528,
    color: "#e8c468",
    glow: "rgba(232,196,104,.5)",
    excerpt:
      "「愛の周波数」「奇跡の周波数」とも呼ばれる528Hz。その意味や、どんなときに聴かれているのかをご紹介します。",
    body: [
      {
        type: "p",
        text: "528Hzは、ソルフェジオ周波数と呼ばれる一連の音の中でも、特によく知られている周波数のひとつです。「愛の周波数」「奇跡の周波数」といった呼び方をされることもあり、リラックスタイムや瞑想の音楽として親しまれています。",
      },
      {
        type: "h2",
        text: "528Hzが持つとされる意味",
      },
      {
        type: "p",
        text: "ソルフェジオ周波数の考え方では、528Hzは「変容」や「愛」をテーマにした音とされています。心をやさしく整えたいとき、自分自身を労わる時間を持ちたいときに選ばれることが多い周波数です。",
      },
      {
        type: "h2",
        text: "どんなときに聴かれている？",
      },
      {
        type: "list",
        items: [
          "一日の終わりに、心を落ち着けたいとき",
          "自分を大切にする時間を持ちたいとき",
          "やさしい気持ちで眠りにつきたいとき",
        ],
      },
      {
        type: "p",
        text: "528Hzは第3チャクラ（ソーラープレクサス）との結びつきが語られることもあり、自信や前向きな気持ちと関連づけて紹介されることもあります。チャクラとの関係について詳しくは「チャクラと周波数の関係」もあわせてご覧ください。",
      },
    ],
    serenaMessage:
      "528Hzは、自分にやさしくしたい日にそっと寄り添ってくれる音だと感じています。難しく考えず、ただ流しておくだけでも大丈夫ですよ。",
    relatedSlugs: ["chakra-frequency", "solfeggio-frequencies", "741hz"],
  },
  {
    slug: "741hz",
    title: "741Hzとは？心を浄化するといわれる周波数",
    category: "frequency",
    hz: 741,
    color: "#8fc1e8",
    glow: "rgba(143,193,232,.5)",
    excerpt:
      "「浄化」「表現」をテーマに語られる741Hz。頭の中を整理したいとき、すっきりした気持ちで過ごしたいときの音としてご紹介します。",
    body: [
      {
        type: "p",
        text: "741Hzは、ソルフェジオ周波数のひとつで、「浄化」や「表現」といったテーマで語られることが多い音です。頭の中がごちゃごちゃしているとき、気持ちを整理したいときに選ばれています。",
      },
      {
        type: "h2",
        text: "741Hzが持つとされる意味",
      },
      {
        type: "p",
        text: "古くからの伝承では、741Hzは不要なものを手放し、自分らしい表現を取り戻すための音とされてきました。第5チャクラ（スロート）との結びつきが語られることもあり、コミュニケーションや自己表現とのつながりで紹介されることもあります。",
      },
      {
        type: "h2",
        text: "どんなときに聴かれている？",
      },
      {
        type: "list",
        items: [
          "考えごとが多くて頭が疲れているとき",
          "気持ちをすっきり整理したいとき",
          "自分の気持ちを言葉にしたいとき",
        ],
      },
    ],
    serenaMessage:
      "741Hzは、心の中のもやもやをそっと整理したい日におすすめです。深呼吸をしながら、ゆったり聴いてみてくださいね。",
    relatedSlugs: ["chakra-frequency", "solfeggio-frequencies", "528hz"],
  },
  {
    slug: "396hz",
    title: "396Hzとは？不安や緊張をやさしく手放す周波数",
    category: "frequency",
    hz: 396,
    color: "#e8a3ae",
    glow: "rgba(232,163,174,.5)",
    excerpt:
      "「解放」をテーマに語られる396Hz。重たい気持ちを手放したい夜、不安を感じやすいときの音としてご紹介します。",
    body: [
      {
        type: "p",
        text: "396Hzは、ソルフェジオ周波数の中でもっとも低い音とされ、「解放」をテーマに語られることが多い周波数です。重たい気持ちを手放したいとき、安心感を取り戻したいときに選ばれています。",
      },
      {
        type: "h2",
        text: "396Hzが持つとされる意味",
      },
      {
        type: "p",
        text: "伝承では、396Hzは不安や緊張、罪悪感といった重たい感情をやさしく解き放つための音とされてきました。第1チャクラ（ルート）との結びつきが語られることもあり、安心・安全の感覚とのつながりで紹介されることもあります。",
      },
      {
        type: "h2",
        text: "どんなときに聴かれている？",
      },
      {
        type: "list",
        items: [
          "眠れない夜、気持ちが落ち着かないとき",
          "「もう疲れた」と感じるとき",
          "重たい気持ちをそっと手放したいとき",
        ],
      },
    ],
    serenaMessage:
      "396Hzは、就寝前にゆっくり深呼吸をしながら聴くのがおすすめです。「手放す、手放す」と心の中で繰り返してみてくださいね。",
    relatedSlugs: ["chakra-frequency", "solfeggio-frequencies", "741hz"],
  },
  {
    slug: "solfeggio-frequencies",
    title: "ソルフェジオ周波数一覧｜7つの周波数とその意味",
    category: "guide",
    color: "#b9a6e0",
    glow: "rgba(185,166,224,.5)",
    excerpt:
      "396Hzから963Hzまで、ソルフェジオ周波数と呼ばれる音とそのテーマを一覧でご紹介します。",
    body: [
      {
        type: "p",
        text: "ソルフェジオ周波数とは、古い聖歌の音階に由来するとされる一連の周波数のことです。それぞれの音に「解放」「変化」「愛」といったテーマが結びつけられ、リラックスや瞑想の音楽として親しまれています。",
      },
      {
        type: "h2",
        text: "ソルフェジオ周波数一覧",
      },
      {
        type: "list",
        items: [
          "396Hz｜解放 ― 重たい気持ちを手放したいときに",
          "417Hz｜変化 ― 気持ちを切り替えたいときに",
          "528Hz｜愛 ― 心をやさしく整えたいときに",
          "639Hz｜調和 ― 人とのつながりを大切にしたいときに",
          "741Hz｜浄化 ― 頭の中を整理したいときに",
          "852Hz｜直感 ― 自分の内側と向き合いたいときに",
          "963Hz｜宇宙 ― 深く心を解き放ちたいときに",
        ],
      },
      {
        type: "p",
        text: "それぞれの周波数は、7つのチャクラとも結びつけて語られることがあります。詳しい対応関係は「チャクラと周波数の関係」でご紹介しています。",
      },
      {
        type: "p",
        text: "Aura Gardenの「月光ヒーリングチューナー」では、これらの周波数をその場で実際に聴くことができます。気になる音から、ぜひ試してみてください。",
      },
    ],
    serenaMessage:
      "どれを選べばいいか迷ったときは、今のあなたの気持ちに近いテーマを選んでみてください。正解はひとつではありませんよ。",
    relatedSlugs: ["chakra-frequency", "528hz", "396hz", "741hz"],
  },
  {
    slug: "chakra-frequency",
    title: "チャクラと周波数の関係｜7つのチャクラ対応表",
    category: "guide",
    color: "#8fcfb0",
    glow: "rgba(143,207,176,.5)",
    excerpt:
      "7つのチャクラと、それぞれに結びつけられている周波数の関係を対応表でご紹介します。",
    body: [
      {
        type: "p",
        text: "チャクラとは、身体の中にあるとされる7つのエネルギーセンターのことです。それぞれが異なるテーマを持ち、ソルフェジオ周波数の各音と結びつけて語られることがあります。",
      },
      {
        type: "h2",
        text: "7つのチャクラと対応する周波数",
      },
      { type: "chakraTable" },
      {
        type: "p",
        text: "7つのチャクラはすべてつながっていると言われています。どれかひとつが乱れると、他のチャクラにも影響が出てくることがあるため、まずは今の自分がどのチャクラに近いかを知ることから始めてみるのがおすすめです。",
      },
      {
        type: "p",
        text: "気になるチャクラが見つかったら、対応する周波数を「月光ヒーリングチューナー」で実際に聴いてみてください。",
      },
    ],
    serenaMessage:
      "チャクラも周波数も、「絶対にこうでなければ」というものではありません。心地よいと感じるものを、気軽に取り入れてみてくださいね。",
    relatedSlugs: ["solfeggio-frequencies", "528hz", "741hz", "396hz"],
  },
];

export function getColumnBySlug(slug: string): ColumnArticle | undefined {
  return COLUMNS.find((c) => c.slug === slug);
}

export function getRelatedColumns(article: ColumnArticle): ColumnArticle[] {
  return article.relatedSlugs
    .map((slug) => getColumnBySlug(slug))
    .filter((c): c is ColumnArticle => Boolean(c));
}
