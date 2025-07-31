<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div
      class="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8"
    >
      <!-- Logo + giới thiệu -->
      <div>
        <h2 class="text-xl font-bold mb-2">Kho Giao Diện Web</h2>
        <p class="text-sm text-gray-300">
          Nơi tổng hợp các mẫu giao diện landing page, shop, blog... Thiết kế
          sẵn, tối ưu SEO và mobile, sẵn sàng dùng ngay.
        </p>
      </div>

      <!-- Menu -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Menu</h3>
        <ul class="space-y-1 text-sm text-gray-300">
          <li><NuxtLink to="/" class="hover:underline">Trang chủ</NuxtLink></li>
          <li>
            <NuxtLink to="/websites" class="hover:underline"
              >Danh sách website</NuxtLink
            >
          </li>
          <li>
            <NuxtLink to="/about" class="hover:underline">Giới thiệu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="hover:underline">Liên hệ</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Liên hệ -->
      <div>
        <h3 class="text-lg font-semibold mb-2">Liên hệ</h3>
        <p class="text-sm text-gray-300">
          Zalo:
          <a href="https://zalo.me/0937704598" class="underline">0937704598</a>
        </p>
        <p class="text-sm text-gray-300">
          Facebook:
          <a href="https://fb.com/yourpage" class="underline"
            >fb.com/yourpage</a
          >
        </p>
        <p class="text-sm text-gray-300">
          Email:
          <a href="mailto:yourmail@example.com" class="underline"
            >yourmail@example.com</a
          >
        </p>
      </div>
    </div>

    <!-- Copyright -->
    <div class="bg-gray-900 text-center text-sm py-4 text-gray-400">
      &copy; {{ new Date().getFullYear() }} Kho Giao Diện Web. All rights
      reserved.
    </div>
  </footer>
</template>

<script setup>
// Không cần script nếu không có logic
</script>
