<template>
  <div>
    <div
      :class="['cursor-text px-4 py-2 w-full flex items-center hover:bg-white group border hover:border-blue-400 rounded', focus ? 'bg-white' : 'bg-gray-100', focus && 'border-blue-400']"
      @click="focusInput"
    >
      <IconSearch class="text-gray-500" />
      <input
        ref="search"
        v-model="inputText"
        type="text"
        placeholder="Search"
        :class="['group-hover:bg-white outline-none px-2 flex-1', focus ? 'bg-white' : 'bg-gray-100']"
        @focus="focus=true"
        @blur="focus=false"
      >
      <button v-if="!!inputText" class="focus:outline-none p-0.5 text-gray-500 hover:text-blue-400 focus:text-blue-500" @click="clearInput">
        <IconClose class="cursor-pointer" />
      </button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      inputText: '',
      // I keep track if the input if focus, so I can style the component appropriately
      focus: false
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
