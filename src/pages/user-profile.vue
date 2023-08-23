<script setup>
import { useRoute } from 'vue-router'
import AccountOverview from '@/views/pages/user-profile/AccountOverview.vue'
import AccountSettingsNotification from '@/views/pages/account-settings/AccountSettingsNotification.vue'
import UserActivity from '@/views/pages/user-profile/UserActivity.vue'
import TimeLine from '@/views/pages/user-profile/TimeLine.vue'
import PostPreview from '@/views/pages/user-profile/PostPreview.vue'
const route = useRoute()
const activeTab = ref(route.params.tab)

// tabs
const tabs = [
  {
    title: 'Account',
    icon: 'mdi-account-outline',
    tab: 'account',
  },
  {
    title: 'Activity',
    icon: 'mdi-account-clock',
    tab: 'security',
  },
  {
    title: 'Notifications',
    icon: 'mdi-bell-outline',
    tab: 'notification',
  },
]
</script>

<template>
  <div>
    <VTabs
      v-model="activeTab"
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
        <div
          class="d-none d-sm-block"
        >
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
      <VWindowItem value="account">
        <AccountOverview />
      </VWindowItem>

      <!-- Security -->
      <VWindowItem value="security">
        <TimeLine />
      </VWindowItem>

      <!-- Notification -->
      <VWindowItem value="notification">
        <AccountSettingsNotification />
      </VWindowItem>
    </VWindow>
  </div>
</template>

<route lang="yaml">
meta:
navActiveLink: pages-user-profile-tab
</route>
