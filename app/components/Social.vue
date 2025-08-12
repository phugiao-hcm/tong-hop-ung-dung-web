<template>
    <div>
        <!-- Nút gọi điện nằm trong layout -->
        <a
            href="tel:0937704598"
            class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-[9999]"
            aria-label="Gọi ngay"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 5a16 16 0 0016 16h2a2 2 0 002-2v-3.28a2 2 0 00-1.1-1.78l-3.2-1.6a2 2 0 00-2.2.2l-2.4 1.8a12.06 12.06 0 01-5.6-5.6l1.8-2.4a2 2 0 00.2-2.2l-1.6-3.2A2 2 0 006.28 3H3a2 2 0 00-2 2v2z"
                />
            </svg>
        </a>

        <!-- Nút Facebook Messenger -->
        <a
            href="https://m.me/ffer.tosu/"
            target="_blank"
            rel="noopener noreferrer"
            class="fixed bottom-[5.5rem] right-6 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300 z-[9999]"
            aria-label="Liên hệ qua Messenger"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                class="w-6 h-6 fill-white"
            >
                <path
                    d="M24 4C12.95 4 4 12.62 4 23.5c0 5.94 2.64 11.3 6.88 15.05V44l6.31-3.47c2.11.59 4.36.92 6.81.92 11.05 0 20-8.62 20-19.5S35.05 4 24 4zm2.06 25.88l-5.29-5.63-10.19 5.63 11.1-11.8 5.38 5.63 10.1-5.63-11.1 11.8z"
                />
            </svg>
        </a>
    </div>
</template>
