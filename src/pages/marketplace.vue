<template>
  <VRow>
    <VCol
      cols="6"
    >
      <VCardTitle>Marketplace</VCardTitle>
    </VCol>
    <VCol
      cols="6"
      class="d-flex justify-end"
    >
      <VBtn
        style="width: 150px;"
      >
        + Add Land
      </VBtn>
    </VCol>
  </VRow>
  <VTabs
    v-model="currentTab"
    show-arrows
  >
    <VTab
      v-for="item in tabs"
      :key="item.icon"
      :value="item.tab"
    >
      <VIcon
        size="20"
        start
        :icon="item.icon"
      />
      <div class="d-none d-sm-block">
        {{ item.title }}
      </div>
    </VTab>
  </VTabs>
  <VDivider />

  <VWindow
    v-model="currentTab"
    class="mt-5 disable-tab-transition"
    :touch="false"
  >
    <VWindowItem :value="0">
      <Lands />
    </VWindowItem>

    <VWindowItem :value="1">
      <FarmManagers/>
    </VWindowItem>

    <VWindowItem :value="2" />
  </VWindow>
</template>

<script setup>
import Lands from '@/views/Maretplace/Lands.vue'
import FarmerDetails from '@/views/Maretplace/FarmerDetails.vue'
import FarmManagers from '@/views/Maretplace/FarmManagers.vue'
import Inputs from '@/views/Maretplace/Inputs.vue'
import Tools from '@/views/Maretplace/Tools.vue'
import FarmServices from '@/views/Maretplace/FarmServices.vue'


const currentTab = ref(null)

const tabs = [
  {
    title: 'Lands',
    icon: 'mdi-layers-triple-outline',
  },
  {
    title: 'Farm Managers',
    icon: 'mdi-account-outline',

  },
  {
    title: 'Farm Services',
    icon: 'mdi-weather-pouring',
  },
  {
    title: 'Tools/Equipments',
    icon: 'mdi-tractor',
  },
  {
    title: 'Inputs',
    icon: 'mdi-layers-triple-outline',
  },
]
</script>

