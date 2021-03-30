<template>
  <div class="min-h-screen bg-gray-800">
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
