import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import User_loggedin from '@/axios/user_loggedin.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    {
      path:'/check_login',
      name: 'check_login',
      component:User_loggedin,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
