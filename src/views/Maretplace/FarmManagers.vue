<template>
  <VRow no-gutters>
    <VCol
      v-for="(manager,index) in managers"
      :key="index"
      cols="4"
    >
      <FarmManagerPreview
        :worktype="manager.worktype"
        :experience="manager.experience"
        :ethnics="manager.ethnics"
        :name="manager.name"
        :img="manager.img"
      />
    </VCol>
  </VRow>
</template>

<script setup>
import farm1 from '@/assets/images/farms/farm1.jpg'
import FarmManagerPreview from '@/views/FarmManagers/FarmManagerPreview.vue'
import manager1 from '@/assets/images/farmmanagers/manager1.jpeg'
import manager2 from '@/assets/images/farmmanagers/manager2.jpeg'
import manager3 from '@/assets/images/farmmanagers/manager3.jpg'

const managers = [{
  name:"Emmanuel Boakye",
  worktype: "Full time",
  experience: "3",
  ethnics:["English","Fante"],
  img: manager2,
},
{
  name:"Gideon Ofosu",
  worktype: "Full time",
  experience: "8",
  ethnics:["English","Twi"],
  img: manager3,
},
{
  name:"Patrick",
  worktype: "Full time",
  experience: "10",
  ethnics:["English","Cantonese","Chinese"],
  img: manager1,
}]
</script>
