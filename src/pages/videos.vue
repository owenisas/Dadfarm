<template>
  <VToolbar />
  <VRow class="match-height">
    <VCol
      v-for="i in 4"
      :key="i"
      cols="4"
    >
      <VideoPreview />
    </VCol>
  </VRow>
</template>

<script setup>

import VideoPreview from '@/views/video/VideoPreview.vue'
</script>

<style scoped>

</style>
