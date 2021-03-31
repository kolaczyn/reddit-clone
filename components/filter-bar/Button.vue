<template>
  <button :class="['flex items-center px-3 py-1.5 font-bold gap-1.5 group hover:bg-gray-200 rounded-full', isActive ? 'text-black' : 'text-gray-500']">
    <slot name="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
