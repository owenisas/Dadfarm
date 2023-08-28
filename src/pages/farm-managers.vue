<template>
  <VRow>
    <VCol
      cols="6"
    >
      <VCardTitle>Assigned Farm Manageres(0)</VCardTitle>
    </VCol>
    <VCol
      cols="6"
      class="d-flex justify-end"
    >
      <VBtn
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
      <VCol>
        <div class="d-flex justify-center align-center font-weight-bold">
          Farm Managers who have been assigned to a farm will show here.
        </div>
      </VCol>
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
const tabs = [
  { title: 'Assigned' },
  { title: 'Approved' },
  { title: 'Pending' },
  { title: 'Failed' },
]
const currentTab = ref(null)
</script>
