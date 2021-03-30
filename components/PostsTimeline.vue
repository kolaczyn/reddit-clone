<template>
  <main>
    <Paper v-for="i in [0, 1, 2, 3, 4, 5, 6]" :key="i" class="mb-2 p-2">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias sed laborum consequatur aut ipsam corrupti fugit id veritatis harum.
    </Paper>
  </main>
</template>

<script>
import Paper from '@/components/ui/Paper.vue'
export default {
  components: { Paper }
}
</script>
