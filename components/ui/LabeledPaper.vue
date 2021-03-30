<template>
  <Paper>
    <header class="bg-gray-200 p-2">
      <h3 class="font-bold">
        <slot name="header" />
      </h3>
    </header>
    <div class="p-2">
      <slot />
    </div>
  </Paper>
</template>

<script lang="ts">
import Paper from '@/components/ui/Paper.vue'
import Vue from 'vue'
export default Vue.extend({
  components: { Paper }
})
</script>
