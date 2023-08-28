<template>
  <VCard
    max-width="350"
  >
    <VImg
      :src="img"
      height="250"
      width="350"
      cover

    />
    <VCardTitle class="pt-4 font-weight-bold">
      {{ name }}
    </VCardTitle>
    <VCardSubtitle class="pt-4 font-weight-bold">
      {{ worktype }}
    </VCardSubtitle>
    <VCardSubtitle class="pt-4 font-weight-bold">
      {{ experience }} Years of Experience
    </VCardSubtitle>
    <VCardActions>
      <div class="text-center">
        <VChip
          v-for="(ethnic,index) in ethnics"
          :key="index"
          class="ma-2"
          label
        >
          {{ ethnic }}
        </VChip>
      </div>
    </VCardActions>
  </VCard>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  // eslint-disable-next-line vue/require-prop-types
  img:{
    required: true,
  },
  name:{
    type:String,
    required:true,
  },
  ethnics:{
    type:Array,
    required: true,
  },
  experience:{
    type:String,
    required: true,
  },
  worktype:{
    type:String,
    required: true,
  },
})
</script>
