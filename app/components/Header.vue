<template>
    <header class="bg-white shadow sticky top-0 z-50">
        <div
            class="container mx-auto px-4 py-4 flex items-center justify-between"
        >
            <!-- Logo -->
            <NuxtLink to="/" class="flex items-center gap-2">
                <span class="text-xl font-semibold text-blue-700"
                    >Kho Giao Diện Web</span
                >
            </NuxtLink>

            <!-- Nút mở menu trên mobile -->
            <button
                @click="isOpen = !isOpen"
                class="md:hidden text-gray-700 focus:outline-none"
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

            <!-- Menu desktop -->
            <nav class="hidden md:flex space-x-6 text-gray-700 font-medium">
                <NuxtLink
                    to="/"
                    active-class="text-blue-600 font-semibold underline"
                    class="hover:text-blue-600 transition"
                >
                    Trang chủ
                </NuxtLink>
                <NuxtLink
                    to="/websites"
                    active-class="text-blue-600 font-semibold underline"
                    class="hover:text-blue-600 transition"
                >
                    Danh sách
                </NuxtLink>
                <NuxtLink
                    to="/about"
                    active-class="text-blue-600 font-semibold underline"
                    class="hover:text-blue-600 transition"
                >
                    Giới thiệu
                </NuxtLink>
                <NuxtLink
                    to="/contact"
                    active-class="text-blue-600 font-semibold underline"
                    class="hover:text-blue-600 transition"
                >
                    Liên hệ
                </NuxtLink>
            </nav>
        </div>

        <!-- Menu mobile -->
        <transition name="slide">
            <div
                v-if="isOpen"
                class="md:hidden bg-white border-t border-gray-200 px-4 pb-4 space-y-3 text-gray-700"
            >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-blue-600"
                    >Trang chủ</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/websites"
                    class="block hover:text-blue-600"
                    >Danh sách</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/about"
                    class="block hover:text-blue-600"
                    >Giới thiệu</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/contact"
                    class="block hover:text-blue-600"
                    >Liên hệ</NuxtLink
                >
            </div>
        </transition>
    </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<style scoped>
/* Smooth slide for mobile menu */
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
    transform: translateY(-10px);
    opacity: 0;
}
</style>
