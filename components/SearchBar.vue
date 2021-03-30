<template>
  <div>
    <div
      class="cursor-text bg-gray-100 px-4 py-2 w-80 flex items-center hover:bg-white group "
      @click="focusInput"
    >
      <SearchIcon class="text-gray-500" />
      <input
        ref="search"
        v-model="inputText"
        type="text"
        placeholder="Search"
        class="group-hover:bg-white outline-none px-2 bg-gray-100 flex-1"
      >
      <button v-if="!!inputText" class="focus:outline-none p-0.5 text-gray-500 hover:text-blue-400 focus:text-blue-500" @click="clearInput">
        <CloseIcon class="cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SearchIcon from '@/components/svg/SearchIcon.vue'
import CloseIcon from '@/components/svg/CloseIcon.vue'

export default Vue.extend({
  components: { SearchIcon, CloseIcon },
  data () {
    return {
      inputText: ''
    }
  },
  methods: {
    focusInput () {
      this.$refs.search.focus()
    },
    clearInput () {
      this.inputText = ''
    }
  }
})
</script>
