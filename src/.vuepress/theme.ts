import {hopeTheme} from "vuepress-theme-hope";
import {enNavbar, zhNavbar} from "./navbar/index.js";
import {enSidebar, zhSidebar} from "./sidebar/index.js";
import manifest_json from './public/pwa/manifest.json';

const manifestJson: any = manifest_json;
export default hopeTheme({
    // 部署的域名
    hostname: "https://lindon-github.github.io",

    author: {
        name: "Lindon",
        // 作者网站
        url: "https://lindon-github.github.io/blog/",   // 博客地址
    },
    // 图标库
    iconAssets: "fontawesome-with-brands",

    logo: "https://theme-hope-assets.vuejs.press/logo.svg",
    // Repo: 项目仓库
    repo: "Lindon-github/blog",
    // 文档目录
    docsDir: "src",
    /**
     * "switch": 在深色模式，浅色模式和自动之间切换 (默认)
     * "toggle": 在深色模式和浅色模式之间切换
     * "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
     * "enable": 强制深色模式
     * "disable": 禁用深色模式
     */
    darkmode: "toggle",
    // 全屏
    fullscreen: true,
    // 纯净模式
    // pure: true,
    navbarAutoHide: 'always',
    pageInfo: [
        'Author',
        'Category',
        'Date',
        'Original',
        'Tag',
        'ReadingTime',
        'Word',
        'PageView',
        //..
    ],
    // 导航栏布局
    navbarLayout: {
        start: ['Brand'],
        center: [],
        end: ['Search', 'Links', 'Language', 'Outlook'],
    },
    sidebarSorter: ['order', 'readme', 'title', 'filename'],
    blog: {
        medias: {
            Baidu: "https://example.com",
            BiliBili: "https://example.com",
            Bitbucket: "https://example.com",
            Dingding: "https://example.com",
            Discord: "https://example.com",
            Dribbble: "https://example.com",
            Email: "mailto:info@example.com",
            Evernote: "https://example.com",
            Facebook: "https://example.com",
            Flipboard: "https://example.com",
            Gitee: "https://example.com",
            GitHub: "https://example.com",
            Gitlab: "https://example.com",
            Gmail: "mailto:info@example.com",
            Instagram: "https://example.com",
            Lark: "https://example.com",
            Lines: "https://example.com",
            Linkedin: "https://example.com",
            Pinterest: "https://example.com",
            Pocket: "https://example.com",
            QQ: "https://example.com",
            Qzone: "https://example.com",
            Reddit: "https://example.com",
            Rss: "https://example.com",
            Steam: "https://example.com",
            Twitter: "https://example.com",
            Wechat: "https://example.com",
            Weibo: "https://example.com",
            Whatsapp: "https://example.com",
            Youtube: "https://example.com",
            Zhihu: "https://example.com",
            VuePressThemeHope: {
                icon: "https://theme-hope-assets.vuejs.press/logo.svg",
                link: "https://theme-hope.vuejs.press",
            },
        },
    },
    // 多语言支持的各个语言 locales 。
    locales: {
        /**
         * Chinese locale config
         */
        "/": {
            // navbar
            navbar: zhNavbar,

            // sidebar
            sidebar: zhSidebar,

            footer: "Lidon",

            displayFooter: true,

            blog: {
                description: "一片树林有两条路 而我选择人迹稀少的一条 从此决定一生的道路",
                intro: "/intro.html",
            },

            // page meta
            metaLocales: {
                editLink: "在 GitHub 上编辑此页",
            },
        },
        "/en/": {
            // navbar
            navbar: enNavbar,

            // sidebar
            sidebar: enSidebar,

            footer: "Default footer",

            displayFooter: true,

            blog: {
                description: "There are two paths in a wood, and I choose the one that is sparsely traveled and the path that will determine the path of my life",
                intro: "/en/intro.html",
            },

            metaLocales: {
                editLink: "Edit this page on GitHub",
            },
        },
    },
    hotReload: true,
    encrypt: {
        config: {
            "/demo/encrypt.html": ["1234"],
            "/en/demo/encrypt.html": ["1234"],
        },
    },

    // enable it to preview all changes in time
    // hotReload: true,

    plugins: {
        blog: true,
        photoSwipe: false, // 这个插件难用的 一 B

        comment: {
            provider: 'Waline',
            serverURL: 'https://talk.mo7.cc',
            copyright: false,
            reaction: true,
        },
        components: {
            components: ['Badge', 'VPCard', 'BiliBili', 'PDF'],
        },
        copyright: false,

        pwa: {
            favicon: '/favicon.ico',
            themeColor: '#af7ac5',
            cacheHTML: true,
            cacheImage: true,
            appendBase: true,
            manifest: manifestJson,
        },
    },
});
