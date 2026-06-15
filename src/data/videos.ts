export type VideoItem = {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  youtubeId: string;
};

// youtubeId は仮のIDです。実際の動画IDに置き換えてください。
export const videos: VideoItem[] = [
  {
    id: "v01",
    title: "深い眠りへの月光ピアノ",
    category: "睡眠",
    duration: "3:00:00",
    description: "ゆっくりとしたピアノの旋律が、月明かりのように心を静め、深い眠りへと誘います。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v02",
    title: "瞑想のためのシンギングボウル",
    category: "瞑想",
    duration: "1:00:00",
    description: "シンギングボウルの倍音が体の奥に響き、瞑想の時間を深くサポートします。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v03",
    title: "雨音とラベンダーの夜",
    category: "睡眠",
    duration: "2:30:00",
    description: "やさしい雨音と弦楽器の音色が重なり、安心感に包まれる夜を演出します。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v04",
    title: "朝のはじまり・光の波動",
    category: "リラックス",
    duration: "45:00",
    description: "やわらかな光のような旋律で、一日のはじまりを穏やかに整えます。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v05",
    title: "Serenaと過ごす癒しの庭",
    category: "癒し",
    duration: "1:30:00",
    description: "Aura Gardenの世界観をイメージした、蓮と星空のサウンドスケープ。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v06",
    title: "ソルフェジオ周波数 528Hz",
    category: "瞑想",
    duration: "1:00:00",
    description: "心と身体のバランスを整えるとされる周波数を用いたヒーリングサウンド。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v07",
    title: "月のしずく・水音セラピー",
    category: "睡眠",
    duration: "2:00:00",
    description: "静かな水音と幻想的な音色で、思考を緩めて眠りに近づけます。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v08",
    title: "午後のティータイム・癒しBGM",
    category: "リラックス",
    duration: "1:00:00",
    description: "穏やかな旋律で、休憩時間をやさしい時間に変えるBGM。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v09",
    title: "星空のアファメーションタイム",
    category: "癒し",
    duration: "40:00",
    description: "アファメーションを聴きながら、静かに自分自身と向き合う時間。",
    youtubeId: "dQw4w9WgXcQ",
  },
  {
    id: "v10",
    title: "深呼吸のための瞑想ガイド",
    category: "瞑想",
    duration: "20:00",
    description: "呼吸に意識を向けながら、心を落ち着けるためのガイド付き瞑想音楽。",
    youtubeId: "dQw4w9WgXcQ",
  },
];
