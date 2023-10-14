<template>
  <VCard
    max-width="650"
  >
    <VRow>
      <VCol cols="7">
        <VImg
          :src="land.img"
          height="350"
          width="400"
          cover
        >
          <VTooltip
            activator="parent"
            location="bottom"
          >
            Total value harvested: {{ land.harvested }}
          </VTooltip>
        </VImg>
      </VCol>
      <VCol cols="5">
        <VCardSubtitle class="pt-3 font-weight-bold text-h6">
          Leased
        </VCardSubtitle>
        <VCardText class="font-weight-black">
          {{ land.lease }}
        </VCardText>
        <VCardText class="font-weight-black">
          {{ land.period }}
        </VCardText>
        <VCardSubtitle class="pt-3 font-weight-bold text-h6">
          Current Crops
        </VCardSubtitle>
        <VCardText>
          <div
            v-for="(crop, key) in land.crops"
            :key="key"
          >
            <div class="font-weight-bold">
              {{ key }}:
            </div>
            {{ crop }}
          </div>
        </VCardText>
        <VCardSubtitle class="pt-3 font-weight-bold text-h6">
          Insurance
        </VCardSubtitle>
        <VCardText class="font-weight-black">
          Available, {{ land.insurance }}
        </VCardText>
      </VCol>
      <VCol cols="5">
        <VCardTitle class="mb-3">
          {{ land.location }}
        </VCardTitle>
      </VCol>
      <VCol
        cols="7"
      >
        <VCardTitle class="d-flex mb-3 justify-end">
          In Charged Manager:
          <RouterLink :to="path">
            <div>
              {{ land.manager }}
            </div>
          </RouterLink>
        </VCardTitle>
      </VCol>
    </VRow>
  </VCard>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  // eslint-disable-next-line vue/require-prop-types
  land:{
    required: true,
  },
})
const path = "/marketplace/managers/"+props.land.managerid
</script>
