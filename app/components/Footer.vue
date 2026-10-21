<template>
    <footer class="bg-gray-900 text-white pt-10 pb-6">
        <div
            class="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
            <!-- Cột 1: Thông tin -->
            <div>
                <h2 class="text-xl font-semibold mb-3">
                    Thiết kế Website Phước Hòa
                </h2>
                <p class="text-gray-400 text-sm">
                    Cung cấp giao diện website đẹp, dễ chỉnh sửa và phù hợp cho
                    mọi ngành nghề tại Phú Giáo, Bình Dương.
                </p>
            </div>

            <!-- Cột 2: Liên kết -->
            <div>
                <h2 class="text-xl font-semibold mb-3">Liên kết nhanh</h2>
                <ul class="space-y-2 text-gray-300 text-sm">
                    <li>
                        <NuxtLink to="/" class="hover:text-blue-400"
                            >Trang chủ</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink to="/services" class="hover:text-blue-400"
                            >Dịch vụ</NuxtLink
                        >
                    </li>
                    <li>
                        <NuxtLink to="/" class="hover:text-blue-400"
                            >Liên hệ</NuxtLink
                        >
                    </li>
                </ul>
            </div>

            <!-- Cột 3: Liên hệ -->
            <div>
                <h2 class="text-xl font-semibold mb-3">Liên hệ</h2>
                <ul class="text-gray-300 text-sm space-y-2">
                    <li>📍 Phước Hòa, Phú Giáo, Bình Dương</li>
                    <li>
                        📞
                        <a
                            href="https://zalo.me/0937704598"
                            target="_blank"
                            class="hover:text-blue-400"
                            >Zalo: 0937 704 598</a
                        >
                    </li>
                    <li>
                        📧
                        <a
                            href="mailto:tanthanh1998.phuochoa@gmail.com"
                            class="hover:text-blue-400"
                            >Email liên hệ</a
                        >
                    </li>
                </ul>
            </div>
        </div>

        <!-- Copyright -->
        <div
            class="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4"
        >
            © {{ new Date().getFullYear() }} Thiết kế Website Phước Hòa. All
            rights reserved.
        </div>
    </footer>
</template>
