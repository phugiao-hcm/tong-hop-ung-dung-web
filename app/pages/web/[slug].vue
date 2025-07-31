<template>
  <div class="container mx-auto py-8" v-if="site">
    <h1 class="text-2xl font-bold">{{ site.name }}</h1>
    <img :src="site.thumbnail" class="w-full h-60 object-cover rounded mt-4" />
    <p class="mt-4 text-gray-700">{{ site.description }}</p>
    <p class="mt-2 font-bold text-red-500">Giá: {{ site.price }}</p>
    <div class="mt-4">
      <a
        :href="site.demo"
        target="_blank"
        class="bg-blue-500 text-white px-4 py-2 rounded"
        >Xem Demo</a
      >
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
const { data: websites } = await useFetch("/data/websites.json");
const site = computed(() =>
  websites.value.find((w) => w.slug === route.params.slug)
);
</script>
