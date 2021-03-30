<template>
  <div class="h-screen bg-gray-400">
    <Navbar />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
export default Vue.extend({
    component: {
    Navbar,
    }
})
</script>
