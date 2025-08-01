<template>
    <div
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100"
    >
        <img
            :src="site.image"
            :alt="site.title"
            class="w-full h-48 object-cover"
        />

        <div class="p-5">
            <h2 class="text-xl font-semibold text-gray-800 mb-2">
                {{ site.title }}
            </h2>

            <p class="text-gray-600 text-sm mb-3 line-clamp-2">
                {{ site.description }}
            </p>

            <div class="flex justify-between items-center">
                <span class="text-lg font-bold text-blue-600">
                    {{ formatPrice(site.price) }}
                </span>

                <a
                    :href="site.link"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 text-sm rounded-lg transition"
                >
                    Xem chi tiết
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
/* Thêm hiệu ứng cắt dòng nếu muốn gọn gàng */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
