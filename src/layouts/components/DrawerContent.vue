<script setup>

import logo from '@/assets/logo.svg?raw'
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
      <!-- ℹ️ You can also use img tag or VImg here -->
      <div v-html="logo" />

      <Transition name="vertical-nav-app-title">
        <h1 class="font-weight-semibold leading-normal text-xl text-uppercase">
          Owenisas
        </h1>
      </Transition>
    </RouterLink>
  </div>

  <!-- 👉 Nav items -->
  <ul>
    <VerticalNavLink
      :item="{
        title: 'DashBoard',
        to: 'index',
        icon: { icon: 'mdi-home-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Lands',
        to: 'account-settings',
        icon: { icon: 'mdi-layers-triple-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Farm Managers',
        to: 'user-profile',
        icon: { icon: 'mdi-account-outline' }
      }"
    />
    <!-- 👉 Pages -->
    <VerticalNavLink
      :item="{
        title: 'Farms',
        to: 'login',
        target: '_blank',
        icon: { icon: 'mdi-tractor' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Marketplace',
        to: 'register',
        target: '_blank',
        icon: { icon: 'mdi-storefront-outline' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Orders',
        to: 'typography',
        icon: { icon: 'mdi-order-bool-ascending-variant' }
      }"
    />
    <VerticalNavLink
      :item="{
        title: 'Help Videos',
        to: 'icons',
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
