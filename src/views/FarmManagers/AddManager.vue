<template>
  <VDialog
    v-model="localShow"
    @click:outside="close"
  >
    <Local
      :show="dialog"
      @closedialog="onclose"
    />
    <VCard
      class="mx-auto justify-center align-center"
      max-width="600"
    >
      <VCardTitle class="mt-8 text-h6 font-weight-regular">
        Add New Land
      </VCardTitle>
      <VCardText>
        Select "Add your Own Land" if you already have a land or select "Lease a Land" from the Complete Farmer marketplace if you don't own a land.
      </VCardText>
      <div>
        <CustomRadio
          :model-value="selected === 'personal'"
          label="Choose this option to add your own land for cultivation"
          icon="mdi-layers-triple-outline"
          title="Add Personal Farm Manager"
          bgcolor="#DFF5E0"
          @update:modelValue="updateSelection('personal')"
        />
        <CustomRadio
          :model-value="selected === 'marketplace'"
          label="Choose this option to lease land from out marketplace"
          icon="mdi-storefront-outline"
          title="Hire a Farm Manager on Marketplace"
          bgcolor="#F8EFDB"
          @update:modelValue="updateSelection('marketplace')"
        />
        <CustomRadio
          :model-value="selected === 'become'"
          label=""
          icon="mdi-storefront-outline"
          title="Be your own Farm Manager"
          bgcolor="#F8EFDB"
          @update:modelValue="updateSelection('become')"
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
import CustomRadio from '@/views/Lands/CustomRadio.vue'
import { useRouter } from 'vue-router'
import Local from '@/views/Lands/AddLocalLand.vue'

const props = defineProps(  {
  show:{
    type:Boolean,
    required:true,
  },
})
const emit = defineEmits(['closedialog'])
const onclose = ()=>{
  dialog.value = false
}
const dialog = ref(false)
const router = useRouter()
const disabled = ref(true)
const selected = ref(null)
const next = () =>{
  if ( selected.value === "marketplace"){
    router.push({ path: '/marketplace' })
  } else if( selected.value === "personal") {
    router.push({ path: '/' })
  } else {

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

<style scoped>
::v-deep .v-overlay__content {
  width: 500px !important;
}
</style>
