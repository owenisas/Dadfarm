<template>
  <CustomRadio
    :model-value="selected"
    label="Agree to Terms"
    icon="fas fa-info-circle"
    @update:modelValue="selected = $event"
  />
</template>

<script setup>
import { ref } from 'vue'
import CustomRadio from './CustomRadio.vue'

const selected = ref(false)
</script>
