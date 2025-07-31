<template>
  <header class="bg-blue-600 text-white">
    <div class="container mx-auto flex justify-between items-center p-4">
      <NuxtLink to="/" class="hover:underline">
        <h1 class="text-2xl font-bold">Kho Giao Diện Web</h1>
      </NuxtLink>

      <!-- Nút toggle menu mobile -->
      <button
        class="md:hidden focus:outline-none"
        @click="isOpen = !isOpen"
        aria-label="Toggle Menu"
      >
        <svg
          class="w-6 h-6"
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
      <nav class="hidden md:flex space-x-6">
        <NuxtLink
          to="/"
          active-class="font-bold underline"
          class="hover:underline"
          >Trang chủ</NuxtLink
        >
        <NuxtLink
          to="/websites"
          active-class="font-bold underline"
          class="hover:underline"
          >Danh sách website</NuxtLink
        >
        <NuxtLink
          to="/about"
          active-class="font-bold underline"
          class="hover:underline"
          >Giới thiệu</NuxtLink
        >
        <NuxtLink
          to="/contact"
          active-class="font-bold underline"
          class="hover:underline"
          >Liên hệ</NuxtLink
        >
      </nav>
    </div>

    <!-- Menu mobile -->
    <div v-if="isOpen" class="md:hidden px-4 pb-4 space-y-2">
      <NuxtLink @click="isOpen = false" to="/" class="block hover:underline"
        >Trang chủ</NuxtLink
      >
      <NuxtLink
        @click="isOpen = false"
        to="/websites"
        class="block hover:underline"
        >Danh sách website</NuxtLink
      >
      <NuxtLink
        @click="isOpen = false"
        to="/about"
        class="block hover:underline"
        >Giới thiệu</NuxtLink
      >
      <NuxtLink
        @click="isOpen = false"
        to="/contact"
        class="block hover:underline"
        >Liên hệ</NuxtLink
      >
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>
