<template>
    <!-- Hero Section -->
    <section
        class="bg-gray-900 text-white relative overflow-hidden min-h-[30vh] flex items-center"
    >
        <div
            class="container mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-12"
        >
            <!-- Left Text -->
            <div>
                <h1 class="text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Thiết kế Website<br />Trọn gói
                </h1>
                <p class="text-gray-200 mb-8 max-w-lg">
                    Bạn đang kinh doanh online, bán hàng, cung cấp dịch vụ…
                    nhưng thiếu một website riêng để tăng uy tín, thu hút khách
                    hàng, tối ưu doanh thu?👉 Hãy đầu tư website NGAY HÔM NAY để
                    khách hàng dễ dàng tìm thấy bạn!
                </p>
                <div class="flex gap-4">
                    <NuxtLink
                        to="#contact"
                        class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                    >
                        Liên hệ (Tư vấn miễn phí)
                    </NuxtLink>
                    <NuxtLink
                        to="#websiteListById"
                        class="border border-white text-white font-medium px-6 py-3 rounded-full hover:bg-white hover:text-[#395B50] transition"
                    >
                        Khám phá
                    </NuxtLink>
                </div>
            </div>

            <!-- Right Image -->
            <div class="relative z-10">
                <img
                    src="/images/hero.png"
                    alt="Green Sofa"
                    class="w-full max-w-md mx-auto md:mx-0 drop-shadow-xl animate-fade-in-up border-4 border-white rounded-lg"
                />
                <!-- Dots -->
                <div class="absolute right-0 top-1/3 hidden md:block">
                    <div class="grid grid-cols-5 gap-3 opacity-10 pr-6 pt-4">
                        <span
                            v-for="i in 20"
                            :key="i"
                            class="w-[6px] h-[6px] bg-white rounded-full"
                        ></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}

@keyframes fade-in-up {
    0% {
        transform: translateY(20px);
        opacity: 0;
    }
    100% {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out both;
}
</style>
