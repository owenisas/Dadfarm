<template>
  <VCard
    max-width="350"
  >
    <RouterLink :to="path">
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
    </RouterLink>
  </VCard>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
import router from '@/router'

const props = defineProps({
  // eslint-disable-next-line vue/require-prop-types
  img:{
    required: true,
  },
  id:{
    required:true,
    type:String,
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
const path = ref("/marketplace/managers/" + props.id)
</script>
