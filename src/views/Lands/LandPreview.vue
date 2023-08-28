<template>
  <VCard
    max-width="350"
  >
    <VImg
      :src="img"
      height="200"
      width="350"
      cover
    />
    <VCardSubtitle class="pt-4 font-weight-bold">
      {{ location }}
    </VCardSubtitle>

    <VCardText>
      <div
        v-for="detail in details"
        :key="detail"
      >
        {{ detail }}
      </div>
    </VCardText>
    <VCardTitle>
      {{ price }}
    </VCardTitle>
  </VCard>
</template>

<script setup>
import { ref, defineProps, defineEmits } from 'vue'
const props = defineProps({
  // eslint-disable-next-line vue/require-prop-types
  img:{
    required: true,
  },
  details:{
    type:Array,
    required: true,
  },
  price:{
    type:String,
    required: true,
  },
  location:{
    type:String,
    required: true,
  },
})
</script>
