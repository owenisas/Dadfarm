<script setup>
import BuyNow from '@core/components/PostNow.vue'
import axiosInstance from '@/axiosInstance'
import { onMounted, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import SessionExpired from '@/layouts/components/SessionExpired.vue'

const store = useStore()
function isBrowser() {
  const userAgent = navigator.userAgent || ''

  const browserKeywords = [
    'Chrome',
    'Safari',
    'Firefox',
    'Edge',
    'MSIE',
    'Trident',
    'Opera',
    'OPR',
  ]

  return browserKeywords.some(keyword => userAgent.includes(keyword))
}
const route = useRoute()
const bow = isBrowser()
const showBuyNow = ref(true)
const domain = window.location.hostname
const isExpired = computed(() => store.state.expired)
onMounted(
  async () => {
    try {
      const response = await axiosInstance.post('/')
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        store.commit('loadInitialState')

      }else if (response.status === 202){
        store.commit('loadInitialState')

      }

    // Process the response
    } catch (error) {
      console.error(error)
    }
  })

watchEffect(() => {
  const watchedRouteNames = ['create_post', 'register', 'login']

  if (watchedRouteNames.includes(route.name)) {
    showBuyNow.value = route.meta.showBuyNow || false
  }
})
</script>

<template>
  <VApp>
    <VLayout class="layout-wrapper layout-nav-type-vertical">
      <SessionExpired
        v-if="isExpired"
      />
      <BuyNow
        v-if="showBuyNow"
      />
      <RouterView />
    </VLayout>
  </VApp>
</template>
