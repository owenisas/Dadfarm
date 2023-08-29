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
  title:"none",
  img:one,
},
{
  title: "none",
  img: two,
},
{
  title:"none",
  img:three,
},
{
  title:"none",
  img:four,
},
{
  title:"none",
  img:five,
},
{
  title:"none",
  img:six,
},
{
  title:"none",
  img:seven,
},
{
  title:"none",
  img:eight,
},
{
  title:"none",
  img:nine,
},
{
  title:"none",
  img:ten,
},
{
  title:"none",
  img:eleven,
},
{
  title:"none",
  img:twelve,
},
{
  title:"none",
  img:thirteen,
},
{
  title:"none",
  img:fourteen,
},
{
  title:"none",
  img:fifteen,
}]
</script>

<style scoped>

</style>
