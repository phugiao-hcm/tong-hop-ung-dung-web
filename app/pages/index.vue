<template>
    <div class="bg-gray-50 min-h-screen py-12 px-4">
        <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl font-bold text-center text-gray-800 mb-10">
                ✨ Danh sách Website đang bán ✨
            </h1>

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
import WebsiteCard from "./WebsiteCard.vue";
const { data: websites } = await useFetch("/data/websites.json");
</script>
