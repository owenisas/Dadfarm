<script setup>
import { useTheme } from 'vuetify'
import logo from '@/assets/logo.svg?raw'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import gift from '@/assets/images/LooseDrawing/gift.png'
import suprised from '@/assets/images/LooseDrawing/suprised.png'
import axiosInstance from '@/axiosInstance'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { computed, onBeforeUnmount } from 'vue'

const store = useStore()
const router = useRouter()

const error = ref(false)
const errorMessage = ref('')
const form = ref({
  email: '',
  password: '',
  remember: false,
})
const submitForm = async () => {
  try {
    const response = await axiosInstance.post('/login', form.value)
    if (response.status === 200) {
      const sessionToken = response.data.session_token
      localStorage.setItem('session_token', sessionToken)
      store.commit('setLoggedIn', true)
      store.commit('setUser', response.data.username)
      const isLoggedIn = computed(() => !!store.state.isLoggedIn)
      const user = computed(() => store.state.user) // Parse the user data back into an object
      await router.push('/')
      alert(response.data.message)
    } else if (response.status === 401){
      console.log(response, response.data)
      error.value = true
      errorMessage.value = response.data.message
    }
  } catch (error) {
    if (error.response && error.response.status === 401){
      console.log(error.response.data) // log the error message returned by your server
      error.value = true
      errorMessage.value = error.response.data.message
    } else {
      console.error('There was a problem with the fetch operation:', error)
    }
  }
}
const vuetifyTheme = useTheme()
const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})
const isPasswordVisible = ref(false)
onBeforeUnmount(() => {
  window.location.reload()
})
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div class="d-flex">
            <div v-html="logo" />
          </div>
        </template>

        <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Owenisas
        </VCardTitle>
      </VCardItem>

      <VCardText class="pt-2">
        <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to Marketplace! 👋🏻
        </h5>
        <p class="mb-0">
          Please sign-in to your account and start the your online store!
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                label="Email"
                type="email"
                :error="error"
                :error-messages="errorMessage"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :error="error"
                :error-messages="errorMessage"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                />

                <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                >
                  Forgot Password?
                </a>
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
                @click="submitForm"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>New on our platform?</span>
              <RouterLink
                class="text-primary ms-2"
                :to="{ name: 'register' }"
              >
                Create an account
              </RouterLink>
            </VCol>

            <VCol
              cols="12"
              class="d-flex align-center"
            >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
            </VCol>

            <!-- auth providers -->
            <VCol
              cols="12"
              class="text-center"
            >
              <AuthProvider />
            </VCol>
          </VRow>
        </VForm>
      </VCardText>
    </VCard>

    <VImg
      class="auth-footer-start-tree d-none d-md-block"
      :src="gift"
      :width="380"
    />

    <VImg
      :src="suprised"
      class="auth-footer-end-tree d-none d-md-block"
      :width="350"
    />

    <!-- bg img -->
    <VImg
      class="auth-footer-mask d-none d-md-block"
      :src="authThemeMask"
    />
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>

<route lang="yaml">
meta:
  layout: blank
  showBuyNow: false
</route>
