// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // vì GitHub Pages chỉ hỗ trợ static
    target: "static", // không bắt buộc nhưng rõ ràng
    app: {
        baseURL: "/tong-hop-ung-dung-web/", // ⚠️ thay <REPO_NAME> bằng tên repo của bạn
        head: {
            meta: [
                {
                name: 'google-site-verification',
                content: 'XRR12va6BxhJbOExSUsWvGvZZ9wjdy1N85LFQDGYEeg',
                },
            ],
        },
    },

    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/robots',
        '@nuxtjs/seo', // nếu muốn dùng đầy đủ
    ],
    // ✅ Đây là cấu hình mới đúng chuẩn
    site: {
        url: 'https://phugiao-hcm.github.io/tong-hop-ung-dung-web', // 🔁 sửa đúng URL GitHub Pages của bạn
    },
    sitemap: {
        sitemapName: 'sitemap.xml',
        exclude: ['/admin/**'],
    },


    robots: {
        robotsTxt: false,
    },

    // sitemap: {
    //     siteUrl: "https://phugiao-hcm.github.io/tong-hop-ung-dung-web", // ✅ Thay domain đúng
    //     sitemapName: "sitemap.xml",
    //     gzip: true,
    //     trailingSlash: false,
    //     xsl: false, // ✅ Tắt style.xsl để tránh lỗi
    //     // routes: [
    //     // "/", "/gioi-thieu", "/lien-he" // thêm các route tĩnh ở đây
    //     // ],
    // },
  
    compatibilityDate: "2025-07-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
});
