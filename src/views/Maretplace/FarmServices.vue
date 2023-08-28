<template>
  <VRow>
    <VCol
      v-for="(service,index) in services"
      :key="index"
      cols="4"
    >
      <VCard
        max-width="350"
      >
        <VImg
          :src="service.img"
          height="250"
          width="350"
          cover
          alt='Service Image'
        />
        <VCardTitle class="pt-4 font-weight-bold">
          {{ service.name }}
        </VCardTitle>
        <VCardActions>
          <VBtn
            variant="text"
          >
            Learn More
          </VBtn>
        </VCardActions>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>
import irrigation from "@/assets/images/service/irrigation.jpg"
import drone from "@/assets/images/service/drone.jpg"

const services = [
  {
    name:"Irrigation",
    img:irrigation,
  },
  {
    name:"Drone Services",
    img: drone,
  },
  {

  },
]
</script>

