<template>
  <div>
    <VBtn />
  </div>
  <div>
    <VTabs
      v-model="activeTab"
      show-arrows
    >
      <VTab
        v-for="item in tabs"
        :key="item.tab"
        :value="item.tab"
      >
        <div class="d-none d-sm-block">
          {{ item.title }}
        </div>
      </VTab>
    </VTabs>
    <VDivider />

    <VWindow
      v-model="activeTab"
      class="mt-5 disable-tab-transition"
      :touch="false"
    >
      <!-- Account -->
      <VWindowItem value="account" />

      <!-- Security -->
      <VWindowItem value="security" />
    </VWindow>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'All',
    tab: 'all',
  },
  {
    title: 'Approved',
    tab: 'approved',
  },
  {
    title: 'Unapproved',
    tab: 'unapproved',
  },
]
</script>
