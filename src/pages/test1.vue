<template>
  <VTypical
    :steps="['Fucking', 1000, 'Fucking Awesome!', 500, 'Fucking Awesome! Aha :-) 👋', 1000]"
    :loop="Infinity"
    wrapper="h3"
  />
  <button @click="show = !show">
    Toggle
  </button>
  <Transition name="slide-fade">
    <p v-if="show">
      hello
    </p>
  </Transition>
</template>

<script setup>
import { VTypical } from 'vue-typical'
const show = ref(false)
</script>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 10s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(200px) translateY(200px);
  opacity: 0;
}
</style>
