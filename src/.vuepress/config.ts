import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
    // 基础路径
    base: "/",
    lang: 'zh-CN',
    // 默认站点语言为英文
    // lang: 'en-US',

    // favicon 图标
    head: [['link', { rel: 'icon', href: 'favicon.ico' }]],
    locales: {
        "/": {
            lang: "zh-CN",
            title: "我的博客",
            description: "vuepress-theme-hope 的博客演示",
        },
        "/en/": {
            lang: "en-US",
            title: "My blog",
            description: "A blog demo for vuepress-theme-hope",
        },

    },
    // 主题
    theme,

    // Enable it with pwa
    // shouldPrefetch: false,
});
