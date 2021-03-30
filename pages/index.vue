<template>
  <div class="grid grid-cols-3 mt-2 gap-4 px-4 max-w-4xl mx-auto">
    <PostsTimeline class="col-span-2" />
    <Sidebar class="col-span-1" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PostsTimeline from '@/components/PostsTimeline.vue'
import Sidebar from '@/components/Sidebar.vue'

export default Vue.extend({
  components: { PostsTimeline, Sidebar },
  methods: {
    handleClick () {
      // eslint-disable-next-line no-console
      console.log('you clicked me')
    }
  }
})
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
