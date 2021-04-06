<template>
  <button
    class="flex items-center px-3 py-1.5 font-bold group hover:bg-gray-200 rounded-full "
    @click="handleClick()"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    handleClick: {
      type: Function,
      required: false,
      default: () => {}
    }
  }
}
</script>
