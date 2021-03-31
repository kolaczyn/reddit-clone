<template>
  <button class="bg-blue-600 hover:bg-blue-500 transition duration-200 font-bold text-white py-2 px-6 rounded-full" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    handleClick: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
})
</script>
