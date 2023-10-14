<template>
<div>ddd</div>
</template>

<script setup>
import manager2 from '@/assets/images/farmmanagers/manager2.jpeg'
import manager3 from '@/assets/images/farmmanagers/manager3.jpg'
import manager1 from '@/assets/images/farmmanagers/manager1.jpeg'
import manager4 from '@/assets/images/farmmanagers/manager4.jpg'
import manager5 from '@/assets/images/farmmanagers/manager5.jpg'
import manager6 from '@/assets/images/farmmanagers/manager6.jpg'
import manager7 from '@/assets/images/farmmanagers/manager7.jpg'

import { useRoute } from 'vue-router'

const props = defineProps({
  id:{
    type:String,
    required:true,
  },
})
const offerpage = [
  "Contract Type\n", "Compensation Type\n", "Payment Cycle\n", "Amount", "Accommodation\n", "Equity Percentage\n",
]
const router = useRoute()
const tabs = [
  {
    title: 'Experience Info',
    tab: 'experience',
  },
  {
    title: 'Ideal Offer',
    tab: 'offer',
  },
  {
    title: 'Personal Info',
    tab: 'info',
  },
]
const currentTab = ref(null)
const landDetail = ref(null)
const landDetails = [

]
</script>
