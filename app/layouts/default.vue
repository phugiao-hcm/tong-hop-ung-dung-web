<template>
    <div>
        <Header />
        <main>
            <NuxtPage />
        </main>
        <Footer />

        <!-- Nút gọi điện nằm trong layout -->
        <a
            href="tel:0937704598"
            class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-[9999]"
            aria-label="Gọi ngay"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a16 16 0 0016 16h2a2 2 0 002-2v-3.28a2 2 0 00-1.1-1.78l-3.2-1.6a2 2 0 00-2.2.2l-2.4 1.8a12.06 12.06 0 01-5.6-5.6l1.8-2.4a2 2 0 00.2-2.2l-1.6-3.2A2 2 0 006.28 3H3a2 2 0 00-2 2v2z"
                />
            </svg>
        </a>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
