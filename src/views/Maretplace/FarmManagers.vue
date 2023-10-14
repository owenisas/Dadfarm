<template>
  <VRow no-gutters>
    <VCol
      v-for="(manager,index) in managers"
      :key="index"
      cols="4"
    >
      <FarmManagerPreview
        :id="manager.id"
        :worktype="manager.worktype"
        :experience="manager.experience"
        :ethnics="manager.ethnics"
        :name="manager.name"
        :img="manager.img"
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
import FarmManagerPreview from '@/views/FarmManagers/FarmManagerPreview.vue'
import manager1 from '@/assets/images/farmmanagers/manager1.jpeg'
import manager2 from '@/assets/images/farmmanagers/manager2.jpeg'
import manager3 from '@/assets/images/farmmanagers/manager3.jpg'
import manager4 from '@/assets/images/farmmanagers/manager4.jpg'
import manager5 from '@/assets/images/farmmanagers/manager5.jpg'
import manager6 from '@/assets/images/farmmanagers/manager6.jpg'
import manager7 from '@/assets/images/farmmanagers/manager7.jpg'

const managers = [{
  id: "1",
  name:"Sok Lin",
  sex:"Female",
  worktype: "Full time",
  offer:
    {
      "Contract Type\n": "Full Time",
      "Compensation Type\n": "Payroll",
      "Payment Cycle\n": "Monthly",
      "Amount": "HKD $23000\n",
      "Accommodation\n": "No",
      "Equity Percentage\n": "N/A",
    },
  experience: "5",
  crop:"Leafy Greens, Beans, Melons",
  largest:"5.00",
  cycles:"3",
  yield:"3",
  ethnics:["Cantonese","Mandarin"],
  img: manager4,
},
{
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
  ethnics:["English", "Cantonese","Mandarin"],
  img: manager5,
},
{
  id: "3",
  name:"Lina Leung\n",
  sex:"Female",
  worktype: "Full time",
  offer:
      {
        "Contract Type\n": "Full time / Part time\n",
        "Compensation Type\n": "Payroll",
        "Payment Cycle\n": "Monthly",
        "Amount": "HKD $18000\n",
        "Accommodation\n": "No",
        "Equity Percentage\n": "N/A",
      },
  experience: "20",
  crop:"Leafy Greens, Peppers, Beans\n",
  largest:"5.00",
  cycles:"4",
  yield:"3",
  ethnics:["Mandarin"],
  img: manager6,
},
{
  id: "4",
  name:"Denis Ong \n",
  sex:"Male",
  worktype: "Full time",
  offer:
      {
        "Contract Type\n": "Full Time",
        "Compensation Type\n": "Payroll",
        "Payment Cycle\n": "Monthly",
        "Amount": "SGD $4000",
        "Accommodation\n": "No",
        "Equity Percentage\n": "N/A",
      },
  experience: "15",
  crop:"Salad greens, Herbs \n",
  largest:"10.00",
  cycles:"8",
  yield:"2",
  ethnics:["English", "Thai","Mandarin"],
  img: manager7,
}]
</script>
