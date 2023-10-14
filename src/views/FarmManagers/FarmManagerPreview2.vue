<template>
  <VCard
    max-height="250"
    @mouseover="show_btn = true"
    @mouseout="show_btn = false"
  >
    <VRow>
      <VCol
        cols="2"
        class="mr-6"
      >
        <VAvatar
          class="ma-2"
          size="220"
          rounded="0"
        >
          <VImg
            :src="manager.img"
            cover
          />
        </VAvatar>
      </VCol>
      <VCol cols="7">
        <VCardTitle class="pt-4 font-weight-bold">
          {{ manager.name }}
        </VCardTitle>
        <VDivider />
        <VRow>
          <VCol cols="6"> 
            <VCardTitle>
              Assigned to <RouterLink to="lands">
                <div>{{ manager.assigned }}</div>
              </RouterLink>
            </VCardTitle>
          </VCol>
          <VCol cols="6">
            <VCardTitle>
              Years of Experience:
              <div>{{ manager.experience }}</div>
            </VCardTitle>
          </VCol>
          <VCol cols="6">
            <VCardTitle>
              Contract Type 
              <div>{{ manager.worktype }}</div>
            </VCardTitle>
          </VCol>
          <VCol cols="6">
            <VCardTitle>
              Farms Cultivated: 
              <div>0</div>
            </VCardTitle>
          </VCol>
        </VRow>
      </VCol>
      <VCol class="d-flex align-center justify-center">
        <VBtn v-show="show_btn">
          View Details >
        </VBtn>
      </VCol>
    </VRow>
  </VCard>
  <AssignedDetails v-model="showDialog" />
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import AssignedDetails from '@/views/FarmManagers/AssignedDetails.vue'
const props = defineProps({
// eslint-disable-next-line vue/require-prop-types
  manager:{
    required: true,
  },
})
const showDialog = ref(false)
const show_btn = ref(false)
</script>

<style scoped>

</style>
