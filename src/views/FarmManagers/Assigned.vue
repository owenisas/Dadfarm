<template>
  <VCol>
    <div
      v-if="nomanager"
      class="d-flex justify-center align-center font-weight-bold"
    >
      Farm Managers who have been assigned to a farm will show here.
    </div>
    <FarmManagerPreview2
      v-for="manager in hired"
      v-else
      :key="manager"
      :manager="manager"
    />
  </VCol>
</template>

<script setup>
import FarmManagerPreview2 from '@/views/FarmManagers/FarmManagerPreview2.vue'
import manager5 from '@/assets/images/farmmanagers/manager5.jpg'

const nomanager = ref(false)
const hired = [{
  id: "2",
  name:"Man Kit\n",
  sex:"Male",
  worktype: "Full time",
  offer:
    {
      "Contract Type\n": "Full Time",
      "Compensation Type\n": "Payroll",
      "Payment Cycle\n": "Monthly",
      "Amount": "RMB 5000\n",
      "Accommodation\n": "No",
      "Equity Percentage\n": "N/A",
    },
  experience: "10",
  crop:"Strawberries, Greens, Melons\n",
  largest:"10.00",
  cycles:"3",
  yield:"10",
  assigned:"Nan Shan, Shenzhen",
  ethnics:["English", "Cantonese","Mandarin"],
  img: manager5,
}]
</script>

