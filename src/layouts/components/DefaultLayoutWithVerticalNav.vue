<script setup>
import DrawerContent from './DrawerContent.vue'
import { VerticalNavLayout } from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar>
      <VSpacer />
      <UserProfile />
    </template>

    <!-- 👉 Drawer content -->
    <template #navigation-drawer-content>
      <DrawerContent />
    </template>
    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>
  </VerticalNavLayout>
</template>
