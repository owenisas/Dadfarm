<template>
  <div>
    <p>{{ message }}</p>
    <div v-if="isLoggedIn">
      <p>Username: {{ user }}</p>
      <p>Email: {{ id }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const message = ref('Checking login status...')
const isLoggedIn = computed(() => store.state.isLoggedIn)
const user = computed(() => store.state.user) // Parse the user data back into an object
const id = ref(null)
</script>

<route lang="yaml">
meta:
navActiveLink: axios-user_loggedin-tab
</route>
