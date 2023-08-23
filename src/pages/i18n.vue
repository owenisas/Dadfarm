<template>
  <div>
    <p>{{ t('message.greeting') }}</p>
    <p>{{ t('message.goodbye') }}</p>
    <p>{{ test }}</p>
  </div>
</template>

// MyComponent.vue
<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const test = navigator.language

function changeLanguage(newLocale) {
  locale.value = newLocale
}
</script>
