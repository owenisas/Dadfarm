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

const managers = [{
  id: "1",
  name:"Emmanuel Boakye",
  worktype: "Full time",
  experience: "3",
  ethnics:["English","Fante"],
  img: manager2,
},
{
  id: "2",
  name:"Gideon Ofosu",
  worktype: "Full time",
  experience: "8",
  ethnics:["English","Twi"],
  img: manager3,
},
{
  id: "3",
  name:"Patrick",
  worktype: "Full time",
  experience: "10",
  ethnics:["English","Cantonese","Chinese"],
  img: manager1,
}]
</script>
