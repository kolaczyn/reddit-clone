<template>
  <div>
    <Paper class="w-80 m-4 p-2">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque adipisci consequuntur beatae expedita velit ea quibusdam aliquid nemo quod autem?</p>
    </Paper>
    <LabeledPaper class="w-80 m-4">
      <template #header>
        Hello, I am header
      </template>
      <slot>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolore sunt magni. Fugiat harum sit, totam asperiores possimus fuga sunt!</p>
      </slot>
    </LabeledPaper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LabeledPaper from '@/components/ui/LabeledPaper.vue'
import Paper from '@/components/ui/Paper.vue'

export default Vue.extend({
  components: { LabeledPaper, Paper }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
