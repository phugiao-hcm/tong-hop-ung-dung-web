<template>
    <div>
        <Header />
        <main>
            <NuxtPage />
        </main>
        <Footer id="contact" />

        <!-- Nút gọi điện nằm trong layout -->
        <Social />
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Social from "@/components/Social.vue";
</script>
