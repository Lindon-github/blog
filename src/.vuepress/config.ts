import {defineUserConfig} from "vuepress";

import theme from "./theme.js";
import {getDirname, path} from 'vuepress/utils';
import {slimsearchPlugin} from "@vuepress/plugin-slimsearch";

const __dirname = getDirname(import.meta.url);
const SrcPath = path.resolve(__dirname, '../');
export default defineUserConfig({
    alias: {
        '@components': path.resolve(__dirname, 'components'),
        '@src': SrcPath,
    },
    // 基础路径
    base: "/blog/",
    lang: 'zh-CN',
    // 默认站点语言为英文
    // lang: 'en-US',

    // favicon 图标
    head: [['link', {rel: 'icon', href: 'favicon.ico'}]],
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
    // 插件
    plugins: [
        slimsearchPlugin({
            // 已启用全文搜索
            indexContent: true,
        }),
    ],
    // Enable it with pwa
    shouldPrefetch: false,
});
