<template>
  <div>
    <Test4
      :show="dialog"
    />
    <CustomRadio
      :model-value="selected === 'local'"
      label="Choose this option to add your own land for cultivation"
      icon="mdi-heart"
      title="Add your Own Land"
      @update:modelValue="updateSelection('local')"
    />
    <VDivider />
    <CustomRadio
      :model-value="selected === 'marketplace'"
      label="Choose this option to lease land from out marketplace"
      icon="mdi-heart"
      title="Lease Land from Marketplace"
      @update:modelValue="updateSelection('marketplace')"
    />
    <VBtn
      :disabled="disabled"
      @click="next"
    >
      Continue
    </VBtn>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Test4 from '@/views/Lands/AddLocalLand.vue'

const dialog = ref(false)
const router = useRouter()
const disabled = ref(true)
const selected = ref(null)
const next = () =>{
  if ( selected.value === "marketplace"){
    router.push({ path: '/marketplace' })
  } else {
    dialog.value = true
  }
}
const updateSelection = option => {
  selected.value = option
  disabled.value = false
}
</script>
