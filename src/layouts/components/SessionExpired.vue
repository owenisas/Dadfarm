

<template>
  <VDialog
    v-model="close"
    width="500"
  >
    <VCard
      class="pa-4"
    >
      <VCardTitle
        class="headline grey lighten-2"
        primary-title
      >
        <VIcon
          icon="mdi-warning"
        />
        Session Expired
      </VCardTitle>

      <VCardText>
        Your Session Has Expired, Please Login Again
      </VCardText>
      <VCardActions>
        <VSpacer />
        <VBtn
          color="primary"
          to="/login"
          @click='close'
        >
          Login
        </VBtn>
        <VBtn
          color="primary"
          text
          @click="close"
        >
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()
const close = () =>{
  store.commit('setExpired', false)
}
</script>
