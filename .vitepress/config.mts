import { defineConfig } from "vitepress";

const GITHUB_URL: string = "https://github.com/tplorg/vitepress";
const BASE_URL: string = process.env.BASE_URL || "/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: BASE_URL,
  lang: "en-US",
  title: "Vitepress",
  description: "A VitePress Template",
  head: [["link", { rel: "icon", href: BASE_URL + "favicon.svg" }]],

  rewrites: {
    "en-US/:rest*": ":rest*",
  },

  lastUpdated: true,
  cleanUrls: true,

  locales: {
    root: { label: "English" },
    "zh-CN": { label: "简体中文" },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/favicon.svg",

    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    outline: {
      level: "deep",
    },
    search: { provider: "local" },
    socialLinks: [{ icon: "github", link: GITHUB_URL }],
  },

  markdown: {
    image: {
      // false by default; Set to true to enable lazy loading for all images.
      lazyLoad: true,
    },
  },
});
