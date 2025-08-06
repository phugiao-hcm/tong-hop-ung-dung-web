<template>
    <div
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
        :class="{ 'opacity-60 pointer-events-none': !site.sold }"
    >
        <img
            :src="site.image"
            :alt="site.title"
            class="w-full h-58 object-cover"
        />

        <div class="p-5">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
                {{ site.title }}
            </h2>

            <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ site.description }}
            </p>

            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-red-600">
                    {{ formatPrice(site.price) }}
                </span>

                <a
                    :href="site.sold ? site.link : '#'"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="px-4 py-2 text-sm rounded-lg transition text-white"
                    :class="
                        site.sold
                            ? 'bg-blue-600 hover:bg-blue-700'
                            : 'bg-gray-400 cursor-not-allowed'
                    "
                >
                    {{ site.sold ? "Xem chi tiết" : "Đang xây dựng" }}
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    site: Object,
});

const formatPrice = (price) =>
    price.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
</script>

<style scoped>
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
