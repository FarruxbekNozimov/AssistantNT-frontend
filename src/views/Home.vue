<script setup></script>

<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div
        v-for="el in 4"
        class="h-[110px] border dark:border-gray-600 border-gray-200 shadow-xl dark:bg-black/50 bg-white/50 p-4 dark:text-white rounded-xl relative"
      >
        <div class="pl-24 text-center">
          <i class="absolute left-5 bottom-3 bx bx-user text-7xl bg-[#f18f35] rounded-full p-2"></i>
          <h2 class="text-2xl">12,000</h2>
          <h1 class="text-2xl">USERS</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
