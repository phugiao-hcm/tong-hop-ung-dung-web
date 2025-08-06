<template>
    <header class="bg-[#395B50] text-white sticky top-0 z-50 shadow-md">
        <div
            class="container mx-auto px-6 py-4 flex items-center justify-between"
        >
            <!-- Logo -->
            <NuxtLink to="/" class="text-2xl font-bold text-white">
                PhuGiaoWeb<span class="text-yellow-400">.</span>
            </NuxtLink>

            <!-- Desktop Menu -->
            <nav
                class="hidden md:flex items-center space-x-8 text-sm font-medium"
            >
                <NuxtLink to="/" class="relative group">
                    <span class="group-hover:text-yellow-400 transition"
                        >Trang chủ</span
                    >
                    <span
                        class="absolute left-0 -bottom-1 w-full h-[2px] bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                    ></span>
                </NuxtLink>
                <NuxtLink to="/" class="hover:text-yellow-400 transition"
                    >Dịch vụ</NuxtLink
                >
                <NuxtLink to="/" class="hover:text-yellow-400 transition"
                    >Giới thiệu</NuxtLink
                >
                <NuxtLink to="/" class="hover:text-yellow-400 transition"
                    >Liên hệ</NuxtLink
                >
            </nav>

            <!-- Desktop Icons -->
            <div class="hidden md:flex items-center space-x-5 text-xl">
                <NuxtLink to="/" class="hover:text-yellow-400 transition">
                    <i class="fas fa-user"></i>
                </NuxtLink>
                <NuxtLink to="/" class="hover:text-yellow-400 transition">
                    <i class="fas fa-shopping-cart"></i>
                </NuxtLink>
            </div>

            <!-- Mobile Button -->
            <button
                @click="isOpen = !isOpen"
                class="md:hidden text-white focus:outline-none"
                aria-label="Toggle Menu"
            >
                <svg
                    class="w-7 h-7"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <transition name="slide">
            <div
                v-if="isOpen"
                class="md:hidden bg-[#395B50] border-t border-white/10 px-6 pb-4 space-y-4 text-sm"
            >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-yellow-400"
                    >Trang chủ</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-yellow-400"
                    >Dịch vụ</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-yellow-400"
                    >Giới thiệu</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-yellow-400"
                    >Liên hệ</NuxtLink
                >
            </div>
        </transition>
    </header>

    <!-- Hero Section -->
    <section
        class="bg-[#395B50] text-white relative overflow-hidden min-h-[30vh] flex items-center"
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
                        to="/"
                        class="bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-yellow-300 transition"
                    >
                        Bắt đầu
                    </NuxtLink>
                    <NuxtLink
                        to="/"
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
