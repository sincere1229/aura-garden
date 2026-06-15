// src/data/frequency.ts
// 月光ヒーリングチューナー（Aura Garden版）の周波数データ

export type FrequencyItem = {
  hz: number;
  name: string;
  desc: string; // Serenaの口調・医療効果断定なし
  color: string;
  youtubeUrl: string | null; // 未設定の場合はnull
};

export const FREQUENCIES: FrequencyItem[] = [
  {
    hz: 396,
    name: "解放",
    desc: "重たい気持ちを手放したいときのリラックスタイムにおすすめです。",
    color: "#e8a3ae",
    youtubeUrl: null,
  },
  {
    hz: 417,
    name: "変化",
    desc: "気持ちを切り替えたいとき、新しい一歩を後押ししたいときにおすすめです。",
    color: "#f0b48a",
    youtubeUrl: null,
  },
  {
    hz: 528,
    name: "愛",
    desc: "心をやさしく整えたいときにおすすめの周波数です。",
    color: "#e8c468",
    youtubeUrl: null,
  },
  {
    hz: 639,
    name: "調和",
    desc: "人とのつながりを大切にしたいとき、気持ちを和ませたいときにおすすめです。",
    color: "#8fcfb0",
    youtubeUrl: null,
  },
  {
    hz: 741,
    name: "浄化",
    desc: "頭の中を整理したいとき、すっきりした気持ちで過ごしたいときにおすすめです。",
    color: "#8fc1e8",
    youtubeUrl: null,
  },
  {
    hz: 852,
    name: "直感",
    desc: "静かに自分の内側と向き合いたいときにおすすめです。",
    color: "#b9a6e0",
    youtubeUrl: null,
  },
  {
    hz: 963,
    name: "宇宙",
    desc: "ゆったりと深呼吸しながら、心を解き放つ時間におすすめです。",
    color: "#cbb6e8",
    youtubeUrl: null,
  },
];

export const ENTERTAINMENT_NOTE =
  "※Aura Gardenの診断・周波数コンテンツは、リラックスや自己理解を目的としたエンターテインメントです。医療・心理療法・診断・治療を目的としたものではありません。";
