<script setup>
import { menu } from '@/constants/menu'
import { useMenuStore } from '@/stores/menu'
const store = useMenuStore()
</script>

<template>
  <aside
    id="sidebar-multi-level-sidebar"
    class="fixed left-0 z-40 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-gray-300 dark:border-gray-600 shadow-xl bg-[#f18f35] duration-300"
    aria-label="Sidebar"
    :class="store.get_menu ? 'w-20' : 'w-64'"
  >
    <div class="h-full overflow-y-auto bg-gray-100 dark:bg-black/90">
      <div class="flex items-center justify-start">
        <a class="flex items-center justify-center w-full gap-3 py-5">
          <img
            src="/transparent_logo.png"
            class="h-10 rounded-full dark:bg-white bg-black"
            alt="FlowBite Logo"
          />
          <span
            v-if="!store.get_menu"
            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
          >
            NAJOT TA'LIM
          </span>
        </a>
      </div>
      <div class="space-y-2 p-3 font-medium">
        <router-link
          v-for="el in menu"
          :to="el.path"
          class="flex items-center p-2 pl-4 text-gray-900 rounded-lg dark:text-white hover:bg-gray-300 dark:hover:bg-[#f18f35]/50 duration-300"
        >
          <i :class="el.icon" class="text-2xl"></i>
          <span class="ml-3" v-if="!store.get_menu">{{ el.name }}</span>
        </router-link>
      </div>
    </div>
    <button
      class="border border-gray-500 hover:bg-black rounded-lg flex items-center absolute bottom-5 px-2 p-1 left-5"
      @click="store.changeMenu"
    >
      <i class="bx bx-menu-alt-left text-2xl dark:text-white"></i>
    </button>
  </aside>
</template>

<style scoped>
.router-link-exact-active {
  background: #f18f35;
  color: black;
}
</style>
