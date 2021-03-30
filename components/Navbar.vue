<template>
  <div>
    <nav class="w-full bg-white text-blue-700">
      <nuxt-link to="/">
        home
      </nuxt-link>
      <nuxt-link to="/login">
        login
      </nuxt-link>
      <nuxt-link to="/r/vue">
        r/vue
      </nuxt-link>
      <nuxt-link to="/r/react">
        r/react
      </nuxt-link>
    </nav>
    <SearchBar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '@/components/SearchBar.vue'

export default Vue.extend({
  components: { SearchBar }
})
</script>