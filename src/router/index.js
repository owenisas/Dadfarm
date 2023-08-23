import { setupLayouts } from 'virtual:generated-layouts'
import { createRouter, createWebHistory } from 'vue-router'
import routes from '~pages'
import User_loggedin from '@/axios/user_loggedin.vue'
import UserProfile from '@/global/UserProfile.vue'
import Post from '@/global/Post.vue'
import global_routes from '@/global'
import createpost from '@/pages/create_post.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...setupLayouts(routes),
    ...global_routes,
    {
      path:'/check_login',
      name: 'check_login',
      component:User_loggedin,
    },
    {
      path: '/user/:username',
      name: 'UserProfile',
      component:UserProfile,
      props: route => ({ username: route.params.username }),
    },
    {
      path: '/post/:postid',
      name: 'Post',
      component:Post,
      props: route => ({ postid: route.params.postid }),
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
export default router
