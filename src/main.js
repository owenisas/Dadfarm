/* eslint-disable import/order */
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@/styles/styles.scss'
import '@core/scss/index.scss'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import store from './store'
import descope from '@descope/vue-sdk'
import { createI18n, useI18n } from 'vue-i18n'
import en from './locale/en'
import zh from './locale/zh'
import { createAuth0 } from '@auth0/auth0-vue'

const i18n = createI18n({
  legacy: false,
  locale: navigator.language, // Set the locale based on the user's browser language
  fallbackLocale: 'en', // Set a fallback locale in case the browser language is not available
  messages: {
    'zh-TW':zh,
    'zh-HK':zh,
    'zh-CN':zh,
    en,

  },
})
const app = createApp(App)

loadFonts()

app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(store)
app.use(i18n)
app.use(descope, {
  projectId: 'P2SG6jB0nk0XHHGey2SrgyQ9bL4v',

  // If the Descope project manages the token response in cookies, a custom domain
  // must be configured (e.g., https://auth.app.example.com)
  // and should be set as the baseUrl property.
  // baseUrl: https://auth.app.example.com'
})
app.mount('#app')
