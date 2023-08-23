<script setup>
import { useTheme } from 'vuetify'
import logo from '@/assets/logo.svg?raw'
import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
import authV1MaskDark from '@/assets/images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@/assets/images/pages/auth-v1-mask-light.png'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import gift from '@/assets/images/LooseDrawing/gift.png'
import suprised from '@/assets/images/LooseDrawing/suprised.png'
import { useRouter } from 'vue-router'
import axiosInstance from '@/axiosInstance'
import { onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
const router = useRouter()

const store = useStore()

const submitForm = async () => {
  try {
    const response = await axiosInstance.post('/register', form.value)
    if (response.status === 200) {
      console.log(response.data)
      const sessionToken = response.data.session_token
      localStorage.setItem('session_token', sessionToken)
      alert(response.data.message)
      store.commit('setLoggedIn', true)
      store.commit('setUser', response.data.username)
      await router.push('/')
    } else {
      alert(response.data.message)
      throw new Error('Network response was not ok')
    }
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error)
  }
}
const hCaptchaResponse = ref(null)
const resetHcaptcha = () => {
  if (hCaptchaResponse.value !== null) {
    hCaptchaResponse.value = null
  }
  const hCaptchaInstance = ref("hCaptcha")
  if (hCaptchaInstance.value) {
    hCaptchaInstance.value.reset()
  }
}
const onHcaptchaVerify = response => {
  hCaptchaResponse.value = response
}
const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
  hcaptcharesponse: hCaptchaResponse,
})
const emailRules = [
  v => !!v || 'E-mail is required',
  v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
  v => (v && v.length <= 255) || 'E-mail must be less than 255 characters',

]
const usernmaeRules = [
  value => !!value || 'Username cannot be blank',
  value => (value && value.length <= 20) || 'Username must be less than 20 characters',
]
const rules = [
  value => !!value || 'Password is required',
  value => value.length >= 8 || 'Password must be at least 8 characters',
  value => /[A-Z]/.test(value) || 'Password must contain at least one uppercase letter',
  value => /[a-z]/.test(value) || 'Password must contain at least one lowercase letter',
  value => /\d/.test(value) || 'Password must contain at least one digit',
  value => (value && value.length <= 255) || 'Password must be less than 255 characters',
]
const log = message => {
  console.log(message)
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
          Earning starts here 🚀
        </h5>
        <p class="mb-0">
          Make your app management easy and fun!
        </p>
      </VCardText>

      <VCardText>
        <VForm @submit.prevent="() => {}">
          <VRow>
            <!-- Username -->
            <VCol cols="12">
              <VTextField
                v-model="form.username"
                :rules="usernmaeRules"
                required
                :maxlength="20"
                label="Username"
              />
            </VCol>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.email"
                required
                :rules="emailRules"
                label="Email"
                :maxlength="255"
                type="email"
              />
            </VCol>

            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :rules="rules"
                required
                :maxlength="255"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />
              <div class="d-flex align-center mt-1 mb-4">
                <VCheckbox
                  id="privacy-policy"
                  v-model="form.privacyPolicies"
                  inline
                />
                <VLabel
                  for="privacy-policy"
                  style="opacity: 1;"
                >
                  <span class="me-1">I agree to</span>
                  <a
                    href="javascript:void(0)"
                    class="text-primary"
                  >privacy policy & terms</a>
                </VLabel>
              </div>
              <VLabel>
                <VueHcaptcha
                  ref="hCaptcha"
                  sitekey="d81c1918-e893-42aa-9979-202cac1697aa"
                  @verify="onHcaptchaVerify"
                />
              </VLabel>
              <VBtn
                block
                type="submit"
                @click="submitForm"
              >
                Sign up
              </VBtn>
            </VCol>

            <!-- login instead -->
            <VCol
              cols="12"
              class="text-center text-base"
            >
              <span>Already have an account?</span>
              <RouterLink
                class="text-primary ms-2"
                to="login"
              >
                Sign in instead
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
