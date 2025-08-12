<template>
    <HeroSection />

    <div class="bg-gray-50 min-h-screen py-12 px-4">
        <div class="max-w-7xl mx-auto" id="websiteListById">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">
                ✨ Danh sách Website đang bán ✨
            </h1>
            <!-- Bộ lọc dạng button -->
            <div style="margin-bottom: 20px">
                <el-button-group>
                    <el-button
                        v-for="option in filterOptions"
                        :key="option.value"
                        :type="
                            selectedType === option.value
                                ? 'primary'
                                : 'default'
                        "
                        @click="selectedType = option.value"
                    >
                        {{ option.label }}
                    </el-button>
                </el-button-group>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <WebsiteCard
                    v-for="site in websites"
                    :key="site.id"
                    :site="site"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import WebsiteCard from "../components/home/WebsiteCard.vue";
import HeroSection from "../components/home/HeroSection.vue";
const { data: websites } = await useFetch("/data/websites.json");

useHead({
    title: "Thiết Kế Website Phú Giáo – Dịch Vụ Trọn Gói",
    meta: [
        {
            name: "description",
            content:
                "Thiết kế website Phú Giáo chuyên nghiệp, uy tín, chuẩn SEO – hỗ trợ doanh nghiệp, cửa hàng kinh doanh hiệu quả hơn.",
        },
        {
            name: "keywords",
            content:
                "website Phú Giáo, thiết kế web Phú Giáo, làm web trọn gói, web bán hàng Bình Dương",
        },
        {
            property: "og:title",
            content: "Thiết Kế Website Phú Giáo – Chuyên Nghiệp & Uy Tín",
        },
        {
            property: "og:description",
            content:
                "Dịch vụ thiết kế website tại Phú Giáo giúp bạn sở hữu một trang web đẹp, tối ưu SEO và thu hút khách hàng.",
        },
        {
            property: "og:image",
            content:
                "https://phugiao-hcm.github.io/tong-hop-ung-dung-web/images/hero.png",
        },
    ],
});
</script>
