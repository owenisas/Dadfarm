<template>
  <VDialog
    v-model="dialog"
    width="500"
  >
    <VCard>
      <VBtn
        color="primary"
        @click="confirm"
      >
        Confirm
      </VBtn>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const props = defineProps({
  value: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['closedialog'])
const dialog = ref(props.value)

watch(props, newProps => {
  dialog.value = newProps.value
})

const close = () => {
  emit('closedialog')
  dialog.value = false
}
</script>
