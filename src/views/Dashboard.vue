<script setup>
import Sidebar from '../components/Sidebar.vue'
import Header from '../components/Header.vue'
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
</script>

<template>
  <div class="antialiased h-screen bg-gray-200 dark:bg-gray-900">
    <div class="h-full">
      <Sidebar />
      <div
        class="relative p-4 h-full duration-200"
        :class="store.get_menu ? 'sm:ml-20' : 'sm:ml-64'"
      >
        <div class="fixed bg-[#f18f35] h-[30%] w-full right-0 top-0"></div>
        <div class="relative z-50">
          <h1 class="text-9xl">
            {{ store.menu_get }}
          </h1>
          <Header />
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
