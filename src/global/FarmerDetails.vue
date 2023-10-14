<template>
  <VToolbar
    color="#FFFFFF"
    :elevation="8"
    class="d-flex justify-start"
  >
    <VBtn
      variant="text"
      prepend-icon="mdi-arrow-left"
      to="/marketplace"
    >
      back
    </VBtn>
    <div>
      <span>
        Farm Manager Details
      </span>
      <VBtn
        variant="outlined"
        style="width: 150px;"
        prepend-icon="mdi-file-document-check-outline"
      >
        All Requests
      </VBtn>
    </div>
  </VToolbar>
  <VDivider class="ma-3" />
  <VRow>
    <VCol cols="9">
      <VImg
        :src="managerDetail.img"
        cover
        height="600"
      />
      <VCard class="mt-4">
        <VTabs
          v-model="currentTab"
        >
          <VTab
            v-for="(tab, index) in tabs"
            :key="index"
            :value="tab.tab"
          >
            <div>
              {{ tab.title }}
            </div>
          </VTab>
        </VTabs>
        <VWindow v-model="currentTab">
          <VWindowItem value="experience">
            <VCardTitle class="d-flex justify-space-between text-h6">
              <span>
                Years Of Experience
              </span>
              <span class="pl-2">
                {{ managerDetail.experience }}
              </span>
            </VCardTitle>
            <VDivider />
            <VRow>
              <VCol
                cols="6"
              >
                <VContainer
                  class="d-flex flex-column justify-space-between"
                  style="height: 70px;"
                >
                  <div class="font-weight-bold">
                    Crop Name
                  </div>
                  <div>
                    {{ managerDetail.crop }}
                  </div>
                </VContainer>
                <VContainer
                  class="d-flex flex-column justify-space-between"
                  style="height: 70px;"
                >
                  <div class="font-weight-bold">
                    Largest Acreage
                  </div>
                  <div>
                    {{ managerDetail.largest }} acre(s)
                  </div>
                </VContainer>
              </VCol>
              <VCol
                cols="6"
              >
                <VContainer
                  class="d-flex flex-column justify-space-between"
                  style="height: 70px;"
                >
                  <div class="font-weight-bold">
                    Number of cycles
                  </div>
                  <div>
                    {{ managerDetail.cycles }} farm cycle(s)
                  </div>
                </VContainer>
                <VContainer
                  class="d-flex flex-column justify-space-between"
                  style="height: 70px;"
                >
                  <div class="font-weight-bold">
                    Largest Yield
                  </div>
                  <div>
                    {{ managerDetail.yield }} tonne(s)
                  </div>
                </VContainer>
              </VCol>
            </VRow>
          </VWindowItem>
          <VWindowItem value="offer">
            <div
              v-for="(item, key, index) in managerDetail.offer"
              :key="index"
              class="pa-3"
            >
              <div class="font-weight-bold">
                {{ key }}
              </div>
              <VSpacer />
              <div>
                {{ item }}
              </div>
              <VDivider />
            </div>
          </VWindowItem>
          <VWindowItem value="info">
            <div
              class="pa-3"
            >
              <div class="font-weight-bold">
                Gender
              </div>
              <VSpacer />
              <div>
                {{ managerDetail.sex }}
              </div>
              <VDivider />
            </div>
          </VWindowItem>
        </VWindow>
      </VCard>
    </VCol>
    <VCol cols="3">
      <VCard>
        <VCardTitle>
          {{ managerDetail.name }}
        </VCardTitle>
        <div>
          <VCardText class="font-weight-bold">
            <VIcon
              class="mb-1"
              icon="mdi-file-document-outline"
            />
            {{ managerDetail.worktype }}
          </VCardText>
          <VDivider />
          <VCardText class="font-weight-bold">
            <VIcon
              class="mb-1"
              icon="mdi-briefcase-outline"
            />
            {{ managerDetail.experience }} year(s) of farm experience
          </VCardText>
          <VDivider />
          <VCardText class="font-weight-bold">
            <VIcon
              class="mb-1"
              icon="mdi-earth"
            />
            {{ managerDetail.ethnics.join(", ") }}
          </VCardText>
          <VDivider />
        </div>
        <VBtn
          class="ma-3"
          width="260"
        >
          Hire this Manager
        </VBtn>
      </VCard>
    </VCol>
  </VRow>
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
const goBack = () => {
  console.log('Attempting to go back...')

  // Debugging: Print the current route
  console.log('Current route:', router.currentRoute.value)

  router.go(-1)

  // Debugging: Print the route after attempting to go back
  console.log('After go(-1), current route:', router.currentRoute.value)
}
const currentTab = ref(null)
const managerDetail = ref(null)
const managerDetails = [{
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
const localcompare = () =>{
  console.log(props.id)
  managerDetail.value = managerDetails.find(detail => detail.id === props.id)
}
onBeforeMount(()=>{
  localcompare()
})
</script>

