import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/Dashboard.vue'),
      children: [
        {
          path: '/',
          name: 'Home',
          component: () => import('@/views/Home.vue')
        },
        {
          path: '/assistants',
          name: 'Assistants',
          component: () => import('@/views/Assistants.vue')
        },
        {
          path: '/students',
          name: 'Students',
          component: () => import('@/views/Students.vue')
        },
        {
          path: '/groups',
          name: 'Groups',
          component: () => import('@/views/Groups.vue')
        },
        {
          path: '/directions',
          name: 'Directions',
          component: () => import('@/views/Directions.vue')
        },
        {
          path: '/rating',
          name: 'Rating',
          component: () => import('@/views/Rating.vue')
        },
        {
          path: '/settings',
          name: 'Settings',
          component: () => import('@/views/Settings.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue')
    }
  ]
})

export default router
