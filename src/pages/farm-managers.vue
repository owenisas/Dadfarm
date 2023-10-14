<template>
  <AddManager
    :show="show"
    @closedialog="onclose"
  />
  <VRow>
    <VCol
      cols="6"
    >
      <VCardTitle>Assigned Farm Manageres(1)</VCardTitle>
    </VCol>
    <VCol
      cols="6"
      class="d-flex justify-end"
    >
      <VBtn
        @click='show = !show'
        style="width: 150px;"
      >
        + Add Manager
      </VBtn>
    </VCol>
  </VRow>
  <VTabs
    v-model="currentTab"
    show-arrows
  >
    <VTab
      v-for="(item, index) in tabs"
      :key="index"
      :value="index"
    >
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
      <Assigned />
    </VWindowItem>

    <VWindowItem :value="1">
      <p>test2</p>
    </VWindowItem>

    <VWindowItem :value="2">
      <p>test3</p>
    </VWindowItem>
  </VWindow>
</template>

<script setup>
import Assigned from '@/views/FarmManagers/Assigned.vue'
import AddManager from '@/views/FarmManagers/AddManager.vue'

const show = ref(false)
const onclose = () =>{
  show.value = false
}
const tabs = [
  { title: 'Assigned' },
  { title: 'Approved' },
  { title: 'Pending' },
  { title: 'Failed' },
]
const currentTab = ref(null)
</script>
