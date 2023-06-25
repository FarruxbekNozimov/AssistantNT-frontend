import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const shortMenu = ref(false)

  const changeMenu = () => (shortMenu.value = !shortMenu.value)

  const get_menu = computed(() => shortMenu.value)

  return { get_menu, changeMenu }
})
