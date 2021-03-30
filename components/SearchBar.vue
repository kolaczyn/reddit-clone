<template>
  <div class="cursor-text bg-gray-100 px-4 py-2 w-80 flex items-center hover:bg-white group " @click="focusInput">
    <SearchIcon class="text-gray-500" />
    <input ref="search" type="text" placeholder="Search" class="group-hover:bg-white outline-none px-2 bg-gray-100">
  </div>
</template>

<script>
import Vue from 'vue'
import SearchIcon from '@/components/svg/SearchIcon.vue';
export default Vue.extend({
  components: { SearchIcon },
  methods: {
    focusInput () {
      this.$refs.search.focus()
    }
  }
})
</script>
