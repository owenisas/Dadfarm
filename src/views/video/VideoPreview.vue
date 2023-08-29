<template>
  <VSheet
    height="300"
    width="390"
  >
    <VImg
      height="200"
      width="390"
      cover
      alt="Video"
      :src="img"
    />
    <VBtn
      variant="text"
      class="text-link-button font-weight-bold text-capitalize"
    >
      {{ title }}
      <VTooltip
        activator="parent"
        location="bottom"
      >
        {{ title }}
      </VTooltip>
    </VBtn>
  </VSheet>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  // eslint-disable-next-line vue/require-prop-types
  img:{
    required: true,
  },
  title:{
    type:String,
    required:true,
  },
  nav:{
    type:String,
    required: true,
  },
})
</script>

<style scoped>
.text-link-button:hover {
  text-decoration: underline;
}
</style>
