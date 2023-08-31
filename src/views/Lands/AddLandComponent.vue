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
      <div>
        <Local
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
    </VCard>
  </VDialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'
import CustomRadio from './CustomRadio.vue'
import { useRouter } from 'vue-router'
import Local from '@/views/Lands/AddLocalLand.vue'

const props = defineProps(  {
  show:{
    type:Boolean,
    required:true,
  },
})
const emit = defineEmits(['closedialog'])
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
.v-overlay__content {
  width: 500px !important;
}
</style>
