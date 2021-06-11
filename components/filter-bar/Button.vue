<template>
  <button :class="['flex items-center px-3 py-1.5 font-bold group hover:bg-gray-200 rounded-full', isActive ? 'text-black' : 'text-gray-500', $slots.default && 'gap-1.5']" @click="setSelectedSort()">
    <slot name="icon" />
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive () : boolean {
      return this.$store.getters['selectedSort/selectedSort'] === this.$props.name
    }
    // ...mapGetters('selectedSort', ['selectedSort'])
  },
  methods: {
    setSelectedSort () {
      this.$store.commit('selectedSort/setSelectedSort', this.$props.name)
    }
  }
})
</script>
