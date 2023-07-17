<script setup>
const topCards = [
  {
    title: 'Staffs',
    icon: 'bx bxs-graduation',
    color: 'dark:bg-yellow-500 bg-yellow-300',
    number: 12000
  },
  {
    title: 'Students',
    icon: 'bx bx-user',
    color: 'dark:bg-blue-500 bg-blue-300',
    number: 12000
  },
  {
    title: 'Groups',
    icon: 'bx bx-group',
    color: 'dark:bg-purple-500 bg-purple-300',
    number: 12000
  },
  {
    title: 'Users',
    icon: 'bx bx-user',
    color: 'dark:bg-green-500 bg-green-300',
    number: 12000
  }
]
</script>

<template>
  <div>
    <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-5">
      <div
        v-for="el in topCards"
        class="h-[110px] border dark:border-gray-600 border-gray-200 shadow-xl dark:bg-zinc-900 bg-white p-4 dark:text-white rounded-xl relative"
      >
        <div class="pl-24 text-center">
          <i
            class="absolute left-6 top-4 bx bxs-graduation text-7xl rounded-full px-2"
            :class="el.color"
          ></i>
          <h2 class="text-2xl">{{ el.number }}</h2>
          <h1 class="text-2xl">{{ el.title }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
