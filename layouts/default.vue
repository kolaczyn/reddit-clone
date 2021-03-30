<template>
  <div class="h-screen bg-gray-400">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  component: {
    Navbar
  }
}
</script>
