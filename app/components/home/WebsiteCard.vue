<template>
    <div
        class="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 flex flex-col"
        :class="{ 'opacity-60 pointer-events-none': !site.sold }"
    >
        <!-- Image -->
        <div class="relative">
            <img
                :src="site.image"
                :alt="site.title"
                class="w-full h-56 object-cover"
            />
            <span
                class="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full text-white"
                :class="site.sold ? 'bg-green-500' : 'bg-yellow-500'"
            >
                {{ site.sold ? "Sẵn sàng" : "Đang xây dựng" }}
            </span>
        </div>

        <!-- Content -->
        <div class="p-5 flex flex-col flex-grow">
            <!-- Title -->
            <h2 class="text-lg font-bold text-gray-800 mb-2 line-clamp-1">
                {{ site.title }}
            </h2>

            <!-- Description -->
            <p class="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                {{ site.description }}
            </p>

            <!-- Prices -->
            <div class="mb-4">
                <div class="flex justify-between items-center mb-1">
                    <span class="text-sm text-gray-500">Giá bán</span>
                    <span class="text-lg font-bold text-red-600">
                        {{ formatPrice(site.price) }}
                    </span>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-sm text-gray-500">Giá thuê / tháng</span>
                    <span class="text-base font-bold text-blue-600">
                        {{ formatPrice(site.rent) }}
                    </span>
                </div>
            </div>

            <!-- Button -->
            <a
                :href="site.sold ? site.link : '#'"
                target="_blank"
                rel="noopener noreferrer"
                class="mt-auto px-4 py-2 rounded-lg text-center text-white font-medium transition"
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
</template>

<script setup>
const props = defineProps({
    site: {
        type: Object,
        required: true,
    },
});

const formatPrice = (price) => {
    return price.toLocaleString("vi-VN") + "₫";
};
</script>

<style scoped>
.line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
.line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
