<template>
  <VToolbar />
  <VRow class="match-height">
    <VCol
      v-for="(video, index) in videos"
      :key="index"
      cols="4"
    >
      <VideoPreview
        :img="video.img"
        nav=""
        :title="video.title"
      />
    </VCol>
    <VCol
      cols="12"
      class="d-flex justify-center align-center font-weight-bold pt-3"
    >
      <VBtn

        variant="outlined"
      >
        View More
      </VBtn>
    </VCol>
  </VRow>
</template>

<script setup>
import one from'@/assets/images/video/1.avif'
import two from'@/assets/images/video/2.avif'
import three from'@/assets/images/video/3.avif'
import four from'@/assets/images/video/4.avif'
import five from'@/assets/images/video/5.avif'
import six from'@/assets/images/video/6.avif'
import seven from'@/assets/images/video/7.avif'
import eight from'@/assets/images/video/8.avif'
import nine from'@/assets/images/video/9.avif'
import ten from'@/assets/images/video/10.avif'
import eleven from'@/assets/images/video/11.avif'
import twelve from'@/assets/images/video/12.avif'
import thirteen from'@/assets/images/video/13.avif'
import fourteen from'@/assets/images/video/14.png'
import fifteen from'@/assets/images/video/15.avif'
import VideoPreview from '@/views/video/VideoPreview.vue'

const videos = [{
  title:"Sweet Potato Protocol: Dehaulming Sweet Potatoes",
  img:one,
},
{
  title: "Sweet Potato Protocol: Planting Sweet Potatoes",
  img: two,
},
{
  title:"Onboarding as a Farm Manager",
  img:three,
},
{
  title:"How to Add Yourself as a Farm Manager",
  img:four,
},
{
  title:"Chili Pepper Protocol: Scouting your Chili Pepper Farm",
  img:five,
},
{
  title:"Chili Pepper Protocol: Planting Chili Pepper",
  img:six,
},
{
  title:"Chili Pepper Protocol: Transplanting Chili Pepper",
  img:seven,
},
{
  title:"Chili Pepper Protocol: Harvesting Chili Pepper",
  img:eight,
},
{
  title:"How to Prepare your Land for Farming",
  img:nine,
},
{
  title:"Chili Pepper Protocol: Fertilizer Application",
  img:ten,
},
{
  title:"Getting Started",
  img:eleven,
},
{
  title:"Add Your Own Land",
  img:twelve,
},
{
  title:"Hire a Farm Manager",
  img:thirteen,
},
{
  title:"How To Lease Land",
  img:fourteen,
},
{
  title:"none",
  img:fifteen,
}]
</script>

<style scoped>

</style>
