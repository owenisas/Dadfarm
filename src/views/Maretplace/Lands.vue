<template>
  <VRow no-gutters="">
    <VCol
      v-for="land in lands"
      :key="land"
    >
      <LandPreview
        :location="land.location"
        :price="land.price"
        :img="land.img"
        :details="land.details"
      />
    </VCol>
  </VRow>
</template>

<script setup>
import farm1 from '@/assets/images/farms/farm1.jpg'
import farm2 from '@/assets/images/farms/farm2.jpg'
import farm3 from '@/assets/images/farms/farm3.jpg'
import farm4 from '@/assets/images/farms/farm4.jpg'

import LandPreview from '@/views/Lands/LandPreview.vue'
const lands = [{
  location: "Kam Tin, Hong Kong",
  price: "HKD $20000/acres/year",
  details:["50 acres available","1 acres minimum lease","1 year minimum lease"],
  img: farm3,
},
{
  location: "Sungei Tengah Road, Singapore",
  price: "SGD $5000/acres/year",
  details:["5 acres available","1 acres minimum lease","1 year minimum lease"],
  img: farm2,
},
{
  location: "Nan Shan, Shenzhen",
  price: "RMB 500/square feet/year",
  details:["100000 square feet available","500 square feet minimum lease","1 year minimum lease"],
  img: farm4,
}]
</script>
