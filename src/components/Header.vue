<script setup>
import { onMounted, onUpdated, ref } from 'vue'
import { initDropdowns } from 'flowbite'
import { useRoute } from 'vue-router'

const route = useRoute()

const isDark = ref(JSON.parse(localStorage.getItem('mode')))
const changeMode = () => {
  isDark.value = !isDark.value
  localStorage.setItem('mode', isDark.value)
  writeMode()
}
const writeMode = () => {
  if (
    isDark.value ||
    (!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

onMounted(() => {
  initDropdowns()
  writeMode()
})
</script>

<template>
  <nav
    class="z-50 w-full dark:bg-zinc-900 bg-white rounded-xl border dark:border-gray-600 mb-5 shadow-xl"
  >
    <div class="px-3 py-3 lg:px-5">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button
            id="logo-sidebar"
            data-drawer-target="logo-sidebar"
            data-drawer-toggle="logo-sidebar"
            aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>
          <span
            class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
          >
            {{ route.name }}
          </span>
        </div>
        <div class="flex items-center">
          <div class="flex items-center gap-5 ml-3">
            <div>
              <button
                type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false"
                data-dropdown-toggle="dropdown-user"
              >
                <span class="sr-only">Open user menu</span>
                <img class="w-10 h-10 rounded-full" src="/user.png" alt="user photo" />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-zinc-800 dark:divide-gray-600"
              id="dropdown-user"
            >
              <div class="px-4 py-3" role="none">
                <p class="text-sm text-gray-900 dark:text-white" role="none">Toshmat Eshmatov</p>
              </div>
              <ul class="py-1" role="none">
                <li
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg cursor-pointer"
                  role="menuitem"
                >
                  <label
                    class="relative inline-flex justify-between items-center cursor-pointer w-full"
                  >
                    <span class="text-sm font-medium"> Dark </span>
                    <input
                      type="checkbox"
                      class="sr-only peer"
                      @change="changeMode"
                      :checked="JSON.parse(isDark)"
                    />
                    <div
                      class="w-11 h-6 bg-gray-400 rounded-full dark:peer-focus:ring-black dark:bg-black peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:right-[22px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"
                    ></div>
                  </label>
                </li>
                <li
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white rounded-lg cursor-pointer"
                  role="menuitem"
                >
                  Settings
                </li>
                <li
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-red-400 rounded-lg dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  Sign out
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
