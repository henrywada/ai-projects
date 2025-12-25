// エラーの原因だった import 行を削除しました

export const SITE = {
  website: "https://blog.hr-dx.jp/",
  author: "Henry Wada",
  profile: "https://hr-dx.jp/",    // ★追加：プロフィールURL（必須項目でした）
  desc: "中小企業の「人事」を、悩みの種から「最強の武器」へ。",
  title: "HR-DX.jp",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  postPerIndex: 4,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: true,
  showBackButton: true, 
  timezone: "Asia/Tokyo",
  lang: "ja",                      // ★追加：言語設定（必須）
  dir: "ltr",                      // ★追加：文字の方向（必須：左から右）
  dynamicOgImage: false,           // ★追加：動的画像生成（エラー回避のためfalse）
  editPost: {
    url: "https://github.com/henrywada/site-01/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
    enabled: false,                // ★修正：「enable」ではなく「enabled」が正解でした！
  },
};

export const LOCALE = {
  lang: "ja", // 日本語設定
  langTag: ["ja-JP"],
} as const;

export const LOGO_IMAGE = {
  enable: true,   // ← false を true に変える
  svg: false,     // ← true を false に変える（今回はPNG画像なので）
  width: 150,     // ← ロゴの横幅（お好みで調整してください。150〜200pxがおすすめ）
  height: 50,     // ← ロゴの高さ（widthに合わせて自動で縮尺が合うので、適当でOKです）
};

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/henrywada",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
  {
    name: "Mail",
    href: "mailto:contact@hr-dx.jp",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];