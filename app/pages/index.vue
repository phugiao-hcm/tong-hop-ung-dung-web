<template>
  <div class="container mx-auto py-8">
    <h1 class="text-2xl font-bold mb-6">Danh sách website rao bán</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="site in websites"
        :key="site.id"
        class="border p-4 rounded shadow hover:shadow-lg transition"
      >
        <img :src="site.thumbnail" class="w-full h-40 object-cover rounded" />
        <h2 class="mt-2 text-lg font-semibold">{{ site.name }}</h2>
        <p class="text-sm text-gray-500 mb-2">{{ site.price }}</p>
        <div class="flex gap-3">
          <a
            :href="site.demo"
            target="_blank"
            class="text-blue-500 underline text-sm"
            >Xem demo</a
          >
          <NuxtLink
            :to="`/web/${site.slug}`"
            class="text-green-500 underline text-sm"
            >Chi tiết</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: websites } = await useFetch("/data/websites.json");
</script>
