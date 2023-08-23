<template >
  <Tags loading='loading' suggestions=''></Tags>
</template>

<script>
import { onMounted, onUnmounted } from 'vue'
import Tags from '@/layouts/components/Tags.vue'

export default {
  components: { Tags },
  setup() {
    const handleScroll = () => {
      const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 500
      if (nearBottom) {
        // User has scrolled near the bottom of the page
        // Trigger your function here
        console.log('User has scrolled to the bottom')
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {}
  },
}
</script>

<style scoped>

</style>
