<script setup>
import logo from '@/assets/dadlogo.png'
import {
  VerticalNavLink,
  VerticalNavSectionTitle,
} from '@layouts'
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const vuetifyTheme = useTheme()
const upgradeBanner = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? upgradeBannerLight : upgradeBannerDark
})
</script>

<template>
  <!-- 👉 Nav header -->
  <div class="nav-header">
    <RouterLink
      to="/"
      class="app-logo d-flex align-center gap-x-3 app-title-wrapper"
    >
      <VImg
        :src="logo"
        cover=""
        style="height: 70px"
      />
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>
    <VerticalNavLink
      :item="{
        title: 'Dashboard',
        to: 'index',
        icon: { icon: 'mdi-home-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Lands',
        to: 'lands',
        icon: { icon: 'mdi-layers-triple-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Farm Managers',
        to: 'farm-managers',
        icon: { icon: 'mdi-account-outline' }
      }"
    />
    <!-- 👉 Pages -->
    <VerticalNavLink
      :item="{
        title: 'Farms',
        to: 'farms',
        icon: { icon: 'mdi-tractor' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Marketplace',
        to: 'marketplace',
        icon: { icon: 'mdi-storefront-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Orders',
        to: 'orders',
        icon: { icon: 'mdi-order-bool-ascending-variant' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Help Videos',
        to: 'videos',
        icon: { icon: 'mdi-youtube' }
      }"
    />
  </ul>
</template>

<style lang="scss">
// .v-navigation-drawer {
//   height: 100%;

//   .v-navigation-drawer__content {
//     display: flex;
//     flex-direction: column;

//     > ul {
//       flex-grow: 1;
//     }
//   }
// }

.upgrade-banner {
  margin-top: auto;
  // position: absolute;
  // bottom: 13px;
  // left: 50%;
  // transform: translateX(-50%);
}
</style>
