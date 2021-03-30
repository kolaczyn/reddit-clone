<template>
  <div class="bg-white w-full py-2">
    <div class="container mx-auto flex items-center justify-between">
      <nav>
        <nuxt-link to="/" class="font-bold text-red-400">
          reddit
        </nuxt-link>
      </nav>
      <SearchBar />
      <nuxt-link to="/login">
        <Button>
          Log In
        </Button>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '@/components/SearchBar.vue'
import Button from '@/components/ui/Button.vue'

export default Vue.extend({
  components: { SearchBar, Button }
})
</script>
