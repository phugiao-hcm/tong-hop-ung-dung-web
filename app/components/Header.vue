<template>
    <header class="bg-gray-900 text-white sticky top-0 z-50 shadow-md">
        <div
            class="container mx-auto px-6 py-4 flex items-center justify-between"
        >
            <!-- Logo -->
            <NuxtLink to="/" class="text-2xl font-bold text-white">
                T&T Thiết kế<span class="text-yellow-400"> Website</span>
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
                <NuxtLink
                    to="/services"
                    class="hover:text-yellow-400 transition"
                    >Dịch vụ</NuxtLink
                >
                <NuxtLink to="#contact" class="hover:text-yellow-400 transition"
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
                class="md:hidden bg-gray-900 px-6 pb-6 space-y-4 text-sm"
            >
                <NuxtLink
                    @click="isOpen = false"
                    to="/"
                    class="block hover:text-yellow-400"
                    >Trang chủ</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="/services"
                    class="block hover:text-yellow-400"
                    >Dịch vụ</NuxtLink
                >
                <NuxtLink
                    @click="isOpen = false"
                    to="#contact"
                    class="block hover:text-yellow-400"
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