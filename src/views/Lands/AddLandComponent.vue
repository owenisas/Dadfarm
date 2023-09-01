<template>
  <VDialog
    v-model="localShow"
    @click:outside="close"
  >
    <VCard
      class="mx-auto justify-center align-center"
      max-width="500"
    >
      <VCardTitle class="mt-3 text-h6 font-weight-regular">
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
          icon="mdi-layers-triple-outline"
          title="Add your Own Land"
          bgcolor="#DFF5E0"
          @update:modelValue="updateSelection('local')"
        />
        <VDivider />
        <CustomRadio
          :model-value="selected === 'marketplace'"
          label="Choose this option to lease land from out marketplace"
          icon="mdi-storefront-outline"
          title="Lease Land from Marketplace"
          bgcolor="#F8EFDB"
          @update:modelValue="updateSelection('marketplace')"
        />
        <div class="d-flex justify-center mb-3">
          <VBtn
            :disabled="disabled"
            append-icon="mdi-arrow-right"
            @click="next"
          >
            Continue
          </VBtn>
        </div>
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
