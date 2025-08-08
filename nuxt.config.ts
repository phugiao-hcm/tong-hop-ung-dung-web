// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    ssr: false, // vì GitHub Pages chỉ hỗ trợ static
    target: "static", // không bắt buộc nhưng rõ ràng
    app: {
        baseURL: "/tong-hop-ung-dung-web/", // ⚠️ thay <REPO_NAME> bằng tên repo của bạn
        head: {
            title: "T&T Shop - Thiết kế website chuyên nghiệp",
            meta: [
                {
                    name: "google-site-verification",
                    content: "XRR12va6BxhJbOExSUsWvGvZZ9wjdy1N85LFQDGYEeg",
                },

                // SEO chính
                {
                    name: "description",
                    content:
                        "T&T Shop cung cấp dịch vụ thiết kế website chuyên nghiệp cho cá nhân và doanh nghiệp. Giao diện hiện đại, chuẩn SEO, dễ quản lý, giá hợp lý.",
                },
                {
                    name: "keywords",
                    content:
                        "T&T Shop, thiết kế website, thiết kế web doanh nghiệp, làm web cá nhân, giao diện đẹp, chuẩn SEO",
                },
                {
                    property: "og:title",
                    content: "T&T Shop - Thiết kế website chuyên nghiệp",
                },
                {
                    property: "og:description",
                    content:
                        "T&T Shop chuyên thiết kế website cho cá nhân và doanh nghiệp.",
                },

                // Viewport
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                {
                    charset: "utf-8",
                },

                // Open Graph (Facebook, Zalo)
                {
                    property: "og:type",
                    content: "website",
                },
                {
                    property: "og:title",
                    content: "T&T Shop - Thiết kế website chuyên nghiệp",
                },
                {
                    property: "og:description",
                    content:
                        "Thiết kế website cho cá nhân và doanh nghiệp với giao diện đẹp, tốc độ cao và tối ưu SEO.",
                },
                {
                    property: "og:image",
                    content:
                        "https://phugiao-hcm.github.io/tong-hop-ung-dung-web/images/og-image.png",
                },
                {
                    property: "og:url",
                    content:
                        "https://phugiao-hcm.github.io/tong-hop-ung-dung-web/",
                },

                // Twitter Card
                {
                    name: "twitter:card",
                    content: "summary_large_image",
                },
                {
                    name: "twitter:title",
                    content: "T&T Shop - Thiết kế website chuyên nghiệp",
                },
                {
                    name: "twitter:description",
                    content:
                        "T&T Shop cung cấp dịch vụ thiết kế website hiện đại, tối ưu SEO, dễ sử dụng.",
                },
                {
                    name: "twitter:image",
                    content:
                        "https://phugiao-hcm.github.io/tong-hop-ung-dung-web/images/og-image.png",
                },
            ],
        },
    },

    modules: [
        "@nuxtjs/sitemap",
        "@nuxtjs/robots",
        "@nuxtjs/seo", // nếu muốn dùng đầy đủ
    ],
    // ✅ Đây là cấu hình mới đúng chuẩn
    site: {
        url: "https://phugiao-hcm.github.io", // 🔁 sửa đúng URL GitHub Pages của bạn
    },
    sitemap: {
        sitemapName: "sitemap.xml",
        exclude: ["/admin/**"],
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
