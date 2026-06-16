// src/data/sns.ts
// SNSアカウント定数。URLが変わったらここだけ修正してください。

export const SNS = {
  line: {
    url: "https://lin.ee/XHDFrA8",
    label: "LINE登録",
    id: "@351weinj",
  },
  instagram: {
    url: "https://www.instagram.com/auragarden_jp/",
    label: "Instagram",
    handle: "@auragarden_jp",
  },
  youtube: {
    url: "https://www.youtube.com/@AuraGardenJP",
    label: "YouTube",
    handle: "@AuraGardenJP",
  },
  // 将来: ココナラへの個別鑑定リンク
  reading: {
    url: "/reading",
    isExternal: false,
    label: "Serenaの個別鑑定を受ける",
  },
} as const;
