<template>
  <VCol>
    <LandPreview
      :location="land.location"
      :price="land.price"
      :img="farm1"
      :details="land.details"
    />
  </VCol>
</template>

<script setup>
import farm1 from '@/assets/images/farms/farm1.jpg'
import LandPreview from '@/views/Lands/LandPreview.vue'
const land = {
  location: "Afram Plains, Chana",
  price: "GH$ 500 / acres / year",
  details:["339 acres available","100 acres minimum lease","1years minimum lease"],
  img: farm1,
}
</script>
