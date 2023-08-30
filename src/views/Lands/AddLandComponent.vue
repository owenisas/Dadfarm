<template>
  <VDialog
    v-model="localShow"
    @click:outside="close"
  >
    <VCard
      class="mx-auto justify-center align-center"
      max-width="500"
    >
      <VCardTitle class="text-h6 font-weight-regular justify-space-between">
        Add New Land
      </VCardTitle>
      <VCardText>
        Select "Add your Own Land" if you already have a land or select "Lease a Land" from the Complete Farmer marketplace if you don't own a land.
      </VCardText>
      <VRadioGroup>
        <VRadio
          class="reverse-radio"
          label="Add your Own Land"
          value="local"
        />
        <VRadio
          class="reverse-radio"
          label="Lease a Land"
          value="marketplace"
        />
      </VRadioGroup>
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

const props = defineProps(  {
  show:{
    type:Boolean,
    required:true,
  },
})

const emit = defineEmits(['closedialog'])
const close = () => {
  localShow.value = false
  emit('closedialog')
}
const localShow = ref(props.show)

watch(
  () => props.show,
  newVal => {
    localShow.value = newVal
  },
)
</script>

<style>
.reverse-radio .v-input--selection-controls__input,
.reverse-radio .v-input--selection-controls__ripple {
  order: 2;
}
.reverse-radio .v-label {
  order: 1;
}
</style>
