<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
</script>

<template>
  <div class="antialiased h-screen bg-gray-50 dark:bg-gray-900">
    <div class="h-full">
      <Sidebar />
      <div class="relative p-4 sm:ml-64 h-full">
        <div
          class="fixed bg-gradient-to-r from-[#f18f35] to-[#f18f35] h-[30%] w-full right-0 top-0"
        ></div>
        <div class="relative z-50">
          <Header />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
